import { Component } from 'react';
import Heart from './images/heart.png';
import Card from 'react-bootstrap/Card';

// format a horned beast entry with title, image, and description
class HornedBeast extends Component {
constructor(props){
  super(props);

  this.state = {
    votes: 0
  };
}

incrementVotes = () => {
  this.setState({votes: this.state.votes+1});
  console.log(this.state.votes, this.props.title);
}


  render() {
    return (
      <>
      
      <Card style={{width: '30em'}}>
      <Card.Img src = {this.props.image_url} alt = {this.props.title} title = {this.props.keyword} onClick={this.incrementVotes} style={{width: '30em'}}/>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Img src={Heart} alt = 'heart' style={{width: '2em'}}/>
        <Card.Text>Votes: {this.state.votes}</Card.Text>
        <Card.Text>{this.props.description}</Card.Text>
      </Card.Body>
    </Card>
   </>
    
    );
  }
}

export default HornedBeast;
