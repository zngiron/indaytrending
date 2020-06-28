import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import { config, dom, library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowAltCircleDown,
  faBars,
  faExclamationCircle,
  faSearch,
  faSpinnerThird,
  faTimes,
} from '@fortawesome/pro-regular-svg-icons';

config.autoAddCss = false;

library.add(
  faArrowAltCircleDown,
  faBars,
  faExclamationCircle,
  faSearch,
  faSpinnerThird,
  faTimes,
);

export const Breakpoint = {
  sm: '36rem',
  md: '48rem',
  lg: '62rem',
  xl: '75rem',
};

export const Container = styled.div`
  width: var(--container-width);
  padding: 0 1.25rem;
  margin: 0 auto;

  @media (min-width: ${Breakpoint.sm}) {
    --container-width: 33.75rem;
  }

  @media (min-width: ${Breakpoint.md}) {
    --container-width: 45rem;
  }

  @media (min-width: ${Breakpoint.lg}) {
    --container-width: 60rem;
  }

  @media (min-width: ${Breakpoint.xl}) {
    --container-width: 71.25rem;
  }
`;

export const Styles = css`
  ${dom.css()}

  :root {
    --color-primary: #253f4c;
    --color-secondary: #832f39;
    --color-tertiary: #ffc800;
    --color-white: #fff;
    --color-gray: #666;
    --color-dark: #111;
    --color-black: #000;
    --color-gradient: linear-gradient(30deg, #832f3999, #253f4c99 50%);
    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-weight: 400;
    --font-weight-bold: 700;
    --container-width: 100%;
    --menu-width: 20rem;
    --header-height: 3.125rem;
    --border-radius: 1rem;
    --box-shadow: 0 0 2.5rem #0001;
    --transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  ::selection {
    background-color: var(--color-secondary);
    color: var(--color-white);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    overflow-x: hidden;
    max-width: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    touch-action: pan-y;
  }

  body {
    font-family: var(--font-family);
    color: var(--color-gray);
    line-height: 1.25;
  }

  h1, h2, h3 {
    color: var(--color-primary);
  }

  a,
  button {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  button {
    border: none;
    background: none;
  }

  #__next {
    display: flex;
    flex-direction: column;

    && {
      min-height: 100vh !important;
    }
  }
`;


export default () => <Global styles={Styles} />;
