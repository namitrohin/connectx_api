import { Request, Response } from "express";
import Utils from "../../untils";
import Weblogic from "./web";
import { httpConstants } from "../../common/constants";
export default class login {

    async webLogin(req: Request, res: Response) {
        const [error, userResponse] = await Utils.parseResponse(
            new Weblogic().login(req)
        );
        if (error || !userResponse) {
            return Utils.handleError(error, req, res);
        }
        if (userResponse.code && userResponse.code !== 200) {
            return Utils.response(
                res,
                {},
                userResponse.data,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return Utils.response(
            res,
            userResponse,
            'OTP Sent Successfully',
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK
        );
    }
}