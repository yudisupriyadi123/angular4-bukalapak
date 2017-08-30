import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }   from '@angular/http';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailProductComponent }
from './product-detail/product-detail-product.component';
import { ProductDetailSellerComponent }
from './product-detail/product-detail-seller.component';

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

