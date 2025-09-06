export type smsCreate_input = {
    _id: string;
    phone?: number;
    email?: string;
    message?: string;
}

export type smsCreate_output = {
    status: boolean;
}

export type emailCreate_input = {
    _id: string;
    phone?: number;
    email?: string;
    subject?: string;
    message?: string;
    html?: string;
    language?: string;
    domain?: string;
    logo?: string;
    brand?: string;
    owner?: string;
    reseller?: string;
    tenant?: string;
}

export type emailCreate_output = {
    status: boolean;
}

