import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  async ngOnInit() {
    // this.getAllProduct();
    this.products = await this.getAllProductUsingPromise();
  }

  getAllProduct() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  getAllProductUsingPromise() {
    return this.productService.getAll().toPromise();
  }
}
