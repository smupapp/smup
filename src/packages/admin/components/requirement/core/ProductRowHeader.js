import React from 'react';

import { Card, Container, Text } from '../../../../../components';
import { COLORS } from '../../../../../constants';


const STYLES = {
  CARD: {
    CONTENT: {
      margin: '0px',
      height: 'auto',
      margin: '25px 0px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 20px',
      backgroundColor: COLORS.PALETTE.MEDIUM_GRAY,
      boxShadow: `0 0px 0px ${COLORS.PALETTE.BORDER_GRAY}`
    }
  },
  CONTAINER: {
    ITEM: {
      textAlign: 'left',
      width: '150px',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }
};


const DATA = {
  itemName: 'Product Name',
  quantity: 'Quantity',
  price: 'Price',
  vendor: 'Vendor Name'
};


class ProductRowHeader extends React.Component {

  render() {
    return (
      <Card theme={STYLES.CARD.CONTENT}>
        <Container theme={STYLES.CONTAINER.ITEM}>
          <Text fontSize='12px' fontWeight='bold' color={COLORS.PALETTE.TEXT_MEDIUM_GRAY}>
            {DATA.itemName}
          </Text>
        </Container>
        <Container theme={STYLES.CONTAINER.ITEM}>
          <Text fontSize='12px' fontWeight='bold' color={COLORS.PALETTE.TEXT_MEDIUM_GRAY}>
            {DATA.quantity}
          </Text>
        </Container>
        <Container theme={STYLES.CONTAINER.ITEM}>
          <Text fontSize='12px' fontWeight='bold' color={COLORS.PALETTE.TEXT_MEDIUM_GRAY}>
            {DATA.price}
          </Text>
        </Container>
        <Container theme={STYLES.CONTAINER.ITEM}>
          <Text fontSize='12px' fontWeight='bold' color={COLORS.PALETTE.TEXT_MEDIUM_GRAY}>
            {DATA.vendor}
          </Text>
        </Container>
      </Card>
    )
  }
}


export default ProductRowHeader;