import React from 'react';
const SingleHealtDetails = props => {
  return (
    <div className="col-sm-6">
      <p style={{ color: '#89959B', fontSize: '1.8vh', margin: '0vh' }}>
        {props.title}
      </p>
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '2.09vh',
          color: 'black',
          lineHeight: '1vw'
        }}
      >
        {' '}
        {props.name}
      </p>
    </div>
  );
};
export default SingleHealtDetails;
