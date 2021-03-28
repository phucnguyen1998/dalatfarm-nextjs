import React, { useState, useEffect } from 'react'
import { StyledOffCanvas, Menu, Overlay } from 'styled-off-canvas'
import { getAllCategoriesName } from './../../lib/graphcms'

function Header(props) {
    const [categoriesName, setCategoriesName] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenCategory, setIsOpenCategory] = useState(false)


    async function getCategoriesName() {
        const categoriesName = (await getAllCategoriesName())
        setCategoriesName(categoriesName)
    }

    useEffect(() => {
        getCategoriesName()
    }, [])

    return (
        <>
            <header>
                {/*=================== Header Middle Section ===================*/}
                <section className="header-middle padding-bottom-10 padding-top-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12 logo-text text-center">
                                <img src="../assets/logo-DlatFarm.png" alt="" className="img-responsive center-block margin-bottom-20 logo-style" />
                            </div>
                        </div>
                    </div>
                </section>
                {/*=================== Header Bottom Section ===================*/}
                <section className="header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                                {/*=================== Main Menu ===================*/}
                                <nav className="navbar navbar-default paira-mega-menu mega-menu">
                                    <div className="navbar-header position-relative">
                                        <button type="button" className="navbar-toggle pull-right" onClick={() => { setIsOpen(true) }}>
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                        </button>
                                    </div>
                                    <div className="pull-right flag">
                                        <img className="mr-1" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.6.0/flags/4x3/us.svg" alt="" style={{ width: 15 }} />
                                        <img className="mr-1" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.6.0/flags/4x3/kr.svg" alt="" style={{ width: 15 }} />
                                        <img className="mr-1" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.6.0/flags/4x3/vn.svg" alt="" style={{ width: 15 }} />
                                    </div>
                                    <StyledOffCanvas
                                        isOpen={isOpen}
                                        onClose={() => setIsOpen(false)}
                                        position='left'

                                    >
                                        <Menu className="zIndex1k sidenav">
                                            <div>
                                                <button className="btn-close"
                                                    onClick={() => { setIsOpen(false) }}
                                                >
                                                    <i className="fa fa-times" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            <a style={{ paddingTop: '15%' }} href="#about">
                                                <img src="../assets/logo-DlatFarm.png" alt="" className="img-responsive center-block margin-bottom-20" />
                                            </a>
                                            <a href="/">Trang Chủ</a>
                                            <a href="/gioi-thieu">Giới Thiệu</a>

                                            <button className="dropdown-btn"
                                                onClick={() => {
                                                    setIsOpen(false)
                                                    setIsOpenCategory(true)
                                                }}>
                                                Sản Phẩm
                                                    <i className="fa fa-caret-right" />
                                            </button>
                                            <a href="/lien-he">Liên Hệ</a>
                                            <div style={{ display: 'flex', padding: '6px 8px 6px 16px' }}>

                                                <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.6.0/flags/4x3/us.svg" alt="" style={{ width: 20, marginRight: 5 }} />
                                                <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.6.0/flags/4x3/vn.svg" alt="" style={{ width: 20, marginRight: 5 }} />
                                                <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.6.0/flags/4x3/kr.svg" alt="" style={{ width: 20, marginRight: 5 }} />

                                            </div>

                                        </Menu>
                                        <Overlay />
                                    </StyledOffCanvas>

                                    <StyledOffCanvas
                                        isOpen={isOpenCategory}
                                        onClose={() => setIsOpenCategory(false)}
                                        position='left'

                                    >
                                        <Menu className="zIndex1k sidenav">
                                            <div>
                                                <button className="btn-close"
                                                    onClick={() => {
                                                        setIsOpen(true)
                                                        setIsOpenCategory(false)
                                                    }}
                                                >
                                                    <i className="fa fa-caret-left" />    Back
                                                </button>
                                            </div>
                                            <a style={{ paddingTop: '15%' }} href="#about">
                                                <img src="../assets/logo-DlatFarm.png" alt="" className="img-responsive center-block margin-bottom-20" />
                                            </a>
                                            {categoriesName && categoriesName.map((item, index) => {
                                                return (
                                                    <a key={index.toString()} href={`/danh-muc-san-pham/${item.slug}`}>{item.categoryName}</a>
                                                )
                                            })}
                                        </Menu>
                                        <Overlay />
                                    </StyledOffCanvas>

                                    <div className="navbar-collapse collapse">
                                        <ul className="nav navbar-nav">
                                            <li className="active">
                                                <a href="/">Trang Chủ</a>
                                            </li>
                                            <li className="">
                                                <a href="/gioi-thieu">Về Chúng Tôi</a>
                                            </li>
                                            <li className="">
                                                <a href="/tat-ca-san-pham">Sản Phẩm</a>
                                            </li>

                                            <li className="">
                                                <a href="/lien-he">Liên Hệ</a>
                                            </li>
                                            <li className="">
                                                <a style={{ marginRight: 5 }} href="/">
                                                    <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.6.0/flags/4x3/us.svg" alt="" style={{ width: 15 }} />
                                                </a>
                                            </li>
                                            <li className="">
                                                <a style={{ marginRight: 5 }} href="/">
                                                    <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.6.0/flags/4x3/kr.svg" alt="" style={{ width: 15 }} />
                                                </a>
                                            </li>
                                            <li className="">
                                                <a style={{ marginRight: 5 }} href="/">
                                                    <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.6.0/flags/4x3/vn.svg" alt="" style={{ width: 15 }} />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
}

export default Header;
