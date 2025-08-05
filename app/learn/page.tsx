"use client";

import { HowToPlayVideo } from "components/learn/HowToPlayVideo";
import { LearnCallToAction } from "components/learn/LearnCallToAction";
import { LearningPath } from "components/learn/LearningPath";
import { LearnIntro } from "components/learn/LearnIntro";
import { QuickReference } from "components/learn/QuickReference";
import { RulebookSection } from "components/learn/RulebookSection";
import { PageHeader } from "components/PageHeader";

const Learn = () => {
  return (
    <div className="min-h-screen">
      <PageHeader title="Learn" />

      <div className="container mx-auto px-4 pb-16 lg:px-6">
        <LearnIntro />
        <HowToPlayVideo />
        <RulebookSection />
        <LearningPath />
        <QuickReference />
        <LearnCallToAction />
      </div>
    </div>
  );
};

export default Learn;
