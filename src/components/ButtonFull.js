import React from 'react'
import screenfull from "screenfull"

class ButtonFull extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      enabled: screenfull.enabled,
      isFull: false
    }
  }

  toggle = (ev) => {
    screenfull.toggle()
    this.setState({
      isFull: screenfull.isFullscreen
    })
  }

  render() {
    return <button disabled={!this.state.enabled} className="btn btn_full" onClick={this.toggle}>
      {this.state.isFull?'\u21F2':`\u21F1`}
      </button>
  }
}

export default ButtonFull