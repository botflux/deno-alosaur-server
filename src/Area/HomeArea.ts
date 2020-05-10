import { Area } from 'https://deno.land/x/alosaur/src/mod.ts'
import { HomeController } from '../Controller/HomeController.ts'

@Area({
    controllers: [ HomeController ]
})
export class HomeArea {}