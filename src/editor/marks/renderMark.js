import React from 'react';

import Link from './Link';
import List from './List';
import Punctuation from './Punctuation';

import * as types from './types';

const renderMark = ({ mark, children, attributes }) => {
  switch (mark.type) {
    case types.BOLD:
      return <strong {...attributes}>{children}</strong>;
    case types.BLOCKQUOTE:
      return <blockquote {...attributes}>{children}</blockquote>;
    case types.CODE:
      return <code {...attributes}>{children}</code>;
    case types.ITALIC:
      return <em {...attributes}>{children}</em>;
    case types.UNDERLINED:
      return <u {...attributes}>{children}</u>;
    case types.STRIKETHROUGH:
      return <s {...attributes}>{children}</s>;
    case types.H1:
      return <h1 {...attributes}>{children}</h1>;
    case types.H2:
      return <h2 {...attributes}>{children}</h2>;
    case types.H3:
      return <h3 {...attributes}>{children}</h3>;
    case types.H4:
      return <h4 {...attributes}>{children}</h4>;
    case types.H5:
      return <h5 {...attributes}>{children}</h5>;
    case types.H6:
      return <h6 {...attributes}>{children}</h6>;
    case 'punctuation':
      return <Punctuation {...attributes}>{children}</Punctuation>;
    case types.LIST:
      return <List {...attributes}>{children}</List>;
    case types.URL:
      return <Link {...attributes}>{children}</Link>;
    default: {
      return children;
    }
  }
};

export default renderMark;
