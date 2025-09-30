import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LanguageModule } from "src/language/language.module";
import { SharedModule } from "src/shared/shared.module";
import { PartnersController } from "./partners.controller";
import { Partners } from "./partners.entity";
import { PartnersService } from "./partners.service";

@Module({
  imports: [TypeOrmModule.forFeature([Partners]), SharedModule, LanguageModule],
  controllers: [PartnersController],
  providers: [PartnersService],
  exports: [PartnersService],
})
export class PartnersModule {}
