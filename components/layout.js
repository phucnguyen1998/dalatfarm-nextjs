import Footer from './../components/Footer'
import Header from './../components/Header'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header />
      {/* <div className="min-h-screen"> */}
      <main>{children}</main>
      {/* </div> */}
      <Footer />
    </>
  )
}
