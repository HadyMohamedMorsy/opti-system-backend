import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LanguageService } from "src/language/language.service";
import { BaseService } from "src/shared/base/base";
import { APIFeaturesService } from "src/shared/filters/filter.service";
import { ICrudService } from "src/shared/interfaces/crud-service.interface";
import { Repository } from "typeorm";
import { CreateSubfooterDto, UpdateSubfooterDto } from "./dto/create-subfooter.dto";
import { Subfooter } from "./subfooter.entity";

@Injectable()
export class SubfooterService
  extends BaseService<Subfooter, CreateSubfooterDto, UpdateSubfooterDto>
  implements ICrudService<Subfooter, CreateSubfooterDto, UpdateSubfooterDto>
{
  constructor(
    @InjectRepository(Subfooter)
    repository: Repository<Subfooter>,
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

  // Get active subfooter data
  public async getActiveSubfooter() {
    const subfooter = await this.findAll({
      is_active: true,
      relations: {
        language: {
          select: ["id", "name"],
        },
      },
    });
    if (subfooter && subfooter.data && subfooter.data.length > 0) {
      return { content: [{ ...subfooter.data[0], language_id: subfooter.data[0].language.id }] };
    }
    return { content: null };
  }
}
