import Head from "next/head";
import "../styles/globals.css";
import { Provider } from "react-redux";
import wrapper from "../store/configureStore";
import Layout from "../components/Layout";

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>MyTweeter</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
