import {
  IsNotEmpty,
  IsString,
  IsEnum,
  IsInt,
  IsUrl,
  IsOptional,
  IsArray,
  ArrayNotEmpty,
} from 'class-validator';
import { Category } from '../types/showCategory.type';
import { Type } from 'class-transformer';

export class CreatedShowDto {
  // 공연명, 소개, 카테고리, 장소, 이미지 URL, 공연 총시간
  @IsString({ message: '공연명은 문자열이여야 합니다.' })
  @IsNotEmpty({ message: '공연명을 입력해주세요.' })
  showName: string;

  @IsString({ message: '공연 소개는 문자열이여야합니다.' })
  @IsNotEmpty({ message: '공연 소개를 입력해주세요.' })
  description: string;

  @IsEnum(Category)
  @IsNotEmpty({ message: '공연 카테고리를 선택해주세요.' })
  category: Category;

  @IsString({ message: '공연 장소는 문자열이여야합니다.' })
  @IsNotEmpty({ message: '공연 장소를 입력해주세요.' })
  location: string;

  @IsUrl({}, { message: '유효한 URL 형식의 이미지를 입력해주세요.' })
  @IsOptional()
  imageUrl?: string;

  @IsArray()
  @ArrayNotEmpty({ message: '공연 날짜와 시간을 입력해주세요.' })
  @Type(() => String)
  @IsString({ each: true, message: '공연 날짜/시간은 문자열이어야 합니다.' })
  showDateTime: string[];

  @IsInt({ message: '공연 총시간은 정수여야 합니다.' })
  @IsNotEmpty({ message: '공연 총시간을 입력해주세요.' })
  showRuntime: number;
}
