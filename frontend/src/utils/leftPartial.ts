export const leftPartial = (fn: Function, ...args: any[]) => {
    return fn.bind(null, ...args);
};

