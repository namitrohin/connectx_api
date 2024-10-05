
interface UserData {
    id: number;
    name: string;
    email: string;
}
class ApiResponse<t> {
    success: boolean;
    constructor(public statusCode: number, public data: object, public message = "Success") {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400;
    }
}

export { ApiResponse }