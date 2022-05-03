import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminComponent,
    MenuComponent,
    HeaderComponent,
    ProductListComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
