import React from 'react';

const Header = props => {
 
  return (
    <div className="header">
     
        <div style={{display:"flex",justifyContent:'space-between'}}>
          <div style={{ fontSize: '2vw',marginTop:'-0.4vw'}}>&lt;</div>
          <div>
            <img
              src={require('./icon/home.png')}
              alt=""
              style={{ height: '2vw' }}
            />
          </div>
          <div>
            <img
              src={require('./icon/user.png')}
              alt=""
              style={{ height: '2.3vw',marginRight:'-0.8vw' }}
            />
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <span className="spanText">Coverage</span>
          <span className="spanText">Q&A</span>
          <span className="spanText">Review</span>
          <span className="spanText">Checked</span>
        </div>
    
      <p style={{ lineHeight: '1.4vw' }}>{props.name}</p>
    </div>
  );
};
export default Header;
