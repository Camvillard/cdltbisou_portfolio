import React, { ReactNode } from "react"
import { Link } from "gatsby"
import { ButtonWrapper } from "./Button.ui"

export type ButtonProps = {
  children: ReactNode
  url?: string
  external?: boolean
  internal?: boolean
  size?: "s" | "m" | "l"
}

const WithLink = (props: ButtonProps) => {
  const { url, internal, children } = props
  return internal ? (
    <Link to={url}>
      <span>{children}</span>
      <span>{children}</span>
    </Link>
  ) : (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
      <span>{children}</span>
    </a>
  )
}

const WithAction = (props: ButtonProps) => {
  const { children } = props
  return (
    <button {...props}>
      <span>{children}</span>
      <span>{children}</span>
    </button>
  )
}

export const Button = (props: ButtonProps) => {
  return (
    <ButtonWrapper {...props}>
      {props.url ? <WithLink {...props} /> : <WithAction {...props} />}
    </ButtonWrapper>
  )
}
