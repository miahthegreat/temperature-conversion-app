import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto sm:px-6 lg:px-8 sm:py-4 lg:py-6">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
