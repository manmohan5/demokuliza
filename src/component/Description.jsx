import React from 'react';
const Description = props => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '13.5vw'
        }}
      >
        <img src={props.icon} alt="" style={{ height: '2vw' }} />
        <p
          style={{
            textAlign: 'center',
            margin: '0vw',
            fontWeight: 'bold',
            padding: '0vw 0vw 0vw 1vw',
            width: props.idx === 3 ? '14vw' : '11.5vw'
          }}
        >
          {props.title}
           <img
                src={require('./icon/qu.png')}
                alt=""
                style={{ width: '12px',display: props.idx === 4 ||  props.idx === 5 ?'inline' : 'none', marginLeft:'0.5vw' }}
              />
        </p>
       

        <p style={{ textAlign: 'center', fontSize: '1.2vw', display:'flex'}}>
          {props.des}
          <label
            style={{
              display: props.Protec && props.idx !== 3 ? 'inline' : 'none',
              fontWeight: 'bold',
              color: '#10A881',
              fontSize: '1.2vw'
            }}
          >
            &#8593;
          </label>
        </p>
      </div>
    </div>
  );
};
export default Description;
