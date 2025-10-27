import { Module } from "@nestjs/common";
import { GeneralSettingsModule } from "../general-settings/settings.module";
import { PartnersModule } from "../partners/partners.module";
import { SectionFiveModule } from "../section-five/section-five.module";
import { SectionFourModule } from "../section-four/section-four.module";
import { SectionOneModule } from "../section-one/section-one.module";
import { SectionReviewsModule } from "../section-reviews/section-reviews.module";
import { SectionThreeModule } from "../section-three/section-three.module";
import { SectionTwoModule } from "../section-two/section-two.module";
import { SubfooterModule } from "../subfooter/subfooter.module";
import { UnifiedDataController } from "./unified-data.controller";
import { UnifiedDataService } from "./unified-data.service";

@Module({
  imports: [
    GeneralSettingsModule,
    SectionOneModule,
    SectionTwoModule,
    SectionThreeModule,
    SectionFourModule,
    SectionFiveModule,
    SectionReviewsModule,
    PartnersModule,
    SubfooterModule,
  ],
  controllers: [UnifiedDataController],
  providers: [UnifiedDataService],
  exports: [UnifiedDataService],
})
export class UnifiedDataModule {}
