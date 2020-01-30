import React from 'react';
const SingleHealtDetails = props => {
  return (
    <div className="col-sm-6">
      <p style={{ color: '#89959B', fontSize: '0.8vw', margin: '0vw' }}>
        {props.title}
      </p>
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '0.9vw',
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
