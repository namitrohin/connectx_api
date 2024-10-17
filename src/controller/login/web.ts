// import { promises } from "dns";
import config from "../../config";
import { Request, Response } from 'express';
export default class index {
    async login(req: Request, res: Response) {
        // console.log("hello");
        // const client: any = await config.connect();
        // config.connect();
        const result = await config.query('select * from login')
        // console.log(result)

        // res.status(200).send({
        //     message: "Hello"
        // });

        res.status(200).send({ message: "success", data: result.rows[0] });
    }

}