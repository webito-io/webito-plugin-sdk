export interface paymentsCreate_input {
    gateway: object; // data like name, currency, id'
    amount: number;
    callback: string;
    payment: string;
}

export interface paymentsCreate_output {
    status: boolean;
    transaction: object;
    url: string;
}

export interface paymentsVerify_input {
    gateway: object;
    payment: object;
}

export interface paymentsVerify_output {
    status: boolean;
}

