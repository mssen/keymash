import React, { Component } from 'react';
import styled from 'styled-components';
import Plain from 'slate-plain-serializer';

import TextField from './editor/TextField';
import Viewer from './viewer/Viewer';

const initialValue = Plain.deserialize('A line of text in a paragraph.');

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

class App extends Component {
  state = {
    value: initialValue
  };

  onChange = ({ value }) => {
    this.setState({ value });
  };

  render() {
    return (
      <Container>
        <TextField value={this.state.value} onChange={this.onChange} />
        <Viewer source={this.state.value} />
      </Container>
    );
  }
}

export default App;
