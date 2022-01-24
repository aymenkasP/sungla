import Document, { Html, Head, Main, NextScript } from 'next/document'



class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="scroll-smooth	" >
        <Head >
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.js"></script>
            <div hidden id="snipcart" data-api-key={process.env.SNIPPET_ID} data-config-modal-style="side"  ></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument