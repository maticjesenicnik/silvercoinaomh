"use client";

import { PageHeader } from "components/PageHeader";
import { PlaytestIntro } from "components/playtest/PlaytestIntro";
import { TabletopiaInfo } from "components/playtest/TabletopiaInfo";
import { AccessMethods } from "components/playtest/AccessMethods";
import { GameModes } from "components/playtest/GameModes";
import { PlaytestingInfo } from "components/playtest/PlaytestingInfo";
import { PlaytestCallToAction } from "components/playtest/PlaytestCallToAction";

const Playtest = () => {
  return (
    <div className="min-h-screen">
      <PageHeader title="Playtest" />

      <div className="container mx-auto px-4 pb-16 lg:px-6">
        {/* Introduction */}
        <PlaytestIntro />

        {/* Tabletopia Information */}
        <TabletopiaInfo />

        {/* Access Methods */}
        <AccessMethods />

        {/* Game Modes */}
        <GameModes />

        {/* Playtesting Information */}
        <PlaytestingInfo />

        {/* Call to Action */}
        <PlaytestCallToAction />
      </div>
    </div>
  );
};

export default Playtest;
