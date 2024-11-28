type HookCallback = (data: any) => Promise<void> | void | Object;

class WebitoPlugin {
    private name: string;
    private hooks: Record<string, HookCallback[]> = {};
    private registeredHooks: Set<string> = new Set();

    constructor(name: string) {
        this.name = name;
    }

    registerHook(hookName: string, callback: HookCallback) {
        // جلوگیری از ثبت مجدد هوک
        if (this.registeredHooks.has(hookName)) {
            console.warn(`Hook ${hookName} is already registered.`);
            return;
        }

        if (!this.hooks[hookName]) {
            this.hooks[hookName] = [];
            this.registeredHooks.add(hookName); // ثبت هوک
        }
        this.hooks[hookName].push(callback);
    }

    async executeHook(hookName: string, data: any) {
        if (this.hooks[hookName]) {
            // for (const callback of this.hooks[hookName]) {
            //     return await callback(data);
            // }
            const callback = this.hooks[hookName];
            return await callback[0](data);
        } else {
            // console.warn(`Hook ${hookName} not found.`);
            return false
        }
    }

    async response({ status, data }: { status: Boolean, data: Object }) {
        console.log(JSON.stringify({ 'webito_response_status': status, 'webito_response_data': data }))
    }
}

export default WebitoPlugin;