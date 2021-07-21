import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
  };
  isSubmitted = false;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }


  createProduct(productForm) {
    this.isSubmitted = true;
    if(productForm.valid){
      this.productService.save(productForm.value).subscribe(() => {
        alert('Thành công');
      }, () => alert('Lỗi!')); //đã gọi API
    }else {
      alert("Dữ liệu nhập vào không hợp lệ")
    }
  }
}
