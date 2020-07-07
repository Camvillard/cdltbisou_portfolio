import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "../Header/Header.component"
import { DefaultLayoutWrapper } from "./Layout.ui"
import { Footer } from "../Footer/Footer.component"
import { GlobalStyle } from "../../system/global-style"

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <DefaultLayoutWrapper>
      <Header siteTitle={"test"} />
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </DefaultLayoutWrapper>
  )
}
