import React from 'react';
import BatchListItem from './batch_list_item';
import BatchForm from './batch_form';

const BatchList = ({ batches, receiveBatch }) => {

  const listItems = batches.map((batch, idx) => (
      <BatchListItem key={idx} batch={batch}/>
  ));

  return (
    <div>
      <BatchForm receiveBatch={receiveBatch}/>
      <ul className='list-items'>
          {listItems}
      </ul>
    </div>
  );
}
    

export default BatchList;