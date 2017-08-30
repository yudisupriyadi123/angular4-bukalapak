import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
    {  
        // component-less route
        path: '',
        children: [
            {
                // when '/product' only then redirect to '/product/list'
                path: '',
                redirectTo: '/product/list',
                pathMatch: 'full',
            },
            {
                path: 'list',
                component: ProductListComponent,
                data: { title: 'Product List' },
            },
            {
                path: 'detail/:id',
                component: ProductDetailComponent,
                data: { title: 'Product Detail' },
            }
        ],
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class ProductsRoutingModule { }

