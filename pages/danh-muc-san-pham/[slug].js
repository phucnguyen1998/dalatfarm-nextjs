import React from 'react';
import Container from '../../components/container';
import Layout from '../../components/layout';
import { getAllCategoriesWithSlug, getProductByCategories } from '../../lib/graphcms';

export default function DanhMuc(props) {
    const { product } = props
    return (
        <>
            {product && <Layout>
                <Container>

                    <section className="collection-content paira-gap-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12 paira-gap-1 text-center">
                                    <div className="paira-collection-content">
                                        <h1 className="page-header">{product && product.categoryName}</h1>
                                        <div className="row paira-grid-view">
                                            {
                                                product.products && product.products.length === 0 ?
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
                                                    product.products && product.products.map((item, index) => {
                                                        return (
                                                            <div key={index.toString()} className="col-md-4 col-sm-4 col-xs-12 margin-top-30 m-auto">
                                                                {/*=================== Category ===================*/}
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
                </Container>
            </Layout>}
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
