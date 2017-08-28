export class Product {
    id         : string;
    name       : string;
    price      : number;
    category   : string;
    tag_pages  : Array<{id : number, name : string, has_landing_page : boolean}>;
    condition  : string;
    sold_count : number;
    view_count : number;
    updated_at : string;
    stock      : number;
    desc       : string;

    images       : string[];
    small_images : string[];
    // actually, bukalapak returns many data over this
    // but since the others is not needed, so these data is enough
}

