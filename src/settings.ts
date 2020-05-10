import { AppSettings } from 'https://deno.land/x/alosaur/src/mod.ts'
import { HomeArea } from './Area/HomeArea.ts'
import { Log } from './Middleware/Log.ts'

export const settings: AppSettings = {
    areas: [ HomeArea ],
    middlewares: [ Log ]
}