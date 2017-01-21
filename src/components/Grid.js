import React, { PropTypes } from 'react'

const Grid = (props) => (
  <div className="grid">
    {props.images.map((image, idx) => 
      <figure 
        key={`image_${idx}`}
        style={{
          backgroundImage: 'url(' + image + ')',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
          padding: '25%',
          width: '50%'
        }}
        onClick={props.onClick} 
        data-index={idx}
        >
      </figure>
    )}
  </div>
)

Grid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Grid