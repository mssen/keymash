import React from 'react';

import List from './List';
import Punctuation from './Punctuation';

const renderMark = ({ mark, children, attributes }) => {
  switch (mark.type) {
    case 'bold':
      return <strong {...attributes}>{children}</strong>;
    case 'code':
      return <code {...attributes}>{children}</code>;
    case 'italic':
      return <em {...attributes}>{children}</em>;
    case 'underlined':
      return <u {...attributes}>{children}</u>;
    case 'strikethrough':
      return <s {...attributes}>{children}</s>;
    case 'title': {
      return <h1 {...attributes}>{children}</h1>;
    }
    case 'punctuation': {
      return <Punctuation {...attributes}>{children}</Punctuation>;
    }
    case 'list': {
      return <List {...attributes}>{children}</List>;
    }
    case 'hr': {
      return <hr {...attributes} />;
    }
    default: {
      return children;
    }
  }
};

export default renderMark;
