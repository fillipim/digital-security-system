/* eslint-disable default-case */
import styled, {css} from "styled-components";
import theme from "./theme";

type tText = {
    color?: keyof typeof theme.colors.grey
    size?: keyof typeof theme.typography.sizes
    fontWeight?: 100 | 400 | 700
    tag?: 1 | 2 | 3 | 4 | 5 | 6
}
export const Text = styled('h1').attrs<tText>(({ tag }) => ({
    as: `h${tag}`
  }))<tText>`
    ${({
      color = 'grey0',
      size = 'size1',
      fontWeight = 700
    }) => css`
      font-size: ${theme.typography.sizes[size]};
      color: ${theme.colors.grey[color]};
      font-weight: ${fontWeight};
    `}
  `