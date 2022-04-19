import React from 'react';

import { Container, Text } from '../../../components';
import { Circle, CircleChecked } from '../../../components/icons';

import { COLORS } from '../../../constants';


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
    fontSize: '12px',
    width: '12px',
    height: '12px',
    marginRight: '10px',
    color: COLORS.PALETTE.PRIMARY
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

    if (this.props.state === 'completed') {
      return (
        <CircleChecked theme={STYLE.image} />
      )
    }

    return (
      <Circle theme={STYLE.image} />
    )
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
        {this.getIcon()}
        <Text theme={this.getTextTheme()}>{this.getText()}</Text>
      </Container>
    )
  }
}


export default ProgressText;