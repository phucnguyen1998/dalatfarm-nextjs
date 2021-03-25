import Layout from '../../components/layout'
import Container from '../../components/container'
import { getProductBySlug, getAllProductsWithSlug } from 'lib/graphcms'
import ReactMarkdown from 'react-markdown';

function Product(props) {
    const { product } = props
    return (
        <>
            <Layout
                title={`DlatFarm - ${product && product.description}`}
            >
                <div classname="paira-container">
                    {/*=================== Breadcrumb Section ===================*/}
                    <section className="breadcrumb margin-top-30 text-center">
                        <div className="container">
                            <div className="list-inline">
                                <h1>{product && product.product_name}</h1>
                            </div>
                        </div>
                    </section>

                    <main className="product-page">
                        <section className="single-product paira-gap-1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="row paira-product">
                                            <div className="col-md-12 col-sm-12 col-xs-12 paira-gap-2">
                                                <div className="paira-product single-variants-product">
                                                    <div className="single-product-image paira-single-product-image">
                                                        <div className="bxslider paira-single-product-image">
                                                            <img src={product && product.image.url} className="img-responsive center-block paira-product-image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row paira-gap-2">
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                <h1 className="page-header margin-clear">Mô tả sản phẩm</h1>
                                                <div className="product-description">
                                                    {product && product.description}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row paira-gap-2">
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                <h1 className="page-header margin-clear">Chi tiết sản phẩm</h1>
                                                <div className="product-description">
                                                    <ReactMarkdown
                                                        children={product && product.product_content.markdown}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </Layout>
        </>
    );
}

export async function getStaticProps({ params }) {
    const data = await getProductBySlug(params.slug)
    return {
        props: {
            product: data,
        },
    }
}

export async function getStaticPaths() {
    const products = await getAllProductsWithSlug()
    return {
        paths: products.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: true,
    }
}

export default Product;