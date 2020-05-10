.DEFAULT_GOAL := server

server: openapi
	deno run --allow-net --allow-read --config ./tsconfig.json server.ts

openapi:
	deno run --allow-write --config ./tsconfig.json openapi.ts