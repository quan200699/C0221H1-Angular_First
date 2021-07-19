import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @Input()
  product: Product = {};

  constructor() {
  }

  ngOnInit() {
  }

}
