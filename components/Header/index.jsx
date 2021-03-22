import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { StyledOffCanvas, Menu, Overlay } from 'styled-off-canvas'
import { getAllCategoriesName } from './../../lib/graphcms'

function Header(props) {
    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false)
    const [categoriesName, setCategoriesName] = useState([])
    const [showDropdown, setShowDropdown] = useState(false)

    async function getCategoriesName() {
        const categoriesName = (await getAllCategoriesName())
        setCategoriesName(categoriesName)
    }

    useEffect(() => {
        getCategoriesName()
    }, [])
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
                    <div className="header-content clearfix a-center p-1">
                        <div className="row">
                            <div className="col-xs-12 col-md-3 text-lg-left pt-4">
                                <div className="logo inline-block">
                                    <a href="#" className="logo-wrapper ">
                                        {router.asPath !== "/" ? <img src="../logo-DlatFarm.png" alt="logo " /> : <img src="./logo-DlatFarm.png" alt="logo " />}
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
                            <div className="head-menu clearfix">
                                <ul className="list-inline">
                                    <li className="li-search">
                                        <div className="header_search search_form">
                                            <a href="#" className="logo-wrapper ">
                                                {router.asPath !== "/" ? <img src="../logo-DlatFarm.png" alt="logo " /> : <img src="./logo-DlatFarm.png" alt="logo " />}
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                                <div className="menuclose" onClick={() => { setIsOpen(false) }}><i className="fa fa-times" /></div>
                            </div>

                            <ul id="nav-mobile" className="nav hidden-md hidden-lg open">
                                <li className="h3">
                                    MENU
                                </li>
                                <li className="nav-item active"><a className="nav-link" href="/">Trang chủ</a></li>
                                <li className="nav-item">
                                    <a onClick={() => { setShowDropdown(!showDropdown) }} className="nav-link">Sản phẩm <i className="fa faa fa-angle-right" /></a>
                                </li>
                                {showDropdown && <li style={{ float: 'none' }} className="dropdown-menu ml-4">
                                    {
                                        categoriesName && categoriesName.map((item, index) => {
                                            return (
                                                <li key={index.toString()} className="dropdown-submenu nav-item-lv2">
                                                    <a className="nav-link pl-5" href={`/danh-muc-san-pham/${item.slug}`}> {item.categoryName}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </li>}
                                <li className="nav-item "><a className="nav-link" href="/gioi-thieu">Giới thiệu</a></li>
                                <li className="nav-item "><a className="nav-link" href="/lien-he">Liên hệ</a></li>
                            </ul>

                        </Menu>
                        <Overlay />
                    </StyledOffCanvas>

                </div>

                <nav>
                    <div className="container">
                        <div className="hidden-sm hidden-xs">
                            <ul className="nav nav-left">
                                <li className="nav-item "><a title="Trang chủ" className="nav-link pl-0" href="/">Trang chủ</a></li>
                                <li className="nav-item "><a title="Giới Thiệu" className="nav-link" href="/gioi-thieu">Giới Thiệu</a></li>
                                <li className="nav-item ">
                                    <a title="Tin tức" href="/tat-ca-san-pham" className="nav-link">Sản Phẩm <i className="fa fa-angle-right" data-toggle="dropdown" /></a>
                                    <ul className="dropdown-menu">
                                        {
                                            categoriesName && categoriesName.map((item, index) => {
                                                return (
                                                    <li key={index.toString()} className="nav-item-lv2">
                                                        <a className="nav-link" href={`/danh-muc-san-pham/${item.slug}`}>{item.categoryName}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>

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
