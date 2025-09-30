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

export class SectionOneContentDto {
  // Language ID
  @IsNumber()
  language_id: number;

  // Main title/heading
  @IsString()
  @IsOptional()
  @MaxLength(200)
  title?: string;

  // Description text
  @IsString()
  @IsOptional()
  description?: string;

  // Features array (Free SSL Services, 5000 Users, etc.)
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  features?: string[];

  // Discount percentage
  @IsNumber()
  @IsOptional()
  discount_percentage?: number;

  // Discount label (OFF, LIMITED)
  @IsString()
  @IsOptional()
  @MaxLength(50)
  discount_label?: string;

  // Main hero image
  @IsString()
  @IsOptional()
  main_image?: string;

  // Is active/visible
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class SectionOneUpdateContentDto {
  // ID for updates
  @IsNumber()
  id: number;

  // Language ID
  @IsNumber()
  language_id: number;

  // Main title/heading
  @IsString()
  @IsOptional()
  @MaxLength(200)
  title?: string;

  // Description text
  @IsString()
  @IsOptional()
  description?: string;

  // Features array (Free SSL Services, 5000 Users, etc.)
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  features?: string[];

  // Discount percentage
  @IsNumber()
  @IsOptional()
  discount_percentage?: number;

  // Discount label (OFF, LIMITED)
  @IsString()
  @IsOptional()
  @MaxLength(50)
  discount_label?: string;

  // Main hero image
  @IsString()
  @IsOptional()
  main_image?: string;

  // Is active/visible
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class CreateSectionOneDto {
  // Content array for multiple languages
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SectionOneContentDto)
  content: SectionOneContentDto[];

  createdBy: User;
}

export class UpdateSectionOneDto {
  // Content array for multiple languages with IDs
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SectionOneUpdateContentDto)
  content: SectionOneUpdateContentDto[];

  createdBy: User;
}
