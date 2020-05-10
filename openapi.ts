import { AlosaurOpenApiBuilder } from 'https://deno.land/x/alosaur/openapi/mod.ts'
import { settings } from './src/settings.ts'

AlosaurOpenApiBuilder.create(settings)
    .addTitle('Basic application')
    .addVersion('1.0.0')
    .addDescription('Example Alosaur OpenApi generate')
    .addServer({
        url: 'http://localhost:8000',
        description: 'Local server'
    })
    .saveToFile('./dist/api.json')