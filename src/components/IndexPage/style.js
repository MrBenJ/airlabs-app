import { css } from 'emotion';

export default css`

  input {
    display: inline-block;
    padding: .5em;
    width: 50%;
  }

  .remove {
    cursor: pointer;
    display: inline-block;
    margin-left: 1em;

    &:hover {
      color: red;
    }
  }
`;
