import React, { PropTypes } from 'react'

class Plate extends React.Component {

  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.string
    ).isRequired,
    showIndex: PropTypes.number
  }

  static defaultProps = { 
    showIndex: 0,
  }

  componentDidMount(props) {
    this.addTouchEvents()
  }

  componentWillUnmount() {
    this.removeTouchEvents()
  }

  addTouchEvents() {
    document.addEventListener('touchstart', this.onTouchMove, false);
    document.addEventListener('touchmove', this.onTouchMove, false);
    document.addEventListener('mousemove', this.onTouchMove, false);
    document.addEventListener('click', this.onTouchMove, false);
  }

  removeTouchEvents() {
    document.addEventListener('touchstart', this.onTouchMove, false);
    document.addEventListener('touchmove', this.onTouchMove, false);
    document.addEventListener('mousemove', this.onTouchMove, false);
    document.addEventListener('click', this.onTouchMove, false);
  }

  onTouchMove = (e) => {
    e.preventDefault();
  };

  render () {
    return (
      <div className="plate">
        {this.props.images.map((image, idx) => 
          <img src={image} key={`step_${idx}`} alt={image} style={idx === this.props.showIndex ? {} : {display: 'none'}}/>
        )}
      </div>
    )
  }
}

export default Plate