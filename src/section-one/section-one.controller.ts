import { Body, Controller, Delete, HttpCode, Post, Put, Req } from "@nestjs/common";
import { Auth } from "src/shared/decorators/auth.decorator";
import { Roles } from "src/shared/decorators/roles.decorator";
import { AuthType, Role } from "src/shared/enum/global-enum";
import { RelationOptions, SelectOptions } from "src/shared/interfaces/query.interface";
import { CreateSectionOneDto, UpdateSectionOneDto } from "./dto/create-section-one.dto";
import { SectionOneService } from "./section-one.service";

@Controller("section-one")
export class SectionOneController implements SelectOptions, RelationOptions {
  constructor(private readonly service: SectionOneService) {}

  public selectOptions(): Record<string, boolean> {
    return {
      id: true,
      title: true,
      description: true,
      features: true,
      discount_percentage: true,
      discount_label: true,
      main_image: true,
      is_active: true,
      created_at: true,
      updated_at: true,
    };
  }

  public getRelationOptions(): Record<string, any> {
    return {
      createdBy: {
        id: true,
        firstName: true,
        lastName: true,
      },
    };
  }

  @Post("/index")
  @HttpCode(200)
  @Auth(AuthType.None)
  async findAll(@Body() filterQueryDto: any) {
    return this.service.findAll(filterQueryDto);
  }

  @Post("/show")
  @HttpCode(200)
  async findOne(@Body() filterQueryDto: any) {
    return this.service.findOne(filterQueryDto);
  }

  @Post("/get-active")
  @HttpCode(200)
  @Auth(AuthType.None)
  async getActiveSectionOne() {
    return this.service.getActiveSectionOne();
  }

  @Post("/store")
  @Auth(AuthType.Bearer)
  @Roles(Role.SUPER_ADMIN, Role.SYSTEM_ADMIN, Role.CONTENT_MANAGER)
  async create(@Body() create: CreateSectionOneDto, @Req() req: Request) {
    const contentWithCreatedBy = create.content.map(item => ({
      language_id: item.language_id,
      title: item.title,
      description: item.description,
      features: item.features,
      discount_percentage: item.discount_percentage,
      discount_label: item.discount_label,
      main_image: item.main_image,
      is_active: item.is_active,
      createdBy: req["createdBy"],
    }));

    return await this.service.create(
      contentWithCreatedBy as any,
      this.selectOptions(),
      this.getRelationOptions(),
    );
  }

  @Put("/update")
  @Auth(AuthType.Bearer)
  @Roles(Role.SUPER_ADMIN, Role.SYSTEM_ADMIN, Role.CONTENT_MANAGER)
  async update(@Body() update: UpdateSectionOneDto, @Req() req: Request) {
    const contentWithCreatedBy = update.content.map(item => ({
      id: item.id,
      language_id: item.language_id,
      title: item.title,
      description: item.description,
      features: item.features,
      discount_percentage: item.discount_percentage,
      discount_label: item.discount_label,
      main_image: item.main_image,
      is_active: item.is_active,
      createdBy: req["createdBy"],
    }));

    return await this.service.update(
      contentWithCreatedBy as any,
      this.selectOptions(),
      this.getRelationOptions(),
    );
  }

  @Delete("/delete")
  async delete(@Body() id: number) {
    return this.service.delete(id);
  }
}
