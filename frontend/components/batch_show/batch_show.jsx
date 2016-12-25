import React from 'react';

class BatchShow extends React.Component{
  constructor(){
    super();
    this.batchFromProps = this.batchFromProps.bind(this);
  }
	
	componentDidMount(){
		//have everyone start with a 'sample batch'
		//***REVISIT: when user can start out with ZERO batches, this will throw an error.  Current workaround is use seed data, possible solution is undeleteable "tutorial batch" that every user has their own of.  Consider: tutorial could be done as single object/entity that is shared by all users.  Consider: first use is a step by step walk through:
		//1. Are you ready to brew a batch?  Or just learning about the site?
		//1a. Ready to brew -> takes the user through the process step by step, with ability to skip steps.
		//1b. 
		if(this.props.batches.length === 0){
			
		}
		this.props.requestBatches()
	}
  
  batchFromProps() {
    const targetBatchName = this.props.params.name_of_beer;
    for(let i = 0; i < this.props.batches.length; i++){
      if(this.props.batches[i].name_of_beer === targetBatchName){
        return this.props.batches[i];
      }
    }
    //unable to find a batch by name in this.props.params
    return false;
  }
  
  render() {
    const batch = this.batchFromProps();
    const { id, name_of_beer, type_of_brewing, gallons } = batch;
    return (
      <div id={name_of_beer}>
          <p>batch id: {id}</p>
          <p>name of beer: {name_of_beer}</p>
          <p>type of brewing: {type_of_brewing}</p>
          <p>gallons to brew: {gallons}</p>
      </div>
    );
  }
};

export default BatchShow;