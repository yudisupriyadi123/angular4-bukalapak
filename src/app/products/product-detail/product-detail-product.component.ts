import { Component, Input } from '@angular/core';

import { Product } from '../shared/product.model';

@Component({
    selector: 'app-product-detail-product',
    templateUrl: './product-detail-product.component.html',
    styleUrls: [ './product-detail-product.component.css' ],
})
export class ProductDetailProductComponent {
    @Input() product : Product;
}

