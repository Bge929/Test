import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo.js'
import { Link, graphql } from 'gatsby'

const BlogPage = ({data}) => {
    return(
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allMdx.nodes.map(node=> (
                        <article key={node.id}>
                            <h2>
                                <Link to={`/blog/${node.frontmatter.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            </h2>
                            <p>{node.excerpt}</p>
                            <p>Posted: {node.frontmatter.date}</p>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
query {
    allMdx(sort: {frontmatter: {id: DESC}}) {
        nodes {
            frontmatter {
                title
                slug
                date(formatString: "DD/MM YYYY")
            }
            id
            excerpt(pruneLength: 18)
        }
    }
}`

export const Head = () => <Seo title="Blog"/>

export default BlogPage