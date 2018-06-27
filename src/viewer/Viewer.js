import React from 'react';
import { Editor } from 'slate-react';

const Viewer = ({ source }) => <Editor value={source} readOnly />;

export default Viewer;
