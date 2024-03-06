/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MIN_TODO_LENGTH: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
