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

export class SubfooterContentDto {
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

  // Is active/visible
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class SubfooterUpdateContentDto {
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

  // Is active/visible
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class CreateSubfooterDto {
  // Content array for multiple languages
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubfooterContentDto)
  content: SubfooterContentDto[];

  createdBy: User;
}

export class UpdateSubfooterDto {
  // Content array for multiple languages with IDs
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubfooterUpdateContentDto)
  content: SubfooterUpdateContentDto[];

  createdBy: User;
}
