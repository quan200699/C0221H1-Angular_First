import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12 Pro Max',
    price: 28800000,
    description: 'Hàng tồn kho'
  }, {
    id: 2,
    name: 'IPhone 12',
    price: 23000000,
    description: 'Hàng mới'
  }];
  isShowedFormCreate = false;
  isShowedFormUpdate = false;
  productCurrentIndex = -1;

  constructor() {
  }

  ngOnInit() {
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
}
