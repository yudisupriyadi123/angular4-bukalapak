import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {  
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

