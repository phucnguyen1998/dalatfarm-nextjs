import React, { useEffect, useState } from 'react'

import Container from '../../components/container';
import Layout from '../../components/layout';
import { getAllProductForAllProductPage } from '../../lib/graphcms'

function Index({ preview }) {
    const [Allprorduct, setAllprorduct] = useState([])

    async function getAllProduct() {
        const products = (await getAllProductForAllProductPage())
        setAllprorduct(products)
    }

    useEffect(() => {
        getAllProduct()
    }, [])

    return (
        <>
            <Layout preview={preview}>
                <Container>
                    <div className="d-flex pt-5">
                        <section className="">
                            <div className="row">
                                {/* Product */}
                                {Allprorduct && Allprorduct.map((item, index) => {
                                    return (
                                        <div key={index.toString()} className="col-xs-6 col-xss-6 col-sm-4 col-md-4 col-lg-4">
                                            <div className="product-box">
                                                <div className="product-thumbnail flexbox-grid">
                                                    <a href={`san-pham/${item.slug}`} title={item.product_name}>
                                                        <img className="lazyload loaded" src={item.image.url} alt={item.product_name} data-ll-status="loaded" />
                                                    </a>
                                                </div>
                                                <div className="product-info a-center">
                                                    <h3 className="product-name"><a href={`/san-pham/${item.slug}`} title={item.product_name}>{item.product_name}</a></h3>
                                                    <div className="price-box clearfix">
                                                        <div className="special-price">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                }

                            </div>
                        </section>
                    </div>
                </Container>
            </Layout>
        </>
    )
}

export default Index