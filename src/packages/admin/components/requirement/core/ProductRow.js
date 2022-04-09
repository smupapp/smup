import React from 'react';

import { Card } from '../../../../../components';

import { COLORS } from '../../../../../constants';

import { ProductRowContent } from '.';


const STYLES = {
  CARD: {
    MAIN: {
      margin: '0px',
      height: 'auto',
      margin: '15px 0px',
      boxShadow: `0 3px 10px ${COLORS.PALETTE.BORDER_GRAY}`
    }
  },
  CONTAINER: {
    CONTENT: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }
};


class ProductRow extends React.Component {

  render() {
    return (
      <Card theme={STYLES.CARD.MAIN}>
        <ProductRowContent data={this.props.data} />
      </Card>
    )
  }
}


export default ProductRow;