import React from 'react';

import Link from './Link';
import List from './List';
import Punctuation from './Punctuation';

const renderMark = ({ mark, children, attributes }) => {
  switch (mark.type) {
    case 'bold':
      return <strong {...attributes}>{children}</strong>;
    case 'blockquote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'code':
      return <code {...attributes}>{children}</code>;
    case 'italic':
      return <em {...attributes}>{children}</em>;
    case 'underlined':
      return <u {...attributes}>{children}</u>;
    case 'strikethrough':
      return <s {...attributes}>{children}</s>;
    case 'h1':
      return <h1 {...attributes}>{children}</h1>;
    case 'h2':
      return <h2 {...attributes}>{children}</h2>;
    case 'h3':
      return <h3 {...attributes}>{children}</h3>;
    case 'h4':
      return <h4 {...attributes}>{children}</h4>;
    case 'h5':
      return <h5 {...attributes}>{children}</h5>;
    case 'h6':
      return <h6 {...attributes}>{children}</h6>;
    case 'punctuation':
      return <Punctuation {...attributes}>{children}</Punctuation>;
    case 'list':
      return <List {...attributes}>{children}</List>;
    case 'url':
      return <Link {...attributes}>{children}</Link>;
    default: {
      return children;
    }
  }
};

export default renderMark;
