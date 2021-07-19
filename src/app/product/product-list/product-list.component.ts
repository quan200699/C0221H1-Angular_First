import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  isShowedFormCreate = false;
  isShowedFormUpdate = false;
  productCurrentIndex = -1;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  showProductCreateForm() {
    this.isShowedFormCreate = !this.isShowedFormCreate;
  }

  showProductEditForm(index) {
    this.isShowedFormUpdate = !this.isShowedFormUpdate;
    if (this.isShowedFormUpdate) {
      this.productCurrentIndex = index;
    } else {
      this.productCurrentIndex = -1;
    }
  }

  addToList(value) {
    this.products.push(value);
  }
}
