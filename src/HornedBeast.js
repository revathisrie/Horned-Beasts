import { Component } from 'react';

// format a horned beast entry with title, image, and description
class HornedBeast extends Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src = {this.props.image_url} alt = {this.props.title} title = {this.props.keyword}/>
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;
