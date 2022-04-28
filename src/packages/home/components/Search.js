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
    textAlign: 'left',
    borderRadius: '2px'
  }
};


const PLACEHOLDER = 'Search...';
const ID = 'query';


class Search extends React.Component {

  render() {
    return (
      <Container theme={STYLE.container}>
        <InputBorder
          id={ID}
          theme={STYLE.input}
          placeholder={this.props.children || PLACEHOLDER}
          value={this.props.value || ''}
          onChange={this.props.onChange}
        />
      </Container>
    )
  }
}


export default Search;