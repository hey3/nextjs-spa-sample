import { AppProps } from 'next/app'
import '../styles/reset.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <div suppressHydrationWarning>
    {typeof window === 'undefined' ? null : <Component {...pageProps} />}
  </div>
)

export default App
