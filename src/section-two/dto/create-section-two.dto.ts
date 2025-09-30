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

export class HostingPlanDto {
  @IsString()
  @MaxLength(100)
  plan_name: string;

  @IsNumber()
  price: number;

  @IsString()
  @MaxLength(10)
  price_cents: string;

  @IsString()
  @MaxLength(50)
  price_period: string;

  @IsString()
  plan_description: string;

  @IsArray()
  @IsString({ each: true })
  features: string[];
}

export class SectionTwoContentDto {
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

  // Hosting plans array
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HostingPlanDto)
  @IsOptional()
  plans?: HostingPlanDto[];

  // Is active/visible
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class SectionTwoUpdateContentDto {
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

  // Hosting plans array
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HostingPlanDto)
  @IsOptional()
  plans?: HostingPlanDto[];

  // Is active/visible
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class CreateSectionTwoDto {
  // Content array for multiple languages
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SectionTwoContentDto)
  content: SectionTwoContentDto[];

  createdBy: User;
}

export class UpdateSectionTwoDto {
  // Content array for multiple languages with IDs
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SectionTwoUpdateContentDto)
  content: SectionTwoUpdateContentDto[];

  createdBy: User;
}
