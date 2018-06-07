import React from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
  height: 100vh;
`;

const TextField = ({ onChange }) => {
  return <Textarea onChange={onChange} />;
};

export default TextField;
