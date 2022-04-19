import React from 'react';

import { Container, Image, Text } from '../../../components';

import { COLORS } from '../../../constants';

// TODO Move images
const ICONS = {
  inprogress: 'https://cdn-icons.flaticon.com/png/512/1686/premium/1686925.png?token=exp=1650360231~hmac=77c6a6b5296149f06c0247fc6e6edaf3',
  completed: 'https://cdn-icons.flaticon.com/png/512/3032/premium/3032885.png?token=exp=1650360048~hmac=32559713f0b78ec516138aee78143789',
  error: 'https://cdn-icons-png.flaticon.com/512/1182/1182730.png',
  pending: 'https://cdn-icons.flaticon.com/png/512/4903/premium/4903871.png?token=exp=1650372226~hmac=2a8d39515e213c7cb8aa58f7de2a07a8',
  info: 'https://cdn-icons-png.flaticon.com/512/1284/1284418.png'
};

// TODO Move constants
const DEFAULT_STATUS = 'Checks pending';


const STYLE = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    maxWidth: '100%',
    margin: '5px'
  },
  image: {
    width: '15px',
    height: '15px',
    marginRight: '10px'
  },
  text: {
    fontSize: '14px',
    fontWeight: '500',
    color: COLORS.PALETTE.TEXT_SECONDARY
  }
};


class ProgressText extends React.Component {
  constructor(props) {
    super(props);
  }


  getIcon() {

    if (!this.props.state) {
      return ICONS.pending;
    }

    return ICONS[this.props.state];
  }


  getText() {

    return this.props.children || DEFAULT_STATUS;
  }


  getTextTheme() {

    let style = {...STYLE.text};

    if (this.props.active) {
      style = {
        ...style,
        color: COLORS.PALETTE.TEXT_PRIMARY
      }
    }

    if (this.props.title) {
      style = {
        ...style,
        textDecoration: 'underline'
      }
    }

    return style;
  }


  render() {
    return (
      <Container theme={STYLE.container}>
        <Image theme={STYLE.image} src={this.getIcon()} />
        <Text theme={this.getTextTheme()}>{this.getText()}</Text>
      </Container>
    )
  }
}


export default ProgressText;