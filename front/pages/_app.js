import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Provider } from "react-redux";
import wrapper from "../store/configureStore";
import "./reset.css";
import "./global.css";
const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <title>예능게임 모음</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any.isRequired,
};
export default App;
