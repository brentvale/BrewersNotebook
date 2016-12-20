import React from 'react';
import BatchListItem from './batch_list_item';
import BatchForm from './batch_form';

class BatchList extends React.Component {
	componentDidMount(){
		this.props.requestBatches()
	}
	
	render(){
		const {batches} = this.props;
		
	    const listItems = batches.map((batch, idx) => (
	        <BatchListItem key={idx} batch={batch}/>
	    ));

	    return (
	      <div>
	        <BatchForm />
	        <ul className='list-items'>
	            {listItems}
	        </ul>
	      </div>
	    );
	}
} 

export default BatchList;