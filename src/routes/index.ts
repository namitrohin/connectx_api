import web from '../controller/login/web'
export function routes(app: any) {
    app.get('/api', (req: Request, res: Response) => {
    })
    app.get('/api/v0/web/login', new web().login)
}