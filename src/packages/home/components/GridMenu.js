import React from 'react';

import { Container } from '../../../components';
import { GridCard } from '.';

import { COLORS, DATA } from '../../../constants';


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
  constructor(props) {
    super(props);
  }


  getTools() {

    let tools = DATA.TOOLS;

    tools = this.filterCategory(tools);
    tools = this.filterQuery(tools);
    
    return tools;
  }


  filterQuery(data) {
    
    if (!this.props.query) {
      return data;
    }

    const query = this.props.query;
    const list = [];

    // TODO Change to use _.filter
    for (let obj of data) {

      const isNameMatched = this.compare(obj.title, query);
      const isDescriptionMatched = this.compare(obj.description, query);
      const isSourceMatched = this.compare(obj.source, query);
      const isCategoryMatched = this.compare(obj.categories.join(','), query);

      if (isNameMatched || isDescriptionMatched || isSourceMatched || isCategoryMatched) {
        list.push(obj);
      }
    }

    return list;
  }


  filterCategory(data) {

    if (!this.props.category) {
      return data;
    }

    const category = this.props.category;
    const list = [];

    // TODO Change to use _.filter
    for (let obj of data) {

      const isCategoryMatched = this.compare(obj.categories, category);
      if (isCategoryMatched) {
        list.push(obj);
      }
    }

    return list;
  }


  compare(value, input) {

    if (!value || !input) {
      return false;
    }

    return value.toLowerCase().includes(input.toLowerCase());
  }


  render() {

    const tools = this.getTools();

    return (
      <Container theme={STYLE.container}>
        {tools.map(data => {
          return (
            <Container key={data.id} theme={STYLE.item}>
              <GridCard data={data} onClick={this.props.onClick} />
            </Container>
          )
        })}
      </Container>
    )
  }
}


export default Grid;