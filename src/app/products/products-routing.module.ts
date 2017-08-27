import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';

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
        ],
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class ProductsRoutingModule { }

