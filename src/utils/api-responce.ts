class ApiResponse {
    statusCode: number;
    data: any;
    message: string;
    success: boolean;
    constructor(statusCode: number, data: any, message = "") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode >= 200 && statusCode < 300;
    }
}
export { ApiResponse };
