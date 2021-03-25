import React from 'react';
import Container from '../../components/container';
import Layout from '../../components/layout';

function Index({ preview }) {

    return (
        <>
            <Layout preview={preview}
                title={"Cảm ơn bạn đã chọn DlatFarm"}
            >
                <Container>
                    <main className="contact-page">
                        <section className="contact-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12 paira-gap-1 paira-gap-2">
                                        <h1 className="page-header text-center margin-bottom-40">Liên Hệ</h1>
                                        <div className="text-justify margin-bottom-40">
                                            <h4>Cảm ơn bạn đã chọn <a href="/">DlatFarm</a>
                                            </h4>
                                        </div>
                                        <h4 className="mt-2 mb-4" style={{ fontSize: 18 }}>Thông tin liên hệ:</h4>
                                        <p><strong>CÔNG TY TNHH ĐÀ LẠT FARM</strong></p>

                                        <p><strong>Mã số thuế: 5801418535</strong></p>

                                        <p><strong>Người đại diện: TUẤN ANH&nbsp; &nbsp; &nbsp;Chức vụ: Giám Đốc</strong></p>

                                        <p><strong>Địa chỉ: 09 Cù Chính Lan&nbsp;- Phường 08 - Tp. Đà Lạt - Lâm Đồng</strong></p>

                                        <p><strong>Số điện thoại liên hệ: 0978 99 61 69</strong></p>

                                        <p><strong>Email: email@gmail.com</strong></p>

                                        <p>&nbsp;</p>
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