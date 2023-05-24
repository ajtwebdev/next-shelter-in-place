import { AppProps } from "next/app"
import "../styles/index.css"
import Seo from "../components/seo"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
