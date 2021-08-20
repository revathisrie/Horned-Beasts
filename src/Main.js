import { Component } from 'react';
import HornedBeast from './HornedBeast.js';

import beasts from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends Component {
  render() {
    let beastList = beasts.map(beast => <HornedBeast image_url={beast.image_url} title={beast.title} description={beast.description} keyword={beast.keyword}/>);
    return (
      <>
        <CardColumns>
          {beastList}
        </CardColumns>
      </>
    );
  }
}

export default Main;
