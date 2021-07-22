import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};
  categories: Category[] = [];
  isSubmitted = false;

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe(categories => this.categories = categories);
  }

  createProduct(productForm) {
    this.isSubmitted = true;
    if (productForm.valid) {
      this.productService.save(productForm.value).subscribe(() => {
        alert('Thành công');
      }, () => alert('Lỗi!')); //đã gọi API
    } else {
      alert('Dữ liệu nhập vào không hợp lệ');
    }
  }
}
