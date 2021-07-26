import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';
import {NotificationService} from '../../service/notification/notification.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

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
  selectedImage = null;
  imgSrc = '';

  constructor(private productService: ProductService,
              private notificationService: NotificationService,
              private categoryService: CategoryService,
              private storage: AngularFireStorage) {
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
        this.notificationService.showSuccessMessage('thành công!');
      }, () => this.notificationService.showErrorMessage('Lỗi')); //đã gọi API
    } else {
      this.notificationService.showErrorMessage('Dữ liệu nhập vào không hợp lệ');
    }
  }

  uploadFile() {
    if (this.selectedImage != null) {
      const filePath = `${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            console.log(url);
            this.imgSrc = url;
          });
        })).subscribe();
    }
  }

  showPreview(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = event.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      this.uploadFile();
    } else {
      this.selectedImage = null;
    }
  }
}
