import React from 'react';

class BatchListItem extends React.Component{
  render() {
    const { batch } = this.props;
    const { id, gallons, name_of_beer, type_of_brewing } = batch;
	
    return (
      <div id={id}>
          	<p>name of beer: {name_of_beer}</p>
						<p>gallons to brew: {gallons}</p>
          	
          	<p>type of brewing: {type_of_brewing}</p>
      </div>
    );
  }
}

export default BatchListItem;