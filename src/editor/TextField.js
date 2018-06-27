import React from 'react';
import styled from 'styled-components';
import { Editor } from 'slate-react';
import isHotkey from 'is-hotkey';

const StyledEditor = styled(Editor)`
  height: 100vh;
  border: 1px solid black;
`;

const isBoldHotKey = isHotkey('mod+b');

const onKeyDown = (event, change) => {
  if (isBoldHotKey(event)) {
    event.preventDefault();
    change.toggleMark('bold');
    return true;
  }
  return false;
};

const renderMark = ({ mark, children }) => {
  switch (mark.type) {
    case 'bold':
      return <strong>{children}</strong>;
    default:
      return children;
  }
};

const TextField = ({ value, onChange }) => (
  <StyledEditor
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    renderMark={renderMark}
  />
);

export default TextField;
