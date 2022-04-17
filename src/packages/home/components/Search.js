import React from 'react';

import { Container, InputBorder } from '../../../components';
import { COLORS } from '../../../constants';


const STYLE = {
  container: {
    display: 'flex',
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px'
  },
  input: {
    margin: '2rem 0',
    fontSize: '15px',
    padding: '7px 10px',
    boxShadow: 'none',
    backgroundColor: `${COLORS.PALETTE.WHITE}`,
    border: `0.5px solid ${COLORS.PALETTE.BORDER_GRAY}`,
    textAlign: 'left'
  }
};


const PLACEHOLDER = 'Search...';


class Search extends React.Component {

  render() {
    return (
      <Container theme={STYLE.container}>
        <InputBorder
          theme={STYLE.input}
          placeholder={this.props.children || PLACEHOLDER}
        />
      </Container>
    )
  }
}


export default Search;