import React from 'react';
import { uniqueId } from '../../util/idGenerator'

class BatchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
		  nameOfBeer: "",
		  typeOfBrewing: "",
		  gallonsToBrew: 0,
		  currentStep: 0
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
      event.preventDefault();
      const batch = Object.assign({}, this.state, { id: uniqueId() });
      this.props.receiveBatch(batch);
      this.setState({
		  nameOfBeer: "",
		  typeOfBrewing: "",
		  gallonsToBrew: 0
      });
    }

    linkState(key) {
      // here we use '[key]' to set the key to be the value of the 'key' variable,
      // as opposed to a string of 'key'
      return (event => this.setState({[key]: event.currentTarget.value}));
    }

    render () {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Name of Beer
            <input onChange={this.linkState('nameOfBeer')} value={this.state.nameOfBeer}/><br/>
          </label>
          <label>Type of Brewing
            <input onChange={this.linkState('typeOfBrewing')} value={this.state.typeOfBrewing}/><br/>
          </label>
          <label>Gallons To Brew
            <input onChange={this.linkState('gallonsToBrew')} value={this.state.gallonsToBrew}/><br/>
          </label>
          <input type="submit" value="Enter" />
        </form>
      );
    }
}
  
export default BatchForm;