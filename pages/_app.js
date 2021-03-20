import '../styles/globals.css'
import {Provider} from "react-redux";
import Head from "next/head"
import store from "../store"
import {ToastProvider} from "react-toast-notifications";
import CustomToast from "../components/CustomToast"


function MyApp({ Component, pageProps }) {
  return(
      <Provider store={store}>
          <Head>
              <title>Unify Support</title>
              <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"/>
          </Head>
        <ToastProvider components={{ Toast: CustomToast }} autoDismissTimeout={3000}>
            <Component {...pageProps} />
        </ToastProvider>
      </Provider>
  )
}

export default MyApp
