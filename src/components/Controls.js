import React from 'react'
import PropTypes from 'prop-types'

const Controls = (props) => (
  <div className="controls">
    <button disabled={!props.prevEnabled} className="btn btn_prev" onClick={props.handlePrev}>&#9664;</button>
    <span className="title">{props.title}</span>
    <button disabled={!props.nextEnabled} className="btn btn_next" onClick={props.handleNext}>&#9654;</button>
  </div>
)

Controls.propTypes = {
  prevEnabled: PropTypes.bool,
  nextEnabled: PropTypes.bool,
  handlePrev: PropTypes.func,
  handleNext: PropTypes.func,
  title: PropTypes.string,
}

Controls.defaultProps = { 
  prevEnabled: false,
  nextEnabled: false,
  title: '',
}

export default Controls