import React, { ReactNode } from "react"
import { GridWrapper, GridWrapperProps } from "./Grid.ui"

interface GridProps extends GridWrapperProps {
  children: ReactNode
}
export const Grid = (props: GridProps) => {
  return <GridWrapper {...props}>{props.children}</GridWrapper>
}
