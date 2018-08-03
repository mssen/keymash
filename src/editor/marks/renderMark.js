import React from 'react';

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
    case 'title': {
      return <h1 {...attributes}>{children}</h1>;
    }
    case 'punctuation': {
      return (
        <span {...attributes} style={{ opacity: 0.2 }}>
          {children}
        </span>
      );
    }
    case 'list': {
      return (
        <span
          {...attributes}
          style={{
            paddingLeft: '10px',
            lineHeight: '10px',
            fontSize: '20px'
          }}
        >
          {children}
        </span>
      );
    }
    case 'hr': {
      return (
        <span
          {...attributes}
          style={{
            borderBottom: '2px solid #000',
            display: 'block',
            opacity: 0.2
          }}
        >
          {children}
        </span>
      );
    }
    default: {
      return children;
    }
  }
};

export default renderMark;
