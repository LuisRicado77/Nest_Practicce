import { PartialType } from '@nestjs/mapped-types';
import { CategoryDto } from './category.dto';

export class UpCategoryDto extends PartialType(CategoryDto) {}
