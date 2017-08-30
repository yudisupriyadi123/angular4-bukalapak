import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Product }          from '../shared/product.model';
import { Seller  }          from '../shared/seller.model';
import { ProductService }   from '../shared/product.service';
import { SellerService }    from '../shared/seller.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: [ './product-detail.component.css' ],
})
export class ProductDetailComponent {

    product: Product;
    seller: Seller;

    constructor(
        private productService: ProductService,
        private sellerService: SellerService,
        private route: ActivatedRoute,
    ) {  }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.fetchProduct(params.get('id')))
            .subscribe((product) => {
                console.log('product = ', product);
                this.product = product;

                this.fetchSeller(product.seller_id)
                    .then((seller) => this.seller = seller);
            });
    }

    /**
     * Fetch specific product
     * @param {Number} id - product id
     */
    fetchProduct(id: string): Promise<Product> {
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

