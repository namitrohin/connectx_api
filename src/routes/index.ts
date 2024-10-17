import login from '../controller/login'
import swagger from './swagger_ui'
export function routes(app: any) {
    // app.get('/api', (req: Request, res: Response) => {
    // })
    swagger();
    app.post('/api/v0/web/login', new login().webLogin)
}