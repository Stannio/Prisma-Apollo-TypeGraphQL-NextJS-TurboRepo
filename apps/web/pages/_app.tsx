import { withUrqlClient } from "next-urql";

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default withUrqlClient(
  () => ({
    url: "http://localhost:4000/graphql",
  }),
  { ssr: false }
)(App);
