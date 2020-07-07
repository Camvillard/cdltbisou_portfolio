import styled from "styled-components"
import { Breakpoint } from "../../shared/types/Breakpoint.type"
import { themeBreakpoints } from "../../system/theme"

const { xsm, sm, md, lg, xl } = themeBreakpoints

export interface GridWrapperProps {
  columns: Breakpoint<string>
  align: Breakpoint<string>
  justify: Breakpoint<string>
  area?: Breakpoint<string>
  rows?: Breakpoint<string>
  gap?: Breakpoint<string>
}
export interface GridElementProps {
  column?: Breakpoint<string>
  align?: Breakpoint<string>
  justify?: Breakpoint<string>
  area?: Breakpoint<string>
  row?: Breakpoint<string>
}

export const GridWrapper = styled.div<GridWrapperProps>`
  display: grid;
  grid-template-columns: ${props => props.columns.default};
  grid-template-rows: ${props => props.rows?.default};
  align-items: ${props => props.align.default};
  justify-items: ${props => props.justify.default};
  grid-area: ${props => props.area?.default};
  gap: ${props => props.gap?.default};

  @media (min-width: ${xsm}) {
    grid-template-columns: ${props => props.columns.xsm};
    grid-template-rows: ${props => props.rows?.xsm};
    align-items: ${props => props.align.xsm};
    justify-items: ${props => props.justify.xsm};
    grid-area: ${props => props.area?.xsm};
  }
  @media (min-width: ${sm}) {
    grid-template-columns: ${props => props.columns.sm};
    grid-template-rows: ${props => props.rows?.sm};
    align-items: ${props => props.align.sm};
    justify-items: ${props => props.justify.sm};
    grid-area: ${props => props.area?.sm};
  }
  @media (min-width: ${md}) {
    grid-template-columns: ${props => props.columns.md};
    grid-template-rows: ${props => props.rows?.md};
    align-items: ${props => props.align.md};
    justify-items: ${props => props.justify.md};
    grid-area: ${props => props.area?.md};
  }
  @media (min-width: ${lg}) {
    grid-template-columns: ${props => props.columns.lg};
    grid-template-rows: ${props => props.rows?.lg};
    align-items: ${props => props.align.lg};
    justify-items: ${props => props.justify.lg};
    grid-area: ${props => props.area?.lg};
  }
  @media (min-width: ${xl}) {
    grid-template-columns: ${props => props.columns.xl};
    grid-template-rows: ${props => props.rows?.xl};
    align-items: ${props => props.align.xl};
    justify-items: ${props => props.justify.xl};
    grid-area: ${props => props.area?.xl};
  }
`
export const GridElement = styled.div<GridElementProps>`
  grid-column: ${props => props.column?.default};
  align-self: ${props => props.align?.default};
  justify-self: ${props => props.justify?.default};
  area: ${props => props.area?.default};
  grid-row: ${props => props.row?.default};
`
