import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }


  createProduct() {
    this.productService.save(this.product).subscribe(() => {
      alert('Thành công');
    }, () => alert('Lỗi!')); //đã gọi API
  }
}
