import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product }          from '../shared/product.model';
import { ProductService }   from '../shared/product.service';
import { SellerService }    from '../shared/seller.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: [],
})
export class ProductDetailComponent {

    constructor(
        private productService: ProductService,
        private sellerService: SellerService,
    )

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => return fetchProduct(+params.get('id')))
            .subscribe((product) => {
                this.product = product;

                fetchSeller(product.seller_id)
                    .then((seller) => this.seller = seller));
            });
    }

    /**
     * Fetch specific product
     * @param {Number} id - product id
     */
    fetchProduct(id: number): Promise<Product> {
        return this.productService.getProduct(id);
    }

    /**
     * Fetch specific seller
     * @param {Number} id - seller id
     * @return
     */
    fetchSeller(id: number): Promise<Seller> {
        return this.sellerService.getSeller(id);
    }
}

