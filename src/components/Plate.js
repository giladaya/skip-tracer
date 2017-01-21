import React, { PropTypes } from 'react'

class Plate extends React.Component {
  container = null

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
    this.addTouchEvents(this.container)
  }

  componentWillUnmount() {
    this.removeTouchEvents(this.container)
  }

  addTouchEvents(el) {
    el.addEventListener('touchstart', this.onTouchMove, false);
    el.addEventListener('touchmove', this.onTouchMove, false);
    el.addEventListener('mousemove', this.onTouchMove, false);
    el.addEventListener('click', this.onTouchMove, false);
  }

  removeTouchEvents(el) {
    el.addEventListener('touchstart', this.onTouchMove, false);
    el.addEventListener('touchmove', this.onTouchMove, false);
    el.addEventListener('mousemove', this.onTouchMove, false);
    el.addEventListener('click', this.onTouchMove, false);
  }

  onTouchMove = (e) => {
    e.preventDefault();
  };

  render () {
    return (
      <div className="plate" ref={(c)=>this.container=c}>
        {this.props.images.map((image, idx) => 
          <img src={image} key={`step_${idx}`} alt={image} style={idx === this.props.showIndex ? {} : {display: 'none'}}/>
        )}
      </div>
    )
  }
}

export default Plate