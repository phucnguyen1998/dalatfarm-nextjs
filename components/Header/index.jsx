import React, { useState } from 'react'
import { StyledOffCanvas, Menu, Overlay } from 'styled-off-canvas'

function Header(props) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <header className="header other-page">
                <div className="topbar-mobile hidden-lg hidden-md text-center text-md-left">
                    <div className="container">
                        Hotline:
                        <span>
                            <a href="#">0912117494</a>
                        </span>
                    </div>
                </div>

                <div className="topbar hidden-sm hidden-xs">
                    <div className="container">
                        <div>
                            <div className="row">
                                <div className="col-sm-6 col-md-9 a-left">
                                    <ul className="list-inline f-left">
                                        <li>
                                            Hotline:
                                            <span>
                                                <a href="#"> 0912117494</a>
                                            </span>
                                        </li>
                                        <li className="margin-left-20">
                                            <b>Địa chỉ</b>:
                                            <span>
                                                Hồ Gươm, Vietnam
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="header-content clearfix a-center">
                        <div className="row">
                            <div className="col-xs-12 col-md-3 text-lg-left">
                                <div className="logo inline-block">
                                    <a href="#" className="logo-wrapper ">
                                        <img src="https://bizweb.dktcdn.net/100/308/325/themes/801947/assets/logo.png?1608116116274" alt="logo " />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-8 col-lg-7 hidden-xs">
                                <div className="policy d-flex justify-content-start">
                                    <div className="item-policy d-flex align-items-center">
                                        <img className="mr-3" src="https://bizweb.dktcdn.net/thumb/medium/100/308/325/themes/801947/assets/policy1.png?1608116116274" alt="DuaLeo-X" />
                                        <div className="info a-left">
                                            <a title="Hỗ trợ 24/7" href="#">Hỗ trợ 24/7</a>
                                            <p>Hotline: <a href="#"> 19001009</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {!isOpen && <button
                        className="btn menu-bar hidden-md hidden-lg color-button"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <i style={{ fontSize: 30 }} className="fa fa-bars" aria-hidden="true"></i>
                    </button>}
                    <StyledOffCanvas
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        position='left'
                    >
                        <Menu className="zIndex1k">
                            <ul id="nav-mobile" className="nav hidden-md hidden-lg open">
                                <li className="h3">MENU</li>
                                <li className="nav-item active"><a className="nav-link" href="/">Trang chủ</a></li>
                                <li className="nav-item "><a className="nav-link" href="/gioi-thieu">Giới thiệu</a></li>
                                <li className="nav-item "><a className="nav-link" href="/tat-ca-san-pham">Sản Phẩm</a></li>
                                <li className="nav-item "><a className="nav-link" href="/lien-he">Liên Hệ</a></li>
                            </ul>
                        </Menu>
                        <Overlay />
                    </StyledOffCanvas>

                </div>

                <nav>
                    <div className="container">
                        <div className="hidden-sm hidden-xs">
                            <ul className="nav nav-left">
                                <li className="nav-item "><a title="Trang chủ" className="nav-link" href="/">Trang chủ</a></li>
                                <li className="nav-item "><a title="Giới Thiệu" className="nav-link" href="/gioi-thieu">Giới Thiệu</a></li>
                                <li className="nav-item "><a title="Sản Phẩm" className="nav-link" href="/tat-ca-san-pham">Sản Phẩm</a></li>
                                <li className="nav-item "><a title="Liên hệ" className="nav-link" href="/lien-he">Liên hệ</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;