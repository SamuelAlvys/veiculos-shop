/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly DPI_API_URL: string
    readonly DPI_API_TOKEN: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}