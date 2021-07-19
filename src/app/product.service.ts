import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './model/product';
import {environment} from '../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { //Tiêm phụ thuộc dạng constructor
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/products'); //http://localhost:8080/products
  }
}
