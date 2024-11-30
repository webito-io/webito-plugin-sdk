export type messagesCreate_input = {
    _id: string;
    phone?: number;
    email?: string;
    message: string;
}

export type messagesCreate_output = {
    status: boolean;
}

