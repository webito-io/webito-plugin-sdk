export interface messagesCreate_input {
    _id: string;
    phone?: number;
    email?: string;
    message: string;
}

export interface messagesCreate_output {
    status: boolean;
}

