import React from 'react';

import { Container, InputBorder } from '../../../../../components';
import { COLORS } from '../../../../../constants';


const STYLE = {
  CONTAINER: {
    width: '300px',
    marginTop: '10px',
    marginBottom: '10px',
  }
};


const PLACEHOLDER = 'What would you like to do today?';


class Search extends React.Component {

  render() {
    return (
      <Container theme={STYLE.CONTAINER}>
        <InputBorder
          fontSize='15px'
          border={`0.5px solid ${COLORS.PALETTE.TEXT_GRAY}`}
          borderRadius='12px'
          padding='15px'
          placeholder={PLACEHOLDER}
        />
      </Container>
    )
  }
}


export default Search;