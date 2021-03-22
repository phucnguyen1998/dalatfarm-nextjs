import React from 'react';

function index(props) {
    return (
        <>
            <footer className="footer">
                <div className="content">
                    <div className="site-footer">
                        <div className="footer-inner padding-top-35 pb-lg-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-lg-3">
                                        <div className="footer-widget active">
                                            <h3 className="hastog"><span>Liên hệ</span></h3>
                                            <ul className="list-menu list-showroom">
                                                <li style={{ paddingLeft: 0 }}>
                                                    <p>Chúng tôi chuyên cung cấp các sản phẩm thực phẩm sạch an toàn cho sức
                                                        khỏe con người</p>
                                                </li>
                                                <li className="clearfix"><i className="block_icon fa fa-map-marker" />
                                                    <p>
                                                        Ha Noi, Vietnam
                                                    </p>
                                                </li>
                                                <li className="clearfix"><i className="block_icon fa fa-phone" />
                                                    <a href="tel:0333555181"> 0333555181</a>
                                                    <p>Thứ 2 - Chủ nhật: 9:00 - 18:00</p>
                                                </li>
                                                <li className="clearfix"><i className="block_icon fa fa-envelope" />
                                                    <a title="email@gmail.com" href="mailto:email@gmail.com">
                                                        email@gmail.com</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-lg-3">
                                        <div className="footer-widget active">
                                            <h3 className="hastog"><span>Danh mục</span></h3>
                                            <ul className="list-menu list-blogs">
                                                <li><a title="Trang chủ" href="/">Trang chủ</a></li>
                                                <li><a title="Sản phẩm" href="/tat-ca-san-pham">Sản phẩm</a></li>
                                                <li><a title="Giới thiệu" href="/gioi-thieu">Giới
                                                    thiệu</a></li>

                                                <li><a title="Liên hệ" href="/lien-he">Liên hệ</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-lg-3">
                                        <div className="footer-widget active">
                                            <h3 className="hastog"><span>Hỗ trợ khách hàng</span></h3>
                                            <ul className="list-menu list-blogs">
                                                <li><a title="Trang chủ" href="/">Chính sách</a></li>
                                                <li><a title="Sản phẩm" href="/tat-ca-san-pham">Sản phẩm</a></li>
                                                <li><a title="Giới thiệu" href="/gioi-thieu">Phân phối</a></li>
                                                <li><a title="Liên hệ" href="/lien-he">Đặt hàng</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-lg-3">
                                        <div className="footer-widget active">
                                            <h3 className="hastog"><span>Kết nối với DalatFarm</span></h3>
                                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fyuthfarm%2F&tabs=timeline&width=600&height=120&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=750969118667204" width={600} height={120} style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder={0} allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright clearfix">
                            <div className="container">
                                <div className="inner clearfix">
                                    <div className="row">
                                        <div className="col-md-6 text-center text-lg-left">
                                            <span>© Bản quyền thuộc về <b>DalatFarm</b>
                                            </span>
                                        </div>
                                        <div className="col-md-6 text-center text-lg-right hidden-xs">
                                            <ul className="list-menu-footer">
                                                <li><a title="Trang chủ" href="/">Trang chủ</a></li>
                                                <li><a title="Sản phẩm" href="/tat-ca-san-pham">Sản phẩm</a></li>
                                                <li><a title="Giới thiệu" href="/gioi-thieu">Giới
                                                thiệu</a></li>
                                                <li><a title="Liên hệ" href="lien-he">Liên hệ</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="back-to-top" onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}>
                                    <i className="fa  fa-angle-up" />
                                </div>
                                <a href="tel:0333555181" className="suntory-alo-phone bottom-left  suntory-alo-green " id="suntory-alo-phoneIcon">
                                    <div className="suntory-alo-ph-img-circle"><i className="fa fa-phone" /></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default index;