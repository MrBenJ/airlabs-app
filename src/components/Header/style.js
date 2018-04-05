import { css } from 'emotion';

import { BP } from '../../constants';

export default css`
  background-color: skyblue;
  width: 100%;

  a {
    text-align: center;
    color: black;
    text-decoration: none;
    &:visited {
      color: black;
    }

    &:hover {
      color: white;
    }

  }
  .title {
    display: block;
    margin: 0;
    margin-bottom: 1em;
    padding-top: 1em;
    text-align: center;
  }

  @media screen and (min-width: ${BP.MD}) {

    .title {
       margin: 0 1em;
    }
    a {
      display: inline-block;
    }
  }
`;
