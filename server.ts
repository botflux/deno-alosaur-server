import { App } from 'https://deno.land/x/alosaur/src/mod.ts'
import { settings } from './src/settings.ts'

const app = new App(settings)

app.listen()