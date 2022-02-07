import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Provider as GraphqlProvider } from "urql";
import useClient from "../graphql/client";

function App({ Component, pageProps }: AppProps) {
  const { session } = pageProps;
  const client = useClient();

  return (
    <GraphqlProvider value={client}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </GraphqlProvider>
  );
}

export default App;
