import React from 'react';

import { ButtonSecondary, Container } from '../../../components';

import { COLORS, DATA } from '../../../constants';


const MAX_CATEGORIES = 5;


const STYLE = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '5px',
    marginBottom: '5px',
    justifyContent: 'center',
    backgroundColor: `${COLORS.PALETTE.WHITE}`
  },
  item: {
    display: 'inline',
    marginLeft: '5px',
    marginRight: '5px'
  }
};


class CategoriesRow extends React.Component {

  render() {

    const categories = DATA.CATEGORIES.slice(0, MAX_CATEGORIES);

    return (
      <Container theme={STYLE.container}>
        {categories.map(data => {
          return (
            <Container key={data.id} theme={STYLE.item}>
              <ButtonSecondary>{data.title}</ButtonSecondary>
            </Container>
          )
        })}
      </Container>
    )
  }
}


export default CategoriesRow;