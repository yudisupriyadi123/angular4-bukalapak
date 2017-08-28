import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Seller } from './seller.model';

@Injectable()
export class SellerService {

    private endpointUrl = 'https://api.bukalapak.com/v2/users/:id/profile.json';

    constructor(private http: Http) {  }

    /**
     * Get a spesific seller
     * @param {string} id - seller id
     */
    getSeller(id: number): Promise<Seller> {
        let endpointUrl = this.endpointUrl.replace(':id', id);

        return this.http
            .get(endpointUrl)
            .toPromise()
            .then(res => res.json().user)
            .catch(this.handleError);
    }

    /**
     * Error handler for promise
     * @param {Any} error
     */
    private handleError(error: any): Promise<any> {
        console.error('An error occured inside SellerService: ', error);
        return Promise.reject(error.message || error);
    } 
} 

