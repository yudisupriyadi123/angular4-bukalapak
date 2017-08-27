import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        /* lazy loading, so we don't need to import the ProductModule */
        path: 'product',
        loadChildren: './products/products.module#ProductsModule',
    },
    {
        path: '',
        redirectTo: '/product/list',
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule { }

