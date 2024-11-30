type HookCallback<TInput, TOutput> = (input: TInput) => TOutput;

class WebitoPlugin {
    private name: string;
    private hooks: { [key: string]: any[] } = {};
    private registeredHooks: Set<string> = new Set();


    constructor(name: string) {
        this.name = name;
    }


    registerHook<TInput, TOutput>(hookName: string, callback: HookCallback<TInput, TOutput>) {
        if (this.registeredHooks.has(hookName)) {
            return;
        }
        if (!this.hooks[hookName]) {
            this.hooks[hookName] = [];
            this.registeredHooks.add(hookName);
        }
        this.hooks[hookName].push(callback);
    }

    executeHook<TInput, TOutput>(hookName: string, input: TInput): TOutput | null {
        const callbacks = this.hooks[hookName];
        if (!callbacks) {
            return null;
        }

        let output;
        for (const callback of callbacks) {
            output = callback(input);
        }

        return output as TOutput;
    }

    // async executeHook(hookName: string, data: any) {
    //     if (this.hooks[hookName]) {
    //         // for (const callback of this.hooks[hookName]) {
    //         //     return await callback(data);
    //         // }
    //         const callback = this.hooks[hookName];
    //         return await callback[0](data);
    //     } else {
    //         // console.warn(`Hook ${hookName} not found.`);
    //         return false
    //     }
    // }

    async response({ status, data }: { status: Boolean, data: Object }) {
        console.log(JSON.stringify({ 'webito_response_status': status, 'webito_response_data': data }))
    }
}

export default WebitoPlugin;