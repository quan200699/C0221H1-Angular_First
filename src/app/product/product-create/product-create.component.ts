import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: 'Quân'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
