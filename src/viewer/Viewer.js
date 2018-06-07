import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Markdown = styled(ReactMarkdown)`
  padding: 20px;

  & > p {
    color: #888;
  }
`;

const Viewer = (props) => {
  return <Markdown {...props} />;
};

export default Viewer;
