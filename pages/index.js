import React, { useEffect, useState } from 'react'
import Container from '../components/container'
import Layout from '../components/layout'
import Slider from "react-slick";
import { getAllProductsForHome, getAllBanner, getAllBrand } from '../lib/graphcms'

function Index({ preview }) {

  const [products, setProducts] = useState([])
  const [banner, setBanner] = useState([])
  const [brand, setBrand] = useState([])

  async function getProducts() {
    const products = (await getAllProductsForHome()) || []
    setProducts(products)
  }

  async function getBanner() {
    const image = (await getAllBanner());
    setBanner(image[0].images)
  }

  async function getBrand() {
    const brands = await getAllBrand()
    setBrand(brands)
  }

  useEffect(() => {
    // get products
    getProducts()
    //get Banner
    getBanner()
    //get brand
    getBrand()
  }, []);

  return (
    <>
      <Layout preview={preview}>
        <Container>
          <main className="home-page">
            <section className="banner-big-main parallax paira-gap-1 position-r text-center" style={{ background: 'url("https://images.squarespace-cdn.com/content/v1/5cbaf9239d414919a94b3480/1555771084467-XU9YG1K4ECEJQZVAKKLE/ke17ZwdGBToddI8pDm48kI1HlHevT7M7VuT5g6CyJ8Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kMlYkjvFlctRdmAM11rxFRD9vmhe33cjcy9NutpNZvmwGhRjjYfVdgy36hbPv1i3Q/web_MG_3313.jpg?format=2500w") no-repeat fixed' }}>
              <div className="banner-parallax full-width">
                <h1 className="text-header"><span>Gieo Tâm Sạch<br /> Trao Quả Lành</span></h1>
              </div>
            </section>
            <section className="home-text text-center paira-gap-2 paira-gap-1">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2>Câu chuyện Dlat Farm</h2>
                    <p>Dlat Farm ra đời từ mong muốn tìm lại niềm vui và sự an tâm khi tận hưởng những trái quả
                    lành. Chúng tôi đồng hành với những người nông dân từ thủa ươm mầm tới ngày thu hái.
                    Chúng tôi nương vào đất Mẹ, thuận cùng nắng mưa, để lựa cách săn sóc và nâng niu từng
                    nhành cây, đóa hoa, quả chín.
                    </p>
                    <a href="#">Xem tiếp</a>
                  </div>
                </div>
              </div>
            </section>
            <section className="banner-big-main parallax paira-gap-1 position-r text-center" style={{ background: 'url("https://images.squarespace-cdn.com/content/v1/5cbaf9239d414919a94b3480/1556376500191-2W7979ZBP87H0BRATQ5D/ke17ZwdGBToddI8pDm48kCFTy3UGnhJ-fWvK5PBTMNx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQAK6Hrx5oK4v7EgPqT2OFRSRLMHaWtK29l-R4I7CH9pArRUwoSl4wuUs73k4k9WwA/web+IMG_4972.jpg?format=2500w") no-repeat fixed' }}>
            </section>
            {/*=================== Blog Post Section delete===================*/}
            <section className="recent-product text-center paira-gap-1 paira-gap-2">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <h1 className="page-header margin-bottom-10">Sản Phẩm</h1>
                  </div>
                  <div className="col-md-12">
                    <p>
                      Mỗi sản phẩm của DlatFarm ra đời, đều là niềm tự hào đến từ “trái tim của người thương
                      cây”. Những quả chín được thu hái mùa nào thức nấy, tuyển lựa kỹ càng, chế biến tỉ mẩn
                      và đóng gói an toàn theo công nghệ tiên tiến của châu Âu, nhằm giữ trọn vẹn những tinh
                      hoa từ trời đất. Vậy nên, chúng có hương thơm của mùa, vị ngọt của mưa, đượm màu của
                      nắng và thuần lành như đất Mẹ bao dung.
                    </p>
                  </div>
                  <div className="full-width blog-post-widget">
                    {
                      products && products.map((item, index) => {
                        return (
                          <div key={index.toString()} className="col-md-6 col-sm-6 col-xs-12 margin-top-30 text-left">
                            <div className="featured-image">
                              <a href={`/san-pham/${item.slug}`}><img src={item.image.url} alt={item.product_name} className="img-responsive center-block margin-bottom-20" /></a>
                            </div>
                            <h4 className="text-capitalize"><a href={`/san-pham/${item.slug}`}>{item.product_name}</a>
                            </h4>
                            <p className="margin-clear"><a href={`/san-pham/${item.slug}`}>Xem chi tiết <i className="fa fa-long-arrow-right" aria-hidden="true" /></a></p>
                          </div>
                        )
                      })
                    }
                  </div>

                </div>
                <h4 style={{ marginTop: '5%' }}><a href='/tat-ca-san-pham'>Xem tất cả sản phẩm  <i className="fa fa-long-arrow-right" aria-hidden="true" /></a></h4>
              </div>
            </section>
            <section className="banner-big-main para paira-gap-1 position-r text-center" style={{ background: 'url("https://images.squarespace-cdn.com/content/v1/5cbaf9239d414919a94b3480/1556436909358-67RPIL2DBHUYKFI3ZS93/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/web%2BIMG_4967.jpg?format=2500w") no-repeat fixed' }}>
              <div className="banner-parallax full-width">
                <h1 className="banner-parallax-text"><span>Đối Tác</span></h1>
              </div>
            </section>
            <section className="home-text text-center paira-gap-2 paira-gap-1">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <p>DlatFarm ra đời từ mong muốn tìm lại niềm vui và sự an tâm khi tận hưởng những trái quả lành. Chúng tôi đồng hành với những người nông dân từ thủa ươm mầm tới ngày thu hái. Chúng tôi nương vào đất Mẹ, thuận cùng nắng mưa, để lựa cách săn sóc và nâng niu từng nhành cây, đóa hoa, quả chín.</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="recent-product text-center paira-gap-2">
              <div className="container">
                <div className="row">
                  <div className="full-width blog-post-widget">
                    {
                      brand && brand.map((item, index) => {
                        return (
                          <div key={index.toString()} className="col-md-3 col-sm-3 col-xs-6 margin-top-30 text-left">
                            <div className="featured-image">
                              <a href="#"><img src={item.logo.url} alt={item.companyName} className="img-responsive center-block margin-bottom-20" /></a>
                            </div>
                          </div>
                        )
                      })
                    }


                  </div>
                </div>
              </div>
            </section>
          </main>

        </Container>
      </Layout>
    </>
  )
}

export default Index