import React, { useEffect, useState } from 'react'
import Container from '../components/container'
import Layout from '../components/layout'
import Slider from "react-slick";
import { getAllProductsForHome, getAllBanner, getAllBrand } from '../lib/graphcms'

function Index({ preview }) {

  const [size, setSize] = useState({});
  const [SlidesToShow, setSlidesToShow] = useState(3)
  const [BrandToShow, setBrandToShow] = useState(4)
  const [products, setProducts] = useState([])
  const [banner, setBanner] = useState([])
  const [sizeBanner, setSizeBanner] = useState(0)
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

    // get width,height
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    setSizeBanner(size[1] / 2);
    if (size[0] <= 600) {
      setSlidesToShow(2)
      setBrandToShow(2)
    } else if (size[0] <= 400) {
      setSlidesToShow(1)
      setBrandToShow(2)
    } else {
      setBrandToShow(4)
      setSlidesToShow(3)
    }
  }, [size])

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: SlidesToShow,
    slidesToScroll: 2,
    arrows: false
  };

  let brandSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: BrandToShow,
    slidesToScroll: 2,
    arrows: false
  };

  let settingsBanner = {
    dots: false,
    infinite: true,
    speed: 1050,
    slidesToShow: 1,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true
  };

  return (
    <>
      <Layout preview={preview}>
        <Container>
          <section className="awe-section-1 mt-5 mb-5">
            <div className="section_category_slider">
              <div className="container">
                <h2 className="hidden">Danh mục</h2>
                <div className="row">
                  <div className="col-12 px-0 mt-md-5 mb-5">
                    <div className="home-slider owl-carousel">
                      <Slider {...settingsBanner}>
                        {banner.map((item, index) => {
                          return (
                            <div key={index.toString()} className="item">
                              <img style={{ height: sizeBanner, width: "100%", objectFit: 'cover' }} className="col-lg-12" src={item.url} alt="alt slider demo" />
                            </div>
                          )
                        })}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="awe-section-8 mt-5 mb-5">
            <div className="section section_blog">
              <div className="container">
                <div className="section-title a-center">
                  <h2 className="mb-md-3"><a title="Giới Thiệu" href="/gioi-thieu">Về Chúng Tôi</a></h2>
                  <p style={{ width: '80%' }} className="m-auto">Dlat Farm ra đời từ mong muốn tìm lại niềm vui và sự an tâm khi tận hưởng những trái quả lành. Chúng tôi đồng hành với những người nông dân từ thủa ươm mầm tới ngày thu hái. Chúng tôi nương vào đất Mẹ, thuận cùng nắng mưa, để lựa cách săn sóc và nâng niu từng nhành cây, đóa hoa, quả chín. </p>
                  <p style={{ color: '#80bb35' }} className="pt-5 btn-show-more"><a className="" href="/gioi-thieu">Xem thêm...</a></p>
                </div>
              </div>
            </div>
          </section>

          <section className="awe-section-3 mt-5 mb-5">
            <div className="section section-collection section-collection-1">
              <div className="container">
                <div className="collection-border">
                  <div className="collection-main">
                    <div className="row ">
                      <div className="col-lg-12 col-sm-12">
                        <div className="e-tabs not-dqtab ajax-tab-1">
                          <div className="row row-noGutter">
                            <div className="col-sm-12">
                              <div className="content">
                                <div className="section-title">
                                  <h2>
                                    Trái cây mỗi ngày
                                  </h2>
                                </div>
                                <div>

                                  <div className="tab-1 tab-content current">
                                    <Slider {...settings}>
                                      {
                                        products.map((item, index) => {
                                          return (
                                            <div key={index.toString()} className="item m-auto col-lg-3 col-sm-6 col-md-12">
                                              <div className="product-box">
                                                <div className="product-thumbnail flexbox-grid">
                                                  <a href={`/san-pham/${item.slug}`} title={item.product_name}>
                                                    <img className="lazyload" src={item.image.url} data-src={item.image.url} alt={item.product_name} />
                                                  </a>
                                                  <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                    <form className="variants form-nut-grid margin-bottom-0">
                                                      <div>

                                                        <button className="btn-buy btn-cart btn btn-primary   left-to add_to_cart" data-toggle="tooltip" title="Mua hàng">
                                                          <i className="fa fa-shopping-bag" />
                                                        </button>
                                                        <a href="#" title="Xem nhanh" className="btn-gray btn_view btn right-to quick-view">
                                                          <i className="fa fa-eye" /></a>
                                                      </div>
                                                    </form>
                                                  </div>
                                                </div>
                                                <div className="product-info a-center">
                                                  <h3 className="product-name"><a href={`/san-pham/${item.slug}`} title={item.product_name}>{item.product_name}</a></h3>
                                                </div>
                                              </div>
                                            </div>
                                          )
                                        })
                                      }
                                    </Slider>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="awe-section-3 mt-5 mb-5">
            <div className="section section-collection section-collection-1">
              <div className="container">
                <div className="collection-border">
                  <div className="collection-main">
                    <div className="row ">
                      <div className="col-lg-12 col-sm-12">
                        <div className="e-tabs not-dqtab ajax-tab-1">
                          <div className="row row-noGutter">
                            <div className="col-sm-12">
                              <div className="content">
                                <div className="section-title">
                                  <h2>
                                    Rau Củ Tươi
                                  </h2>
                                </div>
                                <div>

                                  <div className="tab-1 tab-content current">
                                    <Slider {...settings}>
                                      {
                                        products.map((item, index) => {
                                          return (
                                            <div key={index.toString()} className="item m-auto col-lg-3 col-sm-6 col-md-12">
                                              <div className="product-box">
                                                <div className="product-thumbnail flexbox-grid">
                                                  <a href={`/san-pham/${item.slug}`} title={item.product_name}>
                                                    <img className="lazyload" src={item.image.url} data-src={item.image.url} alt={item.product_name} />
                                                  </a>
                                                  <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                    <form className="variants form-nut-grid margin-bottom-0">
                                                      <div>

                                                        <button className="btn-buy btn-cart btn btn-primary   left-to add_to_cart" data-toggle="tooltip" title="Mua hàng">
                                                          <i className="fa fa-shopping-bag" />
                                                        </button>
                                                        <a href="#" title="Xem nhanh" className="btn-gray btn_view btn right-to quick-view">
                                                          <i className="fa fa-eye" /></a>
                                                      </div>
                                                    </form>
                                                  </div>
                                                </div>
                                                <div className="product-info a-center">
                                                  <h3 className="product-name"><a href={`/san-pham/${item.slug}`} title={item.product_name}>{item.product_name}</a></h3>
                                                </div>
                                              </div>
                                            </div>
                                          )
                                        })
                                      }
                                    </Slider>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="awe-section-7 mt-5 mb-5">
            <div className="section_banner">
              <div className="container">
                <h2 className="hidden">Banner</h2>
                <div className="banner-image-col-tab">
                  <div className="row d-md-flex">
                    <div className="item m-auto px-4 mb-4">
                      <a href="#" className="clearfix">
                        <img src="https://bizweb.dktcdn.net/100/308/325/themes/801947/assets/banner1.jpg?1608116116274" alt="alt banner demo" />
                      </a>
                    </div>
                    <div className="item m-auto px-4 mb-4">
                      <a href="#" className="clearfix">
                        <img src="https://bizweb.dktcdn.net/100/308/325/themes/801947/assets/banner3.jpg?1608116116274" alt="alt banner demo" />
                      </a>
                    </div>
                    <div className="item m-auto px-4 mb-4">
                      <a href="#" className="clearfix">
                        <img src="https://bizweb.dktcdn.net/100/308/325/themes/801947/assets/banner2.jpg?1608116116274" alt="alt banner demo" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="awe-section-10 mt-5 mb-5">
            <div className="section section-brand mb-5">
              <div className="container">
                <Slider {...brandSettings}>
                  {brand && brand.map((item, index) => {
                    return (
                      <div key={index.toString()} className="brand-item">
                        <a href="#" className="img25"><img style={{ width: 103, height: 'auto' }} src={item.logo.url} alt={item.companyName} />
                        </a>
                      </div>
                    )
                  })}
                </Slider>
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export default Index