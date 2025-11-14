import { Injectable } from "@nestjs/common";
import { GeneralSettingsService } from "../general-settings/settings.service";
import { PartnersService } from "../partners/partners.service";
import { SectionFiveService } from "../section-five/section-five.service";
import { SectionFourService } from "../section-four/section-four.service";
import { SectionOneService } from "../section-one/section-one.service";
import { SectionReviewsService } from "../section-reviews/section-reviews.service";
import { SectionThreeService } from "../section-three/section-three.service";
import { SectionTwoService } from "../section-two/section-two.service";
import { SubfooterService } from "../subfooter/subfooter.service";

@Injectable()
export class UnifiedDataService {
  constructor(
    private readonly generalSettingsService: GeneralSettingsService,
    private readonly sectionOneService: SectionOneService,
    private readonly sectionTwoService: SectionTwoService,
    private readonly sectionThreeService: SectionThreeService,
    private readonly sectionFourService: SectionFourService,
    private readonly sectionFiveService: SectionFiveService,
    private readonly sectionReviewsService: SectionReviewsService,
    private readonly partnersService: PartnersService,
    private readonly subfooterService: SubfooterService,
  ) {}

  async getAllSectionsData() {
    try {
      // جلب البيانات من جميع الـ sections بالتوازي
      const [
        generalSettings,
        sectionOne,
        sectionTwo,
        sectionThree,
        sectionFour,
        sectionFive,
        sectionReviews,
        partners,
        subfooter,
      ] = await Promise.all([
        this.getGeneralSettings(),
        this.sectionOneService.getActiveSectionOne(),
        this.sectionTwoService.getActiveSectionTwo(),
        this.sectionThreeService.getActiveSectionThree(),
        this.sectionFourService.getActiveSectionFour(),
        this.sectionFiveService.getActiveSectionFive(),
        this.sectionReviewsService.getActiveSectionReviews(),
        this.partnersService.getActivePartners(),
        this.subfooterService.getActiveSubfooter(),
      ]);

      return {
        general_settings: generalSettings,
        section_one: sectionOne,
        section_two: sectionTwo,
        section_three: sectionThree,
        section_four: sectionFour,
        section_five: sectionFive,
        section_reviews: sectionReviews,
        partners: partners,
        subfooter: subfooter,
      };
    } catch (err) {
      throw new Error(`Error fetching unified data: ${err.message}`);
    }
  }

  private async getGeneralSettings() {
    const settings = await this.generalSettingsService.findAll({});
    if (settings && settings.data && settings.data.length > 0) {
      const settingsData = settings.data[0];
      if (settingsData.content && Array.isArray(settingsData.content)) {
        settingsData.content = settingsData.content.map(item => ({
          ...item,
          language_id: item.language_id || null,
        }));
      }
      return { content: settingsData };
    }
  }
}
