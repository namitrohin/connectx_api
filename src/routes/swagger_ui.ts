export = function () {
    //login
    /**
     * @openapi
     * components:
     *  schemas:
     *    UserLogin:
     *      type: object
     *      required:
     *        - mobile_no
     *      properties:
     *        mobile_no:
     *          type: string
     *          default: 1234567890
     *    UserLoginResponse:
     *      type: object
     *      properties:
     *        mobile_no:
     *          type: string
     */
    /**
     * @openapi
     * /api/v0/web/login:
     *  post:
     *     tags:
     *     - User
     *     summary: Login user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/UserLogin'
     *     responses:
     *      200:
     *        description: Success
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/UserLoginResponse'
     *      409:
     *        description: Conflict
     *      400:
     *        description: Bad request
     */
    //otp Verify
    /**
     * @openapi
     * components:
     *  schemas:
     *    UserLoginOtp:
     *      type: object
     *      required:
     *        - mobile_no
     *        - otp
     *      properties:
     *        mobile_no:
     *          type: string
     *          default: 1234567890
     *        otp:
     *          type: string
     *          default: 3456
     *    UserLoginOtpResponse:
     *          type: object
     *          properties:
     *             mobile_no:
     *             type: string
     */
    /**
     * @openapi
     * /v0/user/otp_verify:
     *  post:
     *     tags:
     *     - User
     *     summary: Verify otp
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/UserLoginOtp'
     *     responses:
     *      200:
     *        description: Success
     *      409:
     *        description: Conflict
     *      400:
     *        description: Bad request
     */

}