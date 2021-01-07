# nextjs-spa-sample

Next.js の zero-config の恩賜を受けた SPA

## Development

```shell
$ yarn dev
```

## Deploy

```shell
$ yarn export # next build && next export
# And upload the contents of the out directory.
```

## Approach

1.  Using Routing Library

    ```shell
    $ yarn add react-router-dom
    ```

2.  Create custom App
3.  Return `null` if `typeof window === "undefined"`

    ```tsx
    // pages/_app.tsx
    import { AppProps } from 'next/app'

    const App = ({ Component, pageProps }: AppProps): JSX.Element => (
      <div suppressHydrationWarning>
        {typeof window === 'undefined' ? null : <Component {...pageProps} />}
      </div>
    )

    export default App
    ```

4.  Rewrite all routes to the root

    ```js
    // next.config.js
    module.exports = {
      async rewrites() {
        return [
          {
            source: '/:path*',
            destination: '/',
          },
        ]
      },
    }
    ```

    ※ In the production environment, a separate redirection rule is needed.

## Technology stacks

This repository uses the following technology stack:

- ESlint
- prettier
- styled-components
- typescript

In cases where any of these are not needed, you remove them.
