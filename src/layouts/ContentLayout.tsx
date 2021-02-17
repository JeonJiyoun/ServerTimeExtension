import styled, { css } from "styled-components";

interface ThemeType {
  background : string,
  border : string
}

const ContentLayout = styled.div`
  width: 300px;
  height: 100px;
  box-shadow: 0 6px 18px 0 rgb(51 51 51 / 30%);
  border-radius: 1rem;
  text-align: center;
  color: #fff;
  background-color: ${($props: { theme : ThemeType}) => $props.theme.background};
  border:  ${($props: { theme : ThemeType}) => $props.theme.border};
`;

export { ContentLayout };
