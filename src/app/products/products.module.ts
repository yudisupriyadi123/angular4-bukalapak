import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }   from '@angular/http';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-list.component';
import { ProductDetailProductComponent }
from './product-list/product-list-product.component';
import { ProductDetailSellerComponent }
from './product-list/product-list-seller.component';

import { ProductService } from './shared/product.service';
import { SellerService } from './shared/seller.service';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductDetailProductComponent,
        ProductDetailSellerComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        ProductsRoutingModule,
    ],
    providers: [
        ProductService,
        SellerService,
    ],
})
export class ProductsModule { }

