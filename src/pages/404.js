import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'
import SVG404 from '../icons/404'

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <PageWrapper>
          <SVG404/>
          <h1>Page Not Found</h1>
          <Text>The page or article you wish to see does not exist or may have been removed/deleted.</Text>
          <ButtonsContainer>
            <Button to={`/`}>Go home</Button>
            <CTAButton to={`/post/submitting-a-post/`}>Submit Article</CTAButton>
          </ButtonsContainer>
          </PageWrapper>
      </Layout>
    )
  }
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  padding: 10px;
`
const Text = styled.p`
  max-width: 500px;
  text-align: center
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 220px
`

const Button = styled(Link)`
  padding: 7px;
  border-radius: 1px;
`

const CTAButton = styled(Button)`
  background: #14957D;
  color: white !important;
`

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
