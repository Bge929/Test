import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({data, children}) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
        {children}
        <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
        />
        <p>Photo by: {data.mdx.frontmatter.hero_image_credit_text}</p>
        <p>Posted: {data.mdx.frontmatter.date}</p>
        </Layout>
        )
    }

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                hero_image_alt
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`

    export const Head = () => <Seo title="Super Cool Blog Posts" />
    
    export default BlogPost