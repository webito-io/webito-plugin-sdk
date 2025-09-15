export type paymentsCreate_input = {
    gateway: { [key: string]: any }; // data like name, currency, id'
    amount: number;
    callback: string;
    payment: string;
    order?: { [key: string]: any };
}

export type paymentsCreate_output = {
    status: boolean;
    transaction: { [key: string]: any };
    url: string;
}

export type paymentsVerify_input = {
    gateway: { [key: string]: any };
    payment: { [key: string]: any };
}

export type paymentsVerify_output = {
    status: boolean;
}

