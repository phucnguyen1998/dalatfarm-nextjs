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
            <Layout preview={preview}>
                <Container>
                    <div className="mt-5 mb-5">
                        <h1 className="text-center mb-5" style={{ fontSize: 36 }}>{About && About.title}</h1>
                        <h4 className="mt-2 mb-4" style={{ fontSize: 18 }}>{About && About.slogan[0]}</h4>
                        <ReactMarkdown
                            children={About && About.content}
                        />
                    </div>
                </Container>
            </Layout>
        </>
    )
}

export default Index