import { Component} from '@angular/core';

import { Seller }   from '../shared/seller.model';

@Component({
    selector: 'app-product-detail-seller',
    templateUrl: './product-detail-seller.component.html',
    styleUrls: [],
})
export class ProductDetailSellerComponent {
    @Input() seller : Seller;
}

