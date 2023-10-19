import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductEntity } from './products.entity';
import { ProductCreateDto, ProductUpdateDto } from './products.dtos';

@Injectable()
export class ProductsService {
  private products: ProductEntity[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 12,
      stock: 4,
      imageUrl: 'asdfa',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 1',
      price: 12,
      stock: 4,
      imageUrl: 'asdfa',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 1',
      price: 12,
      stock: 4,
      imageUrl: 'asdfa',
    },
  ];

  constructor() {}

  find() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.find((i) => i.id == id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }
  createProduct(body: ProductCreateDto) {
    console.log(body);
    const newProduct = { ...body, id: this.products.length + 1 };
    this.products.push(newProduct);
    return newProduct;
  }
  deleteProduct(id: number) {
    this.findOne(id);
    this.products.splice(id - 1, 1);
    return `Producto ${id} Eliminado`;
  }
  updateProduct(id: number, body: ProductUpdateDto) {
    this.findOne(id);
    const index = id - 1;
    this.products[index] = { ...this.products[index], ...body };
    return { ...this.products[index], ...body };
  }
}
