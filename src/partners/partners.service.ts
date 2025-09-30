import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LanguageService } from "src/language/language.service";
import { BaseService } from "src/shared/base/base";
import { APIFeaturesService } from "src/shared/filters/filter.service";
import { ICrudService } from "src/shared/interfaces/crud-service.interface";
import { Repository } from "typeorm";
import { CreatePartnersDto, UpdatePartnersDto } from "./dto/create-partners.dto";
import { Partners } from "./partners.entity";

@Injectable()
export class PartnersService
  extends BaseService<Partners, CreatePartnersDto, UpdatePartnersDto>
  implements ICrudService<Partners, CreatePartnersDto, UpdatePartnersDto>
{
  constructor(
    @InjectRepository(Partners)
    repository: Repository<Partners>,
    protected readonly apiFeaturesService: APIFeaturesService,
    protected readonly languageService: LanguageService,
  ) {
    super(repository, apiFeaturesService, languageService);
  }

  // Override findAll to return data without pagination
  public async findAll(filterData: any) {
    return this.findFront({
      query: {
        ...filterData,
        isPagination: "false",
      },
    });
  }

  // Get active partners data
  public async getActivePartners() {
    const partners = await this.findAll({
      is_active: true,
      relations: {
        language: {
          select: ["id", "name"],
        },
      },
    });
    if (partners && partners.data && partners.data.length > 0) {
      return { content: [{ ...partners.data[0], language_id: partners.data[0].language.id }] };
    }
    return { content: null };
  }
}
