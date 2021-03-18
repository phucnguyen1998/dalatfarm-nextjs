import React from 'react';
import Container from '../../components/container';
import Layout from '../../components/layout';

function Index({ preview }) {

    return (
        <>
            <Layout preview={preview}>
                <Container>
                    <div className="mt-5 mb-5">
                        <h1 className="text-center mb-5" style={{ fontSize: 36 }}>Liên hệ</h1>
                        <div className="m-auto">
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
                </Container>
            </Layout>
        </>
    )
}

export default Index