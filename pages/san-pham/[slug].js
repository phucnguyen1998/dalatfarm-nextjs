import Layout from '../../components/layout'
import { useState } from 'react'
import { getProductBySlug, getAllProductsWithSlug } from 'lib/graphcms'
import ReactMarkdown from 'react-markdown';

function Product(props) {
    const [description, setDescription] = useState(false);
    const [infoProduct, setInfoProduct] = useState(false);
    infoProduct
    const { product } = props

    return (
        <>
            <Layout>
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="details-product">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-5">
                                        <div className="large-image">
                                            <a href="#">
                                                <img id="zoom_01" src={product && product.image.url} alt={product && product.product_name} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-7 details-pro">
                                        <h1 className="title-head">{product && product.product_name}</h1>
                                        <div className="reviews clearfix">
                                            <div className="f-left margin-right-10">
                                                <div className="bizweb-product-reviews-badge" data-id={11480175} />
                                            </div>
                                            <div className="f-left iddanhgia">
                                                <span>Viết đánh giá</span>
                                            </div>
                                        </div>
                                        <div className="status clearfix">
                                            Trạng thái: <span className="inventory">
                                                {product && product.trangthai ? <><i className="fa fa-check" /> Còn hàng</> : "Hết hàng"}
                                            </span>
                                        </div>
                                        <div className="product-summary product_description margin-bottom-15">
                                            <div className="rte description">
                                                {product && product.description}
                                            </div>
                                        </div>
                                        <div className="form-product ">
                                            <div className="tag-product">
                                                <label className="inline">Danh mục: {product && product.productCatogoriess.map((item, index) => {
                                                    return (
                                                        item.categoryName
                                                    )
                                                })} </label>

                                            </div>
                                            <div className="social-sharing">
                                                <div className="social-media" data-permalink="cherry-do-canada-loai-to.html">
                                                    <label className="mr-3">Chia sẻ: </label>
                                                    <a href="#" className="share-facebook mr-2" title="Chia sẻ lên Facebook">
                                                        <i className="fab fa-facebook" />
                                                    </a>
                                                    <a href="#" className="share-twitter mr-2" title="Chia sẻ lên Twitter">
                                                        <i className="fab fa-twitter" />
                                                    </a>
                                                    <a href="#" className="share-pinterest mr-2" title="Chia sẻ lên pinterest">
                                                        <i className="fab fa-pinterest" />
                                                    </a>
                                                    <a href="#" className="share-google mr-2">
                                                        <i className="fab fa-google-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-lg-12 margin-top-15 margin-bottom-10">
                                        {/* Nav tabs */}
                                        <div className="product-tab e-tabs">
                                            <ul className="tabs tabs-title clearfix">
                                                <li className="tab-link" onClick={() => { setDescription(!description) }}>
                                                    <h3><span>Mô tả</span></h3>
                                                </li>
                                                <li className="tab-link" onClick={() => { setInfoProduct(!infoProduct) }}>
                                                    <h3><span>Thông tin</span></h3>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {description && <div className="col-lg-12">
                            <div style={{ border: '1px solid #cdc' }} className="rte">
                                <div className="mt-5 ml-5 mr-2 mb-5">
                                    <ReactMarkdown
                                        children={product && product.product_content.markdown}
                                    />
                                </div>
                            </div>
                        </div>}

                        {infoProduct && <div className="col-lg-12">
                            <div style={{ border: '1px solid #cdc' }} className="rte">
                                <div className="mt-5 ml-5 mr-2 mb-5">
                                    Thông tin, xuất xứ
                                </div>
                            </div>
                        </div>}

                    </div>
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