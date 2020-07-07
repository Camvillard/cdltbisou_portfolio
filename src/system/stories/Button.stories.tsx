import React from "react"
import { Button } from "../../components/Button/Button.component"

export default {
  title: "Design System | Button",

  parameters: {
    component: Button,
  },
}

export const Standard = () => (
  <>
    <Button size={"s"}>Button</Button>
  </>
)

export const Sizes = () => (
  <>
    <Button size="s">Small</Button>
    <Button size="m">Medium</Button>
    <Button size="l">Large</Button>
  </>
)

export const WithInternalLink = () => (
  <>
    <Button size={"s"} url={"#"} internal>
      Small
    </Button>
  </>
)
export const WithExternalLink = () => (
  <>
    <Button size={"s"} url={"https://www.blablabla.com"} external>
      Small
    </Button>
  </>
)
