async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch('https://api-ap-northeast-1.graphcms.com/v2/cklqagqp78tns01xu8itx45r9/master', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MTUxOTA0NDEsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5ncmFwaGNtcy5jb20vdjIvY2tscWFncXA3OHRuczAxeHU4aXR4NDVyOS9tYXN0ZXIiLCJodHRwczovL21hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiI2MDA2MzRlMS02NDNkLTRjNjctOGE3NC0xNDgyYWUwNTk2OTciLCJqdGkiOiJja20wYW9wNnY5ajNuMDF3NThpejkwcHppIn0.SdHkoIAi3E02E_6S5FTer5Uyd98e_WcZuxqnUTSkrg6GIVbfna9nFMhnEm6FNGqoREijZ5uyfJn82KEuqRGCTMBipUSB_AHUn6O6BnMxJFAVbIFPE5q_vDnJ1-ocqmfUniMEC5AKS4gg11Wwz2WuvgAyS5QXaJBWspOEu9G-AQC-7x70_UaG3JvGO2btVjmVJNetRRTC5lXlN_c00eJlMsfMUsoS6NAqqN4RmZkb_mxzlRf2147wMcFG0kUy5R6M0-f1kozqD_AhJdYg6pg7ZIPUpW5jZpq0SQKzXiVohy2-nnhpdGcUlK4yWiHhZLtGclyS8oA0q38sJsl1pv1_eI6h6CY1asLYF8ElDMzi0XT6I-0N5lsyhi6nnTt1dHK5HhVch9toS-O8tO-QGOUSmxxxBoXvuCtxiFc3DyqGKPwGZ0mMc2QAqQSjXDxGoo9ka2A1j83pQmvJ73387HvuV_kapu6oz8LhyfGG1uj3_LjZGpvratPKakbWbsbhC2HVx3C7UOIeBdhoefYDGPo2FEUAje3AfCsXmlqqtfE4Zp8Cb5-Jnydq1wjnNrs14EXqUGexyy9JuVzZ0Qu4Ji35z3MGMunKSPA1fXhrBVeSuxLEg8UgeyXje0FggcNxpNbls9F7CsbVsIJ6j3NcaJXY-s8Cpu8Vuu7mN0oFCrg6TvM`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  const json = await res.json()

  if (json.errors) {
    console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID)
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!, $stage: Stage!) {
      post(where: {slug: $slug}, stage: $stage) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        stage: 'DRAFT',
        slug,
      },
    }
  )
  return data.post
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts {
        slug
      }
    }
  `)
  return data.posts
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    {
      products(orderBy: publishedAt_ASC) {
        id
        product_content {
          html
        }
        publishedAt
        product_name
      }
    }
  `,
    { preview }
  )
  return data.products
}

export async function getSlideShow(slideID) {
  const slide_data = await fetchAPI(`
  {
    imageSlide(where: {id: "${slideID}"}) {
      id
      images {
        url
      }
    }
  }
  `)
  return slide_data.imageSlide;
  console.log("kkkk", slide_data)
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!, $stage: Stage!) {
      post(stage: $stage, where: {slug: $slug}) {
        title
        slug
        content {
          html
        }
        date
        ogImage: coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        author {
          name
          picture {
            url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
          }
        }
      }
      morePosts: posts(orderBy: date_DESC, first: 2, where: {slug_not_in: [$slug]}) {
        title
        slug
        excerpt
        date
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        author {
          name
          picture {
            url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
          }
        }
      }
    }
  `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        slug,
      },
    }
  )
  return data
}

// Phúc API
export async function getAllProductsForHome() {
  const data = await fetchAPI(
    `
    {
      products(orderBy: publishedAt_ASC, first: 4) {
        id
        slug
        image {
          url
        }
        product_name
      }
    }
  `,
  )
  return data.products
}

export async function getAllBanner() {
  const data = await fetchAPI(
    `
    {
      imageSlides(orderBy: id_ASC, first: 3) {
        images {
          url
          fileName
        }
      }
    }
  `,
  )
  return data.imageSlides
}

export async function getAllPostForHomePage() {
  const data = await fetchAPI(
    `
    {
      blogs(orderBy: id_ASC, first: 4) {
        title
        descrription
        image {
          url
        }
      }
    }
  `,
  )
  return data.blogs
}

export async function getAllFeedbackForHomePage() {
  const data = await fetchAPI(
    `
    {
      feedbacks(orderBy: id_ASC) {
        description
        name
        avatar {
          url
        }
      }
    }
  `,
  )
  return data.feedbacks
}

export async function getProductBySlug(slug) {
  const data = await fetchAPI(
    `
    {
      product(where: {slug: "${slug}"}) {
        product_content {
          markdown
        }
        product_name
        trangthai
        description
        productCatogoriess(first: 4) {
          categoryName
        }
        image {
          url
        }
      }
    }
  `,
  )
  return data.product
}

export async function getAllProductsWithSlug() {
  const data = await fetchAPI(`
    {
      products {
        slug
      }
    }
  `)
  return data.products
}

export async function getInfoPage() {
  const data = await fetchAPI(`
    {
      about(where: {id: "ckmbs1jy0i6yh0a8425ynhyq2"}) {
        content
        slogan
        title
      }
    }
  `)
  return data.about
}

export async function getAllProductForAllProductPage() {
  const data = await fetchAPI(`
    {
      products(orderBy: id_ASC) {
        slug
        product_name
        image {
          url
        }
      }
    }
  `)
  return data.products
}