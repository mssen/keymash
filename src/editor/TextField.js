import React from 'react';
import styled from 'styled-components';
import { Editor } from 'slate-react';

const StyledEditor = styled(Editor)`
  height: 100vh;
  border: 1px solid black;
`;

const TextField = ({ value, onChange }) => (
  <StyledEditor value={value} onChange={onChange} />
);

export default TextField;
