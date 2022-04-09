import React from 'react';

import { Container, Text } from '../../../../../components';
import { COLORS, LANGUAGE } from '../../../../../constants';


const STYLES = {
  CONTAINER: {
    CONTENT: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px'
    },
    ITEM: {
      textAlign: 'left',
      width: '150px',
      // TODO add this to text component
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }
};


class ProductRowContent extends React.Component {

  render() {
    return (
      <Container theme={STYLES.CONTAINER.CONTENT}>
        <Container theme={STYLES.CONTAINER.ITEM}>
          <Text fontSize='12px' fontWeight='bold' color={COLORS.PALETTE.LINK_COLOR}>
            {this.props.data.itemName}
          </Text>
          <Text fontSize='10px' fontWeight='bold' color={COLORS.PALETTE.PRIMARY_ACCENT}>
            {this.props.data.category}
          </Text>
        </Container>
        <Container theme={STYLES.CONTAINER.ITEM}>
          <Text fontSize='12px' fontWeight='bold' color={COLORS.PALETTE.TEXT_SECONDARY}>
            {this.props.data.quantity}
          </Text>
        </Container>
        <Container theme={{...STYLES.CONTAINER.ITEM, cursor: 'pointer'}}>
          <Text fontSize='12px' fontWeight='bold' color={COLORS.PALETTE.LINK_COLOR}>
            {`${LANGUAGE.RS} ${this.props.data.price}`}
          </Text>
        </Container>
        <Container theme={STYLES.CONTAINER.ITEM}>
          <Text fontSize='12px' fontWeight='bold' color={COLORS.PALETTE.TEXT_GRAY}>
            {this.props.data.vendor}
          </Text>
        </Container>
      </Container>
    )
  }
}


export default ProductRowContent;