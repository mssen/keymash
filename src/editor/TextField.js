import React from 'react';
import styled from 'styled-components';
import { Editor } from 'slate-react';

import decorateNode from './decorateNode';
import renderMark from './marks/renderMark';

const StyledEditor = styled(Editor)`
  height: 100vh;
  border: 1px solid black;
  padding: 1em;
`;

const TextField = ({ value, onChange }) => (
  <StyledEditor
    value={value}
    onChange={onChange}
    renderMark={renderMark}
    decorateNode={decorateNode}
  />
);

export default TextField;
