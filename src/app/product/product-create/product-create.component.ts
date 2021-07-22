import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';
import {NotificationService} from '../../service/notification/notification.service';

declare var $: any;
declare var Swal: any;

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
              private notificatuonService: NotificationService,
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
        this.notificatuonService.showSuccessMessage("thành công!");
      }, () => this.notificatuonService.showErrorMessage("Lỗi")); //đã gọi API
    } else {
      this.notificatuonService.showErrorMessage('Dữ liệu nhập vào không hợp lệ');
    }
  }
}
