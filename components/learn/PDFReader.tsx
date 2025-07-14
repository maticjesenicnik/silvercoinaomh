"use client"

import { useState, useCallback } from "react"
import { pdfjs } from "react-pdf"
import dynamic from "next/dynamic"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

// Dynamically import PDF components to prevent SSR issues
const Document = dynamic(() => import("react-pdf").then(mod => ({ default: mod.Document })), {
  ssr: false,
  loading: () => (
    <div className="flex h-96 w-full items-center justify-center bg-white/5">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-400 border-t-transparent"></div>
    </div>
  )
})

const Page = dynamic(() => import("react-pdf").then(mod => ({ default: mod.Page })), {
  ssr: false,
  loading: () => (
    <div className="flex h-96 w-72 items-center justify-center bg-white/5">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-400 border-t-transparent"></div>
    </div>
  )
})

// Set up PDF.js worker
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
}

interface PDFReaderProps {
  pdfUrl: string
  title: string
  onClose: () => void
}

export const PDFReader = ({ pdfUrl, title, onClose }: PDFReaderProps) => {
  const [numPages, setNumPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")
  const [scale, setScale] = useState<number>(1.0)
  const [isClient, setIsClient] = useState<boolean>(false)

  // Ensure we're on the client side
  useState(() => {
    setIsClient(true)
  })

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setLoading(false)
    setError("")
  }, [])

  const onDocumentLoadError = useCallback((error: Error) => {
    setError(`Failed to load PDF: ${error.message}. Please try downloading instead.`)
    setLoading(false)
    console.error("PDF load error:", error, "PDF URL:", pdfUrl)
  }, [])

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 2))
  }

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(numPages - 1, prev + 2))
  }

  const goToFirstPage = () => {
    setCurrentPage(1)
  }

  const goToLastPage = () => {
    setCurrentPage(numPages % 2 === 0 ? numPages - 1 : numPages)
  }

  const zoomIn = () => {
    setScale(prev => Math.min(2.0, prev + 0.2))
  }

  const zoomOut = () => {
    setScale(prev => Math.max(0.5, prev - 0.2))
  }

  const resetZoom = () => {
    setScale(1.0)
  }

  const downloadPDF = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `${title.replace(/\s+/g, '_')}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Calculate if we should show two pages
  const showTwoPages = currentPage < numPages
  const leftPage = currentPage
  const rightPage = currentPage + 1

  // Don't render PDF components on server
  if (!isClient) {
    return (
      <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 bg-black/50 p-4">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-white transition-colors hover:bg-white/20"
              title="Close"
            >
              <span className="material-icons-outlined text-xl">close</span>
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center overflow-auto p-4">
            <div className="flex items-center gap-3 text-white">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-400 border-t-transparent"></div>
              <span>Loading PDF reader...</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-black/50 p-4">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            {!loading && !error && (
              <span className="text-sm text-gray-400">
                Page {currentPage}{showTwoPages && ` - ${rightPage}`} of {numPages}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="flex items-center gap-1 rounded-lg border border-white/20 bg-white/10 p-1">
              <button
                onClick={zoomOut}
                className="rounded p-2 text-white transition-colors hover:bg-white/20"
                title="Zoom Out"
              >
                <span className="material-icons-outlined text-lg">zoom_out</span>
              </button>
              <button
                onClick={resetZoom}
                className="rounded px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
                title="Reset Zoom"
              >
                {Math.round(scale * 100)}%
              </button>
              <button
                onClick={zoomIn}
                className="rounded p-2 text-white transition-colors hover:bg-white/20"
                title="Zoom In"
              >
                <span className="material-icons-outlined text-lg">zoom_in</span>
              </button>
            </div>

            {/* Download Button */}
            <button
              onClick={downloadPDF}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              <span className="material-icons-outlined text-lg">download</span>
              Download
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-white transition-colors hover:bg-white/20"
              title="Close"
            >
              <span className="material-icons-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col items-center justify-center overflow-auto p-4">
          {loading && (
            <div className="flex items-center gap-3 text-white">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-400 border-t-transparent"></div>
              <span>Loading PDF...</span>
            </div>
          )}

          {error && (
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-6 text-center">
              <span className="material-icons-outlined mb-2 block text-4xl text-red-400">error</span>
              <h4 className="mb-2 text-lg font-bold text-white">Error Loading PDF</h4>
              <p className="mb-4 text-red-300">{error}</p>
              <button
                onClick={downloadPDF}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
              >
                Download PDF Instead
              </button>
            </div>
          )}

          {!loading && !error && (
            <div className="flex flex-col items-center">
              {/* PDF Pages */}
              <div className="flex gap-2 rounded-lg border border-white/10 bg-white/5 p-4 shadow-2xl">
                <Document
                  file={pdfUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading=""
                  error=""
                  options={{
                    cMapUrl: 'https://unpkg.com/pdfjs-dist@3.11.174/cmaps/',
                    cMapPacked: true,
                    standardFontDataUrl: 'https://unpkg.com/pdfjs-dist@3.11.174/standard_fonts/',
                  }}
                >
                  <div className="flex gap-2">
                    {/* Left Page */}
                    <div className="border border-white/20">
                      <Page
                        pageNumber={leftPage}
                        scale={scale}
                        loading={
                          <div className="flex h-96 w-72 items-center justify-center bg-white/5">
                            <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-400 border-t-transparent"></div>
                          </div>
                        }
                        error={
                          <div className="flex h-96 w-72 items-center justify-center bg-red-500/10 text-red-400">
                            <span>Failed to load page</span>
                          </div>
                        }
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </div>

                    {/* Right Page */}
                    {showTwoPages && rightPage <= numPages && (
                      <div className="border border-white/20">
                        <Page
                          pageNumber={rightPage}
                          scale={scale}
                          loading={
                            <div className="flex h-96 w-72 items-center justify-center bg-white/5">
                              <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-400 border-t-transparent"></div>
                            </div>
                          }
                          error={
                            <div className="flex h-96 w-72 items-center justify-center bg-red-500/10 text-red-400">
                              <span>Failed to load page</span>
                            </div>
                          }
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                        />
                      </div>
                    )}
                  </div>
                </Document>
              </div>

              {/* Navigation Controls */}
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center gap-1 rounded-lg border border-white/20 bg-white/10 p-1">
                  <button
                    onClick={goToFirstPage}
                    disabled={currentPage === 1}
                    className="rounded p-2 text-white transition-colors hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    title="First Page"
                  >
                    <span className="material-icons-outlined text-lg">first_page</span>
                  </button>
                  <button
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    className="rounded p-2 text-white transition-colors hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Previous Pages"
                  >
                    <span className="material-icons-outlined text-lg">chevron_left</span>
                  </button>
                  <button
                    onClick={goToNextPage}
                    disabled={currentPage >= numPages - 1}
                    className="rounded p-2 text-white transition-colors hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Next Pages"
                  >
                    <span className="material-icons-outlined text-lg">chevron_right</span>
                  </button>
                  <button
                    onClick={goToLastPage}
                    disabled={currentPage >= numPages - 1}
                    className="rounded p-2 text-white transition-colors hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Last Page"
                  >
                    <span className="material-icons-outlined text-lg">last_page</span>
                  </button>
                </div>

                {/* Page Input */}
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span>Go to page:</span>
                  <input
                    type="number"
                    min={1}
                    max={numPages}
                    value={currentPage}
                    onChange={(e) => {
                      const page = parseInt(e.target.value)
                      if (page >= 1 && page <= numPages) {
                        setCurrentPage(page % 2 === 0 ? page - 1 : page)
                      }
                    }}
                    className="w-16 rounded border border-white/20 bg-white/10 px-2 py-1 text-center text-white focus:border-blue-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}