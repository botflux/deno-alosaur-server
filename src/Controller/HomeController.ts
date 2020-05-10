import { Controller, Get } from 'https://deno.land/x/alosaur/src/mod.ts'

@Controller('/home')
export class HomeController {

    @Get('/text')
    test() {
        return 'Hello world'
    }
}