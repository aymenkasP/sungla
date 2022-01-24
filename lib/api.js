
async function fetchGraphQL(query) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}




export async function getAllProductsForHome() {
  const products = await fetchGraphQL(
    `query {
      productCollection {
        items {
          title
          slug
          brand
          gender
          productImage {
            url
            width
            height
            
          }
          price
          description {
            json
          }
          
        }
      }
    }`
  )
  return products?.data?.productCollection?.items
}

export async function getProduct(Name) {
  const products = await fetchGraphQL(
    `query {
      productCollection (where  : {slug : "${Name}"}) {
      items {
        title
        slug
        brand
        gender
        productImage {
          url
          width
          height
          
        }
        price
        description {
          json
        }
        
      }
    }
    }`
  )
  return products?.data?.productCollection?.items
}
export async function getOtherProduct(Name) {
  const products = await fetchGraphQL(
    `query {
      productCollection (where  : {slug_not_contains : "${Name}"}) {
      items {
        title
        slug
        brand
        gender
        productImage {
          url
          width
          height
          
        }
        price
        description {
          json
        }
        
      }
    }
    }`
  )
  return products?.data?.productCollection?.items
}
