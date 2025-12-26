import { Type } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  ValidateNested,
} from "class-validator";
import { User } from "src/users/user.entity";

export class ReviewDto {
  @IsString()
  icon: string;

  @IsString()
  @MaxLength(200)
  name: string;

  @IsString()
  description: string;

  @IsString()
  image_reviewer: string;

  @IsString()
  @MaxLength(100)
  name_reviewer: string;

  @IsNumber()
  @Type(() => Number)
  @Min(1)
  @Max(5)
  count_rating: number;
}

export class SectionReviewsContentDto {
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

  // Reviews array as JSONB
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReviewDto)
  @IsOptional()
  reviews?: ReviewDto[];

  // Is active/visible
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class SectionReviewsUpdateContentDto {
  // ID for updates
  @IsNumber()
  @IsOptional()
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

  // Reviews array as JSONB
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReviewDto)
  @IsOptional()
  reviews?: ReviewDto[];

  // Is active/visible
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class CreateSectionReviewsDto {
  // Content array for multiple languages
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SectionReviewsContentDto)
  content: SectionReviewsContentDto[];

  createdBy: User;
}

export class UpdateSectionReviewsDto {
  // Content array for multiple languages with IDs
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SectionReviewsUpdateContentDto)
  content: SectionReviewsUpdateContentDto[];

  createdBy: User;
}
