import React from 'react';

import { Container } from '../../../components';
import { ProgressText } from '.';
import { COLORS } from '../../../constants';


const STYLE = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'left',
    maxWidth: '100%'
  },
  row: {
    paddingTop: '7px',
    paddingBottom: '7px'
  },
  content: {
    marginLeft: '0px'
  }
};


class Progress extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container theme={STYLE.container}>
        {this.props.data.map(data => {
          return <Container key={data.label} theme={STYLE.row}>
            <Container theme={STYLE.content}> 
              <ProgressText title={data.title} active={data.active} state={data.state}>{data.label}</ProgressText>
            </Container>
          </Container>
        })}
      </Container>
    )
  }
}


export default Progress;