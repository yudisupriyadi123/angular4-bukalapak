import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }   from '@angular/http';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductListComponent } from './product-list/product-list.component';

import { ProductService } from './shared/product.service';

@NgModule({
    declarations: [
        ProductListComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        ProductsRoutingModule,
    ],
    providers: [
        ProductService,
    ],
})
export class ProductsModule { }

