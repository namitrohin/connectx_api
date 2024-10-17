// import { promises } from "dns";
import config from "../../config";
import Utils from "../../untils";
import { apiFailureMessage, httpConstants } from '../../common/constants';
import { Request } from "express";
export default class Weblogic {
    login = async (req: Request,) => {
        if (!req) {
            return Utils.error(
                apiFailureMessage.INVALID_PARAMS,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        const result = await config.query('select * from check_login($1)', [req.body.mobile_no]);
        return result;
    }

}