import React from 'react';

import { Container, Text } from '../../../components';
import { Circle, CircleChecked, CircleCross, CircleLoader } from '../../../components/icons';

import { COLORS, STATES } from '../../../constants';


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
    color: COLORS.PALETTE.PRIMARY_DARK
  },
  success: {
    fontSize: '12px',
    width: '12px',
    height: '12px',
    marginRight: '10px',
    color: COLORS.PALETTE.SUCCESS
  },
  error: {
    fontSize: '15px',
    width: '15px',
    height: '15px',
    marginRight: '10px',
    color: COLORS.PALETTE.FAIL
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

    switch (this.props.state) {
      case STATES.COMPLETED:
        return (
          <CircleChecked theme={STYLE.success} />
        )
      case STATES.INPROGRESS:
        return (
          <CircleLoader theme={STYLE.image} />
        )
      case STATES.ERROR:
        return (
          <CircleCross theme={STYLE.error} />
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