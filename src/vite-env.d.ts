/// <reference types="vite/client" />
/// <reference types="@mdx-js/react" />

declare module '*.mdx' {
  import type { ComponentType } from 'react'
  const Component: ComponentType
  export default Component
}
