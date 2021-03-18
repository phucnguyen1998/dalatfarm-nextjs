import React, { useEffect, useState } from 'react'
import Container from '../components/container'
import Layout from '../components/layout'
import Slider from "react-slick";
import { getAllProductsForHome, getAllBanner, getAllPostForHomePage, getAllFeedbackForHomePage } from '../lib/graphcms'

function Index({ preview }) {

  const [size, setSize] = useState({});
  const [SlidesToShow, setSlidesToShow] = useState(3)
  const [products, setProducts] = useState([])
  const [banner, setBanner] = useState([])
  const [posts, setPost] = useState([])
  const [feedbacks, setFeedback] = useState([])

  async function getProducts() {
    const products = (await getAllProductsForHome()) || []
    setProducts(products)
  }

  async function getBanner() {
    const image = (await getAllBanner());
    setBanner(image[0].images)
  }

  async function getPost() {
    const posts = (await getAllPostForHomePage())
    setPost(posts)
  }

  async function getFeedbackForHomePage() {
    const feedback = (await getAllFeedbackForHomePage())
    setFeedback(feedback)
  }

  useEffect(() => {
    // get products
    getProducts()
    //get Banner
    getBanner()
    // get Post
    getPost()
    // get Feedback
    getFeedbackForHomePage()

    // get width,height
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (size[0] <= 600) {
      setSlidesToShow(2)
    } else if (size[0] <= 400) {
      setSlidesToShow(1)
    } else {
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

  let settingsBanner = {
    dots: false,
    infinite: false,
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
          <section className="awe-section-1">
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
                              <a href="#" className="clearfix">
                                <img className="col-lg-12" src={item.url} alt="alt slider demo" />
                              </a>
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

          <section className="awe-section-3">
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

          <section className="awe-section-7">
            <div className="section_banner">
              <div className="container">
                <h2 className="hidden">Banner</h2>
                <div className="banner-image-col-tab">
                  <div className="row d-md-flex">
                    <div className="item px-4 mb-4">
                      <a href="#" className="clearfix">
                        <img src="https://bizweb.dktcdn.net/100/308/325/themes/801947/assets/banner_coltab3_1.png?1608116116274" alt="alt banner demo" />
                      </a>
                    </div>
                    <div className="item px-4 mb-4">
                      <a href="#" className="clearfix">
                        <img src="https://bizweb.dktcdn.net/100/308/325/themes/801947/assets/banner_coltab3_2.png?1608116116274" alt="alt banner demo" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="awe-section-8">
            <div className="section section_blog">
              <div className="container">
                <div className="section-title a-center">
                  <h2><a title="Tin cập nhật" href="#">Tin cập nhật</a></h2>
                  <p>Tin tức vệ sinh an toàn thực phẩm cập nhật mới nhất<br /> mỗi ngày cho bạn</p>
                </div>
                <div className="section-content">
                  <Slider {...settings}>
                    {posts.map((item, index) => {
                      return (
                        <div key={index.toString()} className="item col-4 padding_left_right m-auto">
                          <article className="blog-item text-center">
                            <div>
                              <div className="blog-item-thumbnail">
                                <a title={item.title} href="#">
                                  <img src={item.image.url} alt={item.title} />
                                </a>
                              </div>
                              <div className="blog-item-info m-4">
                                <h3 title={item.title} className="blog-item-name"><a href="#">{item.title}</a></h3>
                                <p className="blog-item-summary">{item.descrription}</p>
                                <a title={item.title} className="btn" href="to">Chi tiết</a>
                              </div>
                            </div>
                          </article>
                        </div>
                      )
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </section>

          <section className="awe-section-9">
            <div className="section section_testimonial">
              <div className="container">
                <div className="section-title a-center">
                  <h2><span>Phản hồi của khách</span></h2>
                  <p>Phản hồi của những khách hàng đã và đang sử dụng sản<br />
                                phẩm trong suốt những năm qua
                            </p>
                </div>
                <div className="section-content">
                  <Slider {...settings}>
                    {feedbacks.map((item, index) => {
                      return (
                        <div key={index.toString()} className="item">
                          <div className="testimonial-item text-center p-4 mb-5">
                            <div className="image-avata">
                              <img src={item.avatar.url} alt={item.name} />
                            </div>
                            <h4 className="name">{item.name}</h4>
                            <p className="designation m-0">{item.description}</p>
                          </div>
                        </div>
                      )
                    })}

                  </Slider>
                </div>
              </div>
            </div>
          </section>

          <section className="awe-section-10">
            <div className="section section-brand mb-5">
              <div className="container">
                <h2 className="hidden">Thương hiệu</h2>
                <Slider {...settings}>
                  <div className="brand-item">
                    <a href="#" className="img25"><img src="https://bizweb.dktcdn.net/thumb/medium/100/308/325/themes/801947/assets/brand1.png?1608116116274" alt="DuaLeo-X" />
                    </a>
                  </div>
                  <div className="brand-item">
                    <a href="#" className="img25"><img src="https://bizweb.dktcdn.net/thumb/medium/100/308/325/themes/801947/assets/brand2.png?1608116116274" alt="DuaLeo-X" />
                    </a>
                  </div>
                  <div className="brand-item">
                    <a href="#" className="img25"><img src="https://bizweb.dktcdn.net/thumb/medium/100/308/325/themes/801947/assets/brand1.png?1608116116274" alt="DuaLeo-X" />
                    </a>
                  </div>
                  <div className="brand-item">
                    <a href="#" className="img25"><img src="https://bizweb.dktcdn.net/thumb/medium/100/308/325/themes/801947/assets/brand2.png?1608116116274" alt="DuaLeo-X" />
                    </a>
                  </div>
                  <div className="brand-item">
                    <a href="#" className="img25"><img src="https://bizweb.dktcdn.net/thumb/medium/100/308/325/themes/801947/assets/brand1.png?1608116116274" alt="DuaLeo-X" />
                    </a>
                  </div>
                  <div className="brand-item">
                    <a href="#" className="img25"><img src="../bizweb.dktcdn.net/thumb/medium/100/308/325/themes/801947/assets/brand67a0e.png?1608116116274" alt="DuaLeo-X" />
                    </a>
                  </div>
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