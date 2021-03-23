import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="../assets/bootstrap.min.css" rel="stylesheet" />
          <link href="../assets/paira.css" rel="stylesheet" />
          <link href="../assets/paira-typography.css" rel="stylesheet" />
          <link href="../assets/paira-responsive.css" rel="stylesheet" />
          <link href="../assets/font-awesome.min.css" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" />
          <link href="/styleCommingSoonPage.css" rel="stylesheet" type="text/css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
