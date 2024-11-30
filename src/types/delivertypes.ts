export type delivertypesCalculate_input = {
    items: Array<{ [key: string]: any }>; // array of physical items in cart
    warehouse: { location: { lat: string | number | undefined, lng: string | number | undefined }, name: string | undefined, details: string | undefined }; // { location : { lat , lng } , name , details }
    billing: { [key: string]: any };
}

export type delivertypesCalculate_output = {
    status: boolean;
    cost: number;
    currency: string;
}