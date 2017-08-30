import { Component, Input } from '@angular/core';

import { Seller }   from '../shared/seller.model';

@Component({
    selector: 'app-product-detail-seller',
    templateUrl: './product-detail-seller.component.html',
    styleUrls: [ './product-detail-seller.component.css' ],
})
export class ProductDetailSellerComponent {
    @Input() seller : Seller;
}

