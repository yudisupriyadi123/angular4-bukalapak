export class Seller {
    id         : number;
    username   : string;
    name       : string;
    avatar     : string;
    last_login : string;
    joined_at  : string;
    address    : {province : string, city : string};
    // actually, bukalapak returns many data over this
    // but since the others is not needed, so these data is enough
}

