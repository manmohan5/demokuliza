import React from 'react';


import SingleHealtDetails from './SingleHealtDetails';
const Singlehealth = props => {
  const deatils = props.details.map(d => {
    return <SingleHealtDetails title={d.title} name={d.name} key={d.id} />;
  });
  return (
    <div className="Singlehealth" style={{ padding: '1.5vw' }}>
      <h6 style={{ fontWeight: 'bold', color: 'black', marginTop: '7vw' }}>
        Single <br />
        Health
      </h6>
      <br />
      <div className="row">{deatils}</div>
      <hr />
      <p
        style={{
          display: props.Protec ? 'flex' : 'none',
          fontWeight: 'bold',
          color: '#10A881',
          justifyContent:'flex-end',
          marginBottom:'-0.5vw'
          
        }}
      >
        Better Protection{' '}
        <img
          src={require('../component/icon/greenArrow.png')}
          alt=""
          style={{ height: '3vw', margin: '-0.7vw -2vw 0vw -1.2vw' }}
        />
      </p>
    </div>
  );
};

export default Singlehealth;
