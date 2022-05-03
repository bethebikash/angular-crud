import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: 'products', component: ProductListComponent
      },
      {
        path: 'products/add', component: ProductFormComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
