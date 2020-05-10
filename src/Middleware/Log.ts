import { MiddlewareTarget } from 'https://deno.land/x/alosaur/src/models/middleware-target.ts'
import { Middleware } from 'https://deno.land/x/alosaur/src/decorator/Middleware.ts'
import { ServerRequest, Response } from 'https://deno.land/std@0.50.0/http/server.ts'

@Middleware(new RegExp('/'))
export class Log implements MiddlewareTarget {
    private _date: Date = new Date()

    onPreRequest(req: ServerRequest, res: Response): Promise<any> {
        return new Promise((resolve, reject) => {
            this._date = new Date()
            resolve()
        })
    }
    onPostRequest(req: ServerRequest, res: Response, actionResult?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            console.log(this._date.getTime() - new Date().getTime())
            resolve()
        })
    }
}