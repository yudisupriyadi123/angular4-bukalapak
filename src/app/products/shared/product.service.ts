import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './product.model';

@Injectable()
export class ProductService {

    // Bukalapak Auth
    private user_id   = '41424987';
    private token     = 'fz4HDwPlXWWpeP66vquI';

    private headers     = new Headers({'Authorization': `Basic ${this.user_id}:${this.token}`});
    private endpointUrl = 'https://api.bukalapak.com/v2/products.json?page=1&per_page=10';

    constructor(private http: Http) {  }

    /**
     * Get a list of product
     * @param {Number} page - page in pagination
     * @param {Number} per_page - how many data you want per page
     */
    getProducts(page: number, per_page: number): Promise<Product[]> {
        /* Promise is enough
         * since I just fetching single chunk of data*/
        return this.http
            .get(this.endpointUrl, {headers: this.headers})
            .toPromise()
            .then(res => res.json().products)
            .catch(this.handleError);
    }

    /**
     * Error handler for promise
     * @param {Any} error
     */
    private handleError(error: any): Promise<any> {
        console.error('An error occured inside ProductService: ', error);
        return Promise.reject(error.message || error);
    } 
} 

