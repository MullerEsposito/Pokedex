import React from 'react';

import './Pokemon.css'
import imgFavorite from '../assets/favorite.png';

class Pokemon extends React.Component {
    constructor(props) {
      super(props);
      const { isFavorited } = this.props;
      
      this.state = {
        isFavorited
      }
    }

    render() {
        const { pokemon: {name, type, averageWeight, image}, isFavorited } = this.props;

        return (
            <div className="pokemon">
                <div>
                    <p> {name} </p>
                    <p> {type} </p>
                    <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                </div>
                <img src={image} alt={`${name} sprite`} />
                { isFavorited && <img className="imgFavorite" src={imgFavorite} alt=''/> }
            </div>
        );
    }
}

Pokemon.defaultProps = {
  isFavorited: false,
}

export default Pokemon;