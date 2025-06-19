interface TeamSectionProps {
  title: string
  subtitle: string
  children: React.ReactNode
}

export const TeamSection = ({ title, subtitle, children }: TeamSectionProps) => {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
          {title}
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
      {children}
    </section>
  )
}