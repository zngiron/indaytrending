import normalize from 'emotion-normalize';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { config, dom, library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faExclamationCircle,
  faSearch,
  faSpinnerThird,
  faTimes,
} from '@fortawesome/pro-regular-svg-icons';

export const Root = css`
  ${normalize}
  ${dom.css()}

  :root {
    --color-primary: #253f4c;
    --color-secondary: #832f39;
    --color-tertiary: #ffc800;
    --color-white: #fff;
    --color-gray: #666;
    --color-dark: #111;
    --color-black: #000;
    --box-shadow: 0 0 2.5rem #0001;
    --container-width: 100%;
    --menu-width: 20rem;
    --header-height: 3.125rem;
    --transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit; 
  }

  html {
    overflow-x: hidden;
    box-sizing: border-box;
    scroll-behavior: smooth;


    @media (min-width: 36rem) {
    }

    @media (min-width: 48rem) {
      
    }

    @media (min-width: 64rem) {
      
    }
    
    @media (min-width: 75rem) {
      
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--color-white);
    color: var(--color-dark);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a, button {
    &:focus {
      outline: none;
    }
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

config.autoAddCss = false;

library.add(
  faBars,
  faExclamationCircle,
  faSearch,
  faSpinnerThird,
  faTimes,
);
