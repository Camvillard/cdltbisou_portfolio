import styled, { keyframes } from "styled-components"
import { themeColors, themeFonts } from "../../system/theme"

const { golden, lightTeal, mediumGray, darkGray } = themeColors
const { accent } = themeFonts

type ButtonWrapperProps = {
  size?: "s" | "m" | "l"
}

const firstButtonHover = keyframes`
  0% {
    background: white;
  }


  100% {
    color: ${lightTeal};
  }
  `
const lastButtonHover = keyframes`
  0% {
    background: ${golden};
    clip-path: inset(-1% 98% -1% -1%);
  }

  100% {
    clip-path: inset(-1% 1% -1% 97%);
    background: ${lightTeal};
    color: ${lightTeal};
  }
  `

const size = {
  s: "14px",
  m: "18px",
  l: "24px",
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  button,
  a {
    display: block;
    font-family: ${accent};
    font-size: ${props => size[props.size]};
    -webkit-appearance: none;
    border: none;
    background: none;
    position: relative;
    height: 27px;
    min-width: 60px;
    span {
      font-size: ${props => size[props.size]};
      padding: 4px 8px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
    }
    span:first-child {
      background: white;
      color: ${golden};
    }
    span:last-child {
      color: ${darkGray};
      clip-path: inset(-1% 98% -1% -1%);
      background: ${golden};
    }
    &:hover {
      span:first-child {
        animation-name: ${firstButtonHover};
        animation-fill-mode: forwards;
        animation-duration: 0.6s;
        animation-iteration-count: 1;
        animation-timing-function: linear;
      }
      span:last-child {
        animation-name: ${lastButtonHover};
        animation-fill-mode: forwards;
        animation-duration: 0.6s;
        animation-iteration-count: 1;
        animation-timing-function: linear;
      }
    }
  }
`
