import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductCreateDto, ProductUpdateDto } from './products.dtos';
//import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';

@Controller('products')
export class ProductsController {
  constructor(private productServices: ProductsService) {}
  @Get()
  getProducts() {
    return this.productServices.find();
  }

  @Get(':id')
  getProductOne(@Param('id', ParseIntPipe) id: number) {
    return this.productServices.findOne(id);
  }
  @Post()
  createProduct(@Body() body: ProductCreateDto) {
    return this.productServices.createProduct(body);
  }
  @Patch(':id')
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() body: ProductUpdateDto) {
    return this.productServices.updateProduct(id, body);
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return this.productServices.deleteProduct(id);
  }
}
