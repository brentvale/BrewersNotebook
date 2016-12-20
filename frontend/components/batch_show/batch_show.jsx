import React from 'react';

class BatchShow extends React.Component{
  constructor(){
    super();
    this.batchFromProps = this.batchFromProps.bind(this);
  }
  
  batchFromProps() {
    const targetBatchName = this.props.params.name_of_beer;
    for(let i = 0; i < this.props.batchs.length; i++){
      if(this.props.batchs[i].name_of_beer === targetBatchName){
        return this.props.batchs[i];
      }
    }
    //unable to find a batch by name in this.props.params
    return false;
  }
  
  render() {
    const batch = this.batchFromProps();
    const { id, name_of_beer, type_of_brewing, gallons_to_brew } = batch;
    return (
      <div id={name_of_beer}>
          <p>batch id: {id}</p>
          <p>name of beer: {name_of_beer}</p>
          <p>type of brewing: {type_of_brewing}</p>
          <p>gallons to brew: {gallons_to_brew}</p>
      </div>
    );
  }
};

export default BatchShow;