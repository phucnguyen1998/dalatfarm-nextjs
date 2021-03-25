import Footer from './../components/Footer'
import Header from './../components/Header'
import Meta from '../components/meta'

export default function Layout({ preview, children, title }) {
  return (
    <>
      <Meta title={title} />
      <Header />
      {/* <div className=""> */}
      <main>{children}</main>
      {/* </div> */}
      <Footer />
    </>
  )
}
