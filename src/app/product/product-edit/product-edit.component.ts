import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../product.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = {};
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.getProductById(id);
    });
  }

  get name() {
    return this.productForm.get('name');
  }

  ngOnInit() {
  }

  getProductById(id) {
    return this.productService.getById(id).subscribe(product => {
      this.product = product;
      this.productForm = new FormGroup({
        name: new FormControl(this.product.name, [Validators.required, Validators.minLength(6)]),
        price: new FormControl(this.product.price),
        description: new FormControl(this.product.description)
      });
    });
  }

  updateProduct(id) {
    if (this.productForm.valid) {
      this.productService.update(id, this.product).subscribe(() => alert('Thành công'));
    } else {
      alert('Dữ liệu không đúng!');
    }
  }
}
