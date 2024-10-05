interface ApiSubError {
    field?: string; // Optional field to indicate the error location
    message: string;  // Specific error message
}

class ApiError extends Error {
    statusCode: number;
    data: null;
    success: boolean;
    errors: ApiSubError[];
    constructor(
        statusCode: number,
        message: string = "Something went wrong",
        errors: ApiSubError[] = [],
        stack = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null; // Assuming no data for errors
        this.message = message;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {
    ApiError
};