class ApiError extends Error {
    statusCode: number;
    success: boolean;
    error: any[];

    constructor(statusCode: number, message: string, error = [], stack = "") {
        console.error("ApiError: ", message);
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.success = false;
        this.error = error;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
