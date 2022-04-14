import React from 'react';

import { Container } from '../../../../../components';

import { GridCard } from '.';

import { COLORS, DATA } from '../../../../../constants';


const STYLE = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '30px',
    marginBottom: '30px',
    justifyContent: 'center',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    backgroundColor: `${COLORS.PALETTE.WHITE}`
  },
  item: {
    marginLeft: '5px',
    marginRight: '5px'
  }
};


class Grid extends React.Component {

  getToolsList() {

    const data = DATA.TOOLS;
    let tools = [];

    for (let category of data) {
      for (let tool of category.tools) {
        tools = tools.concat(tool.tools);
      }
    }

    return tools;
  }

  render() {

    const tools = this.getToolsList();

    return (
      <Container theme={STYLE.container}>
        {tools.map(data => {
          return (
            <Container key={data.title} theme={STYLE.item}>
              <GridCard data={data} />
            </Container>
          )
        })}
      </Container>
    )
  }
}


export default Grid;