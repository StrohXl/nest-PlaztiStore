import { Controller, Get, Param, Post,Body } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategories() {
    return `categories`;
  }

  @Get(':id')
  getCategoriesForId(@Param('id') id: string) {
    return `categories ${id}`;
  }
  @Post()
  createCategorie(@Body()body:any) {
    return body
  }

}
