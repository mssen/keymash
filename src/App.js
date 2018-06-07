import React, { Component } from 'react';
import styled from 'styled-components';

import TextField from './editor/TextField';
import Viewer from './viewer/Viewer';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onChange = (event) =>
    this.setState({
      value: event.target.value
    });

  render() {
    return (
      <Container>
        <TextField onChange={this.onChange} />
        <Viewer source={this.state.value} />
      </Container>
    );
  }
}

export default App;
