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

    const data = this.props.data;

    return (
      <Container theme={STYLE.container}>
        <Container key={data.info.label} theme={STYLE.row}>
          <Container theme={STYLE.content}> 
            <ProgressText title={data.info.title} active={data.info.active} state={data.info.state}>
              {data.info.label}
            </ProgressText>
          </Container>
        </Container>
        <Container key={data.pre.label} theme={STYLE.row}>
          <Container theme={STYLE.content}> 
            <ProgressText title={data.pre.title} active={data.pre.active} state={data.pre.state}>
              {data.pre.label}
            </ProgressText>
          </Container>
        </Container>
        <Container key={data.install.label} theme={STYLE.row}>
          <Container theme={STYLE.content}> 
            <ProgressText title={data.install.title} active={data.install.active} state={data.install.state}>
              {data.install.label}
            </ProgressText>
          </Container>
        </Container>
        <Container key={data.post.label} theme={STYLE.row}>
          <Container theme={STYLE.content}> 
            <ProgressText title={data.post.title} active={data.post.active} state={data.post.state}>
              {data.post.label}
            </ProgressText>
          </Container>
        </Container>
      </Container>
    )
  }
}


export default Progress;