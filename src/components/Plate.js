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

  constructor(props) {
    super(props);

    this.state = {
      loadedImages: props.images.map(() => false)
    }
    this.loadImages(props.images)
  }

  componentDidMount() {
    this.addTouchEvents(this.container)
  }

  loadImages = (images) => {
    images.forEach((imageUrl, idx) => {
      const imgEl = document.createElement('img')
      imgEl.onload = this.onImgLoad
      imgEl.dataset.index = idx
      imgEl.src = imageUrl
    })
  }

  onImgLoad = (ev) => {
    //console.log('loaded', ev.target.dataset.index)
    const newState = this.state.loadedImages.map((item, idx) => {
      //console.log(idx)
      // eslint-disable-next-line
      return idx == ev.target.dataset.index ? true : item
    })
    //console.log(newState)
    this.setState({
      loadedImages: newState
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.images[0] !== this.props.images[0]) {
      this.setState({
        loadedImages: nextProps.images.map(() => false)
      })
      this.loadImages(nextProps.images)
    }
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

  _renderImageOrLoading = (idx) => (    
    this.state.loadedImages[idx] ? 
      <img src={this.props.images[idx]} 
            alt={`step ${idx}`} 
          /> : 
      <span>Loading...</span>
  )
  renderImageOrLoading = (idx) => (    
    this.state.loadedImages[idx] ? 
      <div 
        className="image"
        style={{
          backgroundImage: 'url('+this.props.images[idx]+')'
        }}
      ></div> : 
      <span>Loading...</span>
  )

  render () {
    // console.log('render')
    return (
      <div className="plate" ref={(c)=>this.container=c}>
        {this.renderImageOrLoading(this.props.showIndex)}
      </div>
    )
  }
}

export default Plate