import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LanguageModule } from "src/language/language.module";
import { SharedModule } from "src/shared/shared.module";
import { SubfooterController } from "./subfooter.controller";
import { Subfooter } from "./subfooter.entity";
import { SubfooterService } from "./subfooter.service";

@Module({
  imports: [TypeOrmModule.forFeature([Subfooter]), SharedModule, LanguageModule],
  controllers: [SubfooterController],
  providers: [SubfooterService],
  exports: [SubfooterService],
})
export class SubfooterModule {}
