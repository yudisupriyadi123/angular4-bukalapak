import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Product }          from '../shared/product.model';
import { ProductService }   from '../shared/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: [],
})
export class ProductListComponent {
    title : string = 'title is empty'; 

    products : Product[]    = null;
    fetched  : boolean      = false;

    /* pagination */
    private page        : number = 1;
    private per_page    : number = 6;

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.productService.getProducts(this.page, this.per_page)
        .then(products => {
            this.products = products;
            this.fetched = true;
        });
    }

    shrinkProductName(name: string) : string {
        if (name.length > 53) {
            return name.substr(0, 53).trim().concat('...');
        }

        return name;
    }

    productNameToUrl(product_name : string) {
        // change space to dash
        return encodeURI(product_name.replace(/ /g, '-'))
            .toLowerCase();
    }
}

