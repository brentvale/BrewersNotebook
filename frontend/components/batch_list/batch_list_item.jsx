import React from 'react';

class BatchListItem extends React.Component{
  render() {
    const { batch } = this.props;
    const { id, gallonsToBrew, nameOfBeer, typeOfBrewing } = batch;
	
    return (
      <div id={id}>
          	<p>name of beer: {nameOfBeer}</p>
			<p>gallons to brew: {gallonsToBrew}</p>
          	
          	<p>type of brewing: {typeOfBrewing}</p>
      </div>
    );
  }
}

export default BatchListItem;