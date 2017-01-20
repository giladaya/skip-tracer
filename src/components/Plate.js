import React, { PropTypes } from 'react'

class Plate extends React.Component {

  static propTypes = {
    image: PropTypes.string.isRequired
  }

  static defaultProps = { 
  }

  componentDidMount(props) {
    this.addTouchEvents()
  }

  componentWillUnmount() {
    this.removeTouchEvents()
  }

  addTouchEvents() {
    document.addEventListener('touchmove', this.onTouchMove, false);
    document.addEventListener('mousemove', this.onTouchMove, false);
  }

  removeTouchEvents() {
    document.addEventListener('touchmove', this.onTouchMove, false);
    document.addEventListener('mousemove', this.onTouchMove, false);
  }

  onTouchMove = (e) => {
    e.preventDefault();
  };

  render () {
    return (
      <div className="plate">
        <img src={this.props.image} alt={this.props.image}/>
      </div>
    )
  }
}

export default Plate