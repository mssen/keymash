import isString from 'lodash/fp/isString';
import { Block } from 'slate';
import Prism from './PrismConfig';

const getLength = (token) => {
  if (isString(token)) {
    return token.length;
  } else if (isString(token.content)) {
    return token.content.length;
  } else {
    return token.content.reduce(
      (length, aToken) => length + getLength(aToken),
      0
    );
  }
};

const decorateNode = (node) => {
  if (!Block.isBlock(node)) return;

  const texts = node.getTexts().toArray();
  const tokens = Prism.tokenize(node.text, Prism.languages.markdown);
  const decorations = [];

  let startText = texts.shift();
  let endText = startText;
  let startOffset = 0;
  let endOffset = 0;
  let start = 0;

  for (const token of tokens) {
    startText = endText;
    startOffset = endOffset;

    // Excludes length from symbols (*, _, etc.)
    const tokenLength = getLength(token);
    const end = start + tokenLength;

    let available = startText.text.length - startOffset;
    let remaining = tokenLength;

    endOffset = startOffset + remaining;

    while (available < remaining) {
      endText = texts.shift();
      remaining = tokenLength - available;
      available = endText.text.length;
      endOffset = remaining;
    }

    if (!isString(token)) {
      const range = {
        anchorKey: startText.key,
        anchorOffset: startOffset,
        focusKey: endText.key,
        focusOffset: endOffset,
        marks: [{ type: token.type }]
      };

      decorations.push(range);
    }

    start = end;
  }

  return decorations;
};

export default decorateNode;
