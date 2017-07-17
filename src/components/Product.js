// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types';

class Product extends React.Component {

  render(){
    return(
      <div>
      <h1> Name </h1>
      <h4> {this.props.name} </h4>
      <h1> Producer </h1>
      <h4> {this.props.producer} </h4>
      <h1> Has Watermark </h1>
      <h4> {this.props.watermark} </h4>
      <h1> Color </h1>
      <h4> {this.props.color} </h4>
      <h1> Weight </h1>
      <h4> {this.props.weight} </h4>
      </div>
    )
  }

}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName]
    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
     }
    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidWeight = weight > 80 && weight < 300;
    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  }
}

export default Product
