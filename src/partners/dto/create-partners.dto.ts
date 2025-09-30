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

export class PartnersContentDto {
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

  // Partners logos array
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  partners_logos?: string[];

  // Is active/visible
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class PartnersUpdateContentDto {
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

  // Partners logos array
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  partners_logos?: string[];

  // Is active/visible
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class CreatePartnersDto {
  // Content array for multiple languages
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PartnersContentDto)
  content: PartnersContentDto[];

  createdBy: User;
}

export class UpdatePartnersDto {
  // Content array for multiple languages with IDs
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PartnersUpdateContentDto)
  content: PartnersUpdateContentDto[];

  createdBy: User;
}
