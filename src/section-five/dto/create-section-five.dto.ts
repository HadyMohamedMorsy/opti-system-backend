import { Type } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { User } from "src/users/user.entity";

export class ItemDto {
  @IsString()
  icon: string;

  @IsString()
  @MaxLength(200)
  title: string;

  @IsString()
  description: string;
}

export class SectionFiveContentDto {
  // Language ID
  @IsNumber()
  language_id: number;

  // Items array
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  @IsOptional()
  items?: ItemDto[];

  // Is active/visible
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class SectionFiveUpdateContentDto {
  // ID for updates
  @IsNumber()
  id: number;

  // Language ID
  @IsNumber()
  language_id: number;

  // Items array
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  @IsOptional()
  items?: ItemDto[];

  // Is active/visible
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class CreateSectionFiveDto {
  // Content array for multiple languages
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SectionFiveContentDto)
  content: SectionFiveContentDto[];

  createdBy: User;
}

export class UpdateSectionFiveDto {
  // Content array for multiple languages with IDs
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SectionFiveUpdateContentDto)
  content: SectionFiveUpdateContentDto[];

  createdBy: User;
}
