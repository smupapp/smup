import React from 'react';
import styled from 'styled-components';

import { Card, Container, Image, Text } from '../../../../../components';
import { COLORS } from '../../../../../constants';

const StyledBox = styled.div`
  cursor: ${props => props.theme.cursor};
  display: ${props => props.theme.display};
  flex-direction: ${props => props.theme.flexDirection};
  align-items: ${props => props.theme.alignItems};
  justify-content: ${props => props.theme.justifyContent};
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  padding: ${props => props.theme.padding};
  margin: ${props => props.theme.margin};
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
  text-align: ${props => props.theme.textAlign};
  font-size: ${props => props.theme.fontSize};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;

const theme = {
  display: 'block',
  padding: 'auto',
  textAlign: 'center',
  border: 'none',
  borderRadius: '10px',
  boxShadow: `0 1px 30px ${COLORS.PALETTE.BACKGROUND}`
}


const STYLES = {
  CONTAINER: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CARD: {
    width: '60px',
    height: '60px',
    margin: '0px',
    backgroundColor: COLORS.PALETTE.LIGHT_GRAY,
    border: 'none',
    borderRadius: '50%',
    boxShadow: `1px 10px 30px ${COLORS.PALETTE.BORDER_GRAY}`,
    cursor: 'pointer',
    userSelect: 'none'
  }
};


// TODO Check how to handle this
const data = {
  id: 'addNew',
  imageUrl: 'https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/plus.png',
  label: 'add new'
}

export default class CircleButton extends React.Component {

  render() {

    const inputTheme = { ...theme, ...this.props }
    const inputData = { ...data, ...this.props }
    return (
      <Container id={this.props.id} theme={inputTheme} onClick={this.props.onClick}>
        <Container theme={STYLES.CONTAINER}>
          <Card theme={STYLES.CARD}>
            <Image src={inputData.imageUrl} width='20px' height='20px' margin='5px' />
          </Card>
          <Container theme={{ marginTop: '10px' }}>
            <Text color={COLORS.PALETTE.TEXT_SECONDARY} fontSize='12px' fontWeight='bold'>{inputData.label}</Text>
          </Container>
        </Container>
      </Container>
    );
  }
}

