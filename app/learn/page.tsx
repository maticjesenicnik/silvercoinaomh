"use client"

import { PageHeader } from "components/PageHeader"
import { LearnIntro } from "components/learn/LearnIntro"
import { HowToPlayVideo } from "components/learn/HowToPlayVideo"
import { RulebookSection } from "components/learn/RulebookSection"
import { LearningPath } from "components/learn/LearningPath"
import { QuickReference } from "components/learn/QuickReference"
import { LearnCallToAction } from "components/learn/LearnCallToAction"

const Learn = () => {
  return (
    <div className="min-h-screen">
      <PageHeader title="Learn" />

      <div className="container mx-auto px-4 pb-16 lg:px-6">
        {/* Introduction */}
        <LearnIntro />

        {/* How to Play Video */}
        <HowToPlayVideo />

        {/* Official Rulebooks */}
        <RulebookSection />

        {/* Learning Path */}
        <LearningPath />

        {/* Quick Reference */}
        <QuickReference />

        {/* Call to Action */}
        <LearnCallToAction />
      </div>
    </div>
  )
}

export default Learn