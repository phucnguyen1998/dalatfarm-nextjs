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
    console.log(Allprorduct);
    return (
        <>
            <Layout preview={preview}>
                <Container>
                    <main className="collection-page">
                        {/*=================== Collections Product Section ===================*/}
                        <section className="collection-content paira-gap-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12 paira-gap-1 text-center">
                                        <div className="paira-collection-content">
                                            <h1 className="page-header">Tất cả sản phẩm</h1>
                                            <div className="row paira-grid-view">
                                                {
                                                    Allprorduct && Allprorduct.map((item, index) => {
                                                        return (
                                                            <div key={index.toString()} className="col-md-4 col-sm-4 col-xs-12 margin-top-30">
                                                                {/*=================== Product ===================*/}
                                                                <div className="paira-product product position-r">
                                                                    <a href={`/${item.slug}`}>
                                                                        <img src={item.image.url} alt={item.product_name} className="paira-product-image img-responsive" />
                                                                    </a>
                                                                    <div className="product-title-price full-width text-center bg-price">
                                                                        <h4 className="display-inline-b margin-right-10"><span className="money">{item.product_name}</span></h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
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