import React, { useEffect, useState } from 'react'
import Container from '../../components/container'
import Layout from '../../components/layout'
import ReactMarkdown from 'react-markdown';
import { getInfoPage } from '../../lib/graphcms'

function Index({ preview }) {
    const [About, setAbout] = useState(null)
    async function getInFo() {
        const about = (await getInfoPage())
        setAbout(about)
    }

    useEffect(() => {
        getInFo()
    }, [])

    return (
        <>
            <Layout
                preview={preview}
                title={"DlatFarm - Về chúng tôi"}
            >
                <Container>
                    <div>
                        {/*=================== About Template ===================*/}
                        <main className="about-page">
                            <section className="about-content paira-gap-1 paira-gap-2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <h1 className="page-header margin-bottom-40">Về chúng tôi</h1>
                                        </div>
                                        <div className="col-md-12">
                                            <ReactMarkdown
                                                children={About && About.content}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>
                    </div>

                </Container>
            </Layout>
        </>
    )
}

export default Index