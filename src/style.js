import styled from 'styled-components';

export const FluidContainer = styled.div`
  height: 100%;
  display: flex;
`;

export const MainWrapper = styled.main`
  position: relative;
  flex: 1 1 auto;
  height: 100%;
  overflow: hidden;
`;

export const ArticleWrapper = styled.article`
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
`;