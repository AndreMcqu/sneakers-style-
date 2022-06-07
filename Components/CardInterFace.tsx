export interface CardInterFace {
    title: string;
    desc: string;
    photo?: any;
    likes?: string;
    size: string;
    price: string;
}

export interface Cardprice {
    price: string;
}

export interface Cardbody {
    title: string;
    desc: string;
    photo?: any;
}

export interface CardBottom {
    likes?: string;
    size: string;
}

export interface searchhandler {
    handler: any;
}