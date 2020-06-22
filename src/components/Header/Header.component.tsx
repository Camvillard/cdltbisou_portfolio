import React from "react"
import { Link } from "gatsby"
import { HeaderWrapper } from "./Header.ui"

type HeaderProps = {
  siteTitle: string
}

export const Header = (props: HeaderProps) => {
  const { siteTitle } = props
  return (
    <HeaderWrapper>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </HeaderWrapper>
  )
}
