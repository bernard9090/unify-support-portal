import '../styles/globals.css'
import {Provider} from "react-redux";
import Head from "next/head"
import store from "../store"

function MyApp({ Component, pageProps }) {
  return(
      <Provider store={store}>
          <Head>
              <title>Unify Support</title>
              <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"/>
          </Head>
        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
