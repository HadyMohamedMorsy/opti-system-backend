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

export class FeatureDto {
  @IsString()
  icon: string;

  @IsString()
  @MaxLength(200)
  title: string;

  @IsString()
  description: string;
}

export class SectionFourContentDto {
  // Language ID
  @IsNumber()
  language_id: number;

  // Section title
  @IsString()
  @IsOptional()
  @MaxLength(200)
  title?: string;

  // Section description
  @IsString()
  @IsOptional()
  description?: string;

  // Features array as JSONB
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FeatureDto)
  @IsOptional()
  features?: FeatureDto[];

  // Is active/visible
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class SectionFourUpdateContentDto {
  // ID for updates
  @IsNumber()
  id: number;

  // Language ID
  @IsNumber()
  language_id: number;

  // Section title
  @IsString()
  @IsOptional()
  @MaxLength(200)
  title?: string;

  // Section description
  @IsString()
  @IsOptional()
  description?: string;

  // Features array as JSONB
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FeatureDto)
  @IsOptional()
  features?: FeatureDto[];

  // Is active/visible
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class CreateSectionFourDto {
  // Content array for multiple languages
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SectionFourContentDto)
  content: SectionFourContentDto[];

  createdBy: User;
}

export class UpdateSectionFourDto {
  // Content array for multiple languages with IDs
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SectionFourUpdateContentDto)
  content: SectionFourUpdateContentDto[];

  createdBy: User;
}
