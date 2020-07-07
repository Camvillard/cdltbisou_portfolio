import React from "react"
import { withKnobs, object } from "@storybook/addon-knobs"
import { Grid } from "../../components/Grid/Grid.component"
import { GridElement } from "../../components/Grid/Grid.ui"

export default {
  title: "Design System | Grid",
  decorators: [withKnobs],

  parameters: {
    component: Grid,
  },
}

const columnsStandard = {
  default: "1fr",
  xsm: "1fr 1fr",
  sm: "repeat(4, 1fr)",
  md: "repeat(8, 1fr)",
  lg: "repeat(12, 1fr)",
  xl: "repeat(12, 1fr)",
}

const columnsKnobs = {
  default: "1fr 1fr",
  xsm: "1fr 1fr 1fr",
  sm: "1fr 6fr 1fr",
  md: "repeat(4, 1fr)",
  lg: "1fr 1fr 1fr 1fr 1fr 1fr",
  xlg: "repeat(12, 1fr)",
}

const gap = {
  default: "8px",
  xsm: "10px",
  sm: "12px",
  md: "16px",
  lg: "18px",
  xlg: "24px",
}

const justify = {
  default: "start",
  xsm: "start",
  sm: "start",
  md: "start",
  lg: "start",
  xlg: "start",
}

const align = {
  default: "center",
  xsm: "center",
  sm: "center",
  md: "center",
  lg: "center",
  xlg: "center",
}

export const Standard = () => (
  <>
    <Grid
      columns={columnsStandard}
      align={{ default: "center" }}
      justify={{ default: "center" }}
    >
      <GridElement>first</GridElement>
      <GridElement>second</GridElement>
    </Grid>
  </>
)

export const GridWithKnobs = () => {
  const columnsOptions = object("columns", columnsKnobs)
  const gapOptions = object("gap", gap)
  const justifyOptions = object("justify items", justify)
  const alignOptions = object("align items", align)
  return (
    <Grid
      columns={columnsOptions}
      gap={gapOptions}
      justify={justifyOptions}
      align={alignOptions}
    >
      <GridElement column={{ default: "span 1" }}>one</GridElement>
      <GridElement column={{ default: "span 1" }}>two</GridElement>
      <GridElement column={{ default: "span 1" }}>three</GridElement>
      <GridElement column={{ default: "span 1" }}>four</GridElement>
      <GridElement column={{ default: "span 1" }}>five</GridElement>
      <GridElement column={{ default: "span 1" }}>six</GridElement>
      <GridElement column={{ default: "span 1" }}>seven</GridElement>
      <GridElement column={{ default: "span 1" }}>eight</GridElement>
      <GridElement column={{ default: "span 1" }}>nine</GridElement>
      <GridElement column={{ default: "span 1" }}>ten</GridElement>
      <GridElement column={{ default: "span 1" }}>eleven</GridElement>
      <GridElement column={{ default: "span 1" }}>twelve</GridElement>
    </Grid>
  )
}
