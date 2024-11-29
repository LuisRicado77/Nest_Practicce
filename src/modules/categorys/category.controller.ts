
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
  } from '@nestjs/common';
  import { CategoryService } from './category.service';
  import { CategoryDto } from './dto/category.dto';
  import { UpCategoryDto } from './dto/category-update.dto';
  
  @Controller('categoty')
  export class categoryController {
    constructor(private readonly categoryService: CategoryService) {}
  
    @Get('/:id')
    getCategoryById(@Param('id', ParseIntPipe) id: number) {
      return this.categoryService.getCategory(id);
    }
  
    @Get()
    getCategory() {
      return this.categoryService.getCategorys();
    }
  
    @Post()
    postCategory(@Body() data: CategoryDto) {
      console.log(data);
      this.categoryService.createCategory(data);
      return 'Saved with success';
    }
  
    @Patch('/:id')
    updatecategory(@Param('id') id: number, @Body() updatecategory: UpCategoryDto) {
      return this.categoryService.updateCategory(String(id), UpCategoryDto);
    }
  
    @Delete('/:id')
    deleteEvent(@Param('id') id: number) {
      return this.categoryService.deleteCategory(String(id));
  
  }
  
