import React from "react"
import { FooterWrapper } from "./Footer.ui"

export const Footer = () => {
  const year = new Date().getFullYear()

  return <FooterWrapper>© {year}</FooterWrapper>
}
