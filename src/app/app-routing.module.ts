import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './helper/auth-guard';


const routes: Routes = [
  {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
