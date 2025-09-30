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
  @MaxLength(10)
  number: string;

  @IsString()
  @MaxLength(200)
  title: string;

  @IsString()
  description: string;
}

export class TestimonialDto {
  @IsString()
  quote: string;

  @IsString()
  @MaxLength(100)
  author_name: string;

  @IsString()
  @MaxLength(100)
  author_position: string;
}

export class SectionThreeContentDto {
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

  // Features list array
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FeatureDto)
  @IsOptional()
  features?: FeatureDto[];

  // Main image
  @IsString()
  @IsOptional()
  main_image?: string;

  // Testimonial
  @ValidateNested()
  @Type(() => TestimonialDto)
  @IsOptional()
  testimonial?: TestimonialDto;

  // Is active/visible
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class SectionThreeUpdateContentDto {
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

  // Features list array
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FeatureDto)
  @IsOptional()
  features?: FeatureDto[];

  // Main image
  @IsString()
  @IsOptional()
  main_image?: string;

  // Testimonial
  @ValidateNested()
  @Type(() => TestimonialDto)
  @IsOptional()
  testimonial?: TestimonialDto;

  // Is active/visible
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class CreateSectionThreeDto {
  // Content array for multiple languages
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SectionThreeContentDto)
  content: SectionThreeContentDto[];

  createdBy: User;
}

export class UpdateSectionThreeDto {
  // Content array for multiple languages with IDs
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SectionThreeUpdateContentDto)
  content: SectionThreeUpdateContentDto[];

  createdBy: User;
}
