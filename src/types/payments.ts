export type paymentsCreate_input = {
    gateway: object; // data like name, currency, id'
    amount: number;
    callback: string;
    payment: string;
}

export type paymentsCreate_output = {
    status: boolean;
    transaction: object;
    url: string;
}

export type paymentsVerify_input = {
    gateway: object;
    payment: object;
}

export type paymentsVerify_output = {
    status: boolean;
}

