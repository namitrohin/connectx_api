"use strict";
// import { apiFailureMessage, httpConstants } from "../common/constants";

export default class Utils {
    static response(res: { format: (arg0: { json: () => void; }) => void; send: (arg0: { responseData: any; message: any; success: any; responseCode: any; }) => void; }, data: {}, message: any, success: any, code: any) {
        const responseObj = {
            responseData: data,
            message: message,
            success: success,
            responseCode: code,
        };
        res.format({
            json: () => {
                res.send(responseObj);
            },
        });
    }

    static responseForValidation(res: { format: (arg0: { json: () => void; }) => void; send: (arg0: { message: string; errors: any; success: any; responseCode: number; }) => void; }, errorArray: any, success: any, code = 400) {
        const responseObj = {
            message: "BAD_REQUEST",
            errors: errorArray,
            success: success,
            responseCode: code,
        };
        res.format({
            json: () => {
                res.send(responseObj);
            },
        });
    }

    static handleError(err: { message?: any; code?: any; }, req: any, res: any) {
        if (!res) {
            return false;
        }
        err = err || {};
        const msg = err.message
            ? err.message
            : "Internal server Error";
        const code = err.code
            ? err.code
            : 500;
        this.response(res, {}, msg, false, code);
    }

    /**
     * This function is made to handle success and error callback!
     * @param promise
     * @returns {Promise<Promise|Bluebird<*[] | R>|Bluebird<any | R>|*|Promise<T | *[]>>}
     */
    static async parseResponse(promise: Promise<any>) {
        return promise
            .then((data: any) => {
                return [null, data];
            })
            .catch((err: any) => [err]);
    }

    /**
     * To throw error
     * @param data
     * @param message
     * @param code
     * @returns {{code: number, data: *, message: *}}
     */
    static error(data: any, message: any, code = 500) {
        return {
            data: data,
            message: message,
            code: code,
        };
    }
    static getPastTimestamp(days = 1) {
        return Date.now() - days * 24 * 60 * 60 * 1000;
    }
    static getFormattedDate() {
        const date = new Date();
        return (
            date.getFullYear() +
            "-" +
            (date.getMonth() + 1) +
            "-" +
            date.getDate() +
            " " +
            date.getHours() +
            ":" +
            date.getMinutes() +
            ":" +
            date.getSeconds()
        );
    }

    /**
     * @param functionName
     * @param message
     * @param payload:should be in object form
     * @param developerAlias
     * @param logType ["INFO", "WARNING", "ERROR"]
     * @constructor
     */
}
