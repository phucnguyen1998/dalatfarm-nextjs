import React from 'react';
import Container from '../../components/container';
import Layout from '../../components/layout';
import { getAllCategoriesWithSlug, getProductByCategories } from '../../lib/graphcms';

export default function Index({ product, preview }) {
    const Products = product.products
    return (
        <>
            <Layout preview={preview}>
                <Container>
                    <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#80ba35' }} className="mt-5 text-center">{product.categoryName}</h1>
                    <div className="d-flex pt-5">
                        <section style={{ width: '100%' }}>
                            <div className="row">
                                {/* Product */}
                                {Products.length === 0 ?
                                    <div style={{ height: 500 }} className="bgimg mb-5">
                                        <div className="middle">
                                            <h1>Đang Cập Nhật</h1>
                                            <hr />
                                        </div>
                                        <div className="bottomleft">
                                            <p>DlatFarm-Rau Sạch Cho Mọi Nhà</p>
                                        </div>
                                    </div>
                                    :
                                    Products.map((item, index) => {
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

export async function getStaticProps({ params, preview = false }) {
    const data = await getProductByCategories(params.slug, preview)
    return {
        props: {
            product: data,
        },
    }
}

export async function getStaticPaths() {
    const categories = await getAllCategoriesWithSlug()
    return {
        paths: categories.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: true,
    }
}
