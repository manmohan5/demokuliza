import React, { Component } from 'react';
import Singlehealth from './Singlehealth';
import RadioButton from './RadioButton';
import Header from './Header';

import Description from './Description';
import advancedData from '../Data/advancedData';
import superiorData from '../Data/superiorData';
import basicData from '../Data/basicData';
import headerBasic from '../Data/headerBasic';
import HeaderAdvanced from '../Data/HeaderAdvanced';
import basicDesData from '../Data/basicDesData';
import advancedDesData from '../Data/advancedDesData';
import superiorDesData from '../Data/superiorDesData';

class MiddleContent extends Component {
  constructor() {
    super();
    this.state = {
      descrip: basicDesData,
      value: 'BASIC',
      details: basicData,
      headerData: headerBasic[0],
      Protec: false,
      style1: {
        backgroundColor: '#33d6ff',
   
      },
      style2: { margin: '1.4vw 1.5vw 0.1vw 1.5vw', color: 'white' },
      styleSpan: {
        backgroundColor: '#33d6ff'
      }
    };
  }

  onChangeRadio = e => {
    if (e.target.value === 'ADVANCED') {
      this.setState({
        value: e.target.value,
        details: advancedData,
        descrip: advancedDesData,
        headerData: HeaderAdvanced,
        Protec: true,
        style1: {
          marginLeft: '6.29vw',
          backgroundColor: '#ffcc00',

        },
        style2: { margin: '1.4vw 1.5vw 0.1vw 0.6vw', color: 'white' },
        styleSpan: {
          backgroundColor: '#ffcc00'
        }
      });
    } else if (e.target.value === 'SUPERIOR') {
      this.setState({
        value: e.target.value,
        details: superiorData,
        descrip: superiorDesData,
        headerData: headerBasic,
        style1: {
          left: '12.48vw',
          backgroundColor: ' #00b300',

    
         
        },
        style2: { margin: '1.4vw 1.5vw 0.1vw 0.7vw', color: 'white' },
        styleSpan: {
          backgroundColor: '#00b300'
        }
      });
    } else {
      this.setState({
        value: e.target.value,
        details: basicData,
        descrip: basicDesData,
        headerData: headerBasic,
        Protec: false,
        style1: {
          backgroundColor: '#33d6ff',

  
        },
        style2: { margin: '1.4vw 1.5vw 0.1vw 1.5vw', color: 'white' },
        styleSpan: {
          backgroundColor: '#33d6ff'
        }
      });
    }
  };
  render() {
    const des = this.state.descrip.map(b => {
      return (
        <Description
          icon={b.icon}
          des={b.des}
          title={b.title}
          key={b.id}
          idx={b.id}
          Protec={this.state.Protec}
        />
      );
    });
    return (
      <React.Fragment>
        <Header name={this.state.headerData} />

        <div className="MiddleContent">
          <div
            style={{
              display: 'flex',
              position: 'absolute'
            }}
          >
            <div className="divround" style={this.state.style1}>
              <span className="stylespan" style={this.state.styleSpan}></span>
              <p className="Ptitle" style={this.state.style2}>
                {this.state.value}
              </p>
              <img
                src={require('./icon/circle.png')}
                alt=""
                style={{ width: '2vw', marginLeft: '2vw' }}
              />
            </div>

            <RadioButton
              name="radioButtonBasic"
              pTitle="BASIC"
              check={this.state.value === 'BASIC'}
              getInputValue={this.onChangeRadio}
            />
            <RadioButton
              name="radioButtonAdvanced"
              pTitle="ADVANCED"
              check={this.state.value === 'ADVANCED'}
              getInputValue={this.onChangeRadio}
            />
            <RadioButton
              name="radioButtonSuperior"
              pTitle="SUPERIOR"
              check={this.state.value === 'SUPERIOR'}
              getInputValue={this.onChangeRadio}
            />
          </div>
          <Singlehealth
            details={this.state.details}
            Protec={this.state.Protec}
          />
          <div
            style={{ display: 'flex', justifyContent: 'center', margin: '0vw' }}
          >
            <img
              src={require('./icon/tick.png')}
              alt=""
              style={{ height: '1vw', margin: '0.3vw 0.4vw 0vw 0vw' }}
            />
            <p style={{ fontWeight: 'bold', fontSize: '1.1vw' }}>
              What`s included
            </p>
          </div>
          {des}
          {this.state.pp}
          <div style={{ padding: '3vh' }}>
            <button
              className="btn btn-success"
              style={{ width: '100%', borderRadius: '2vw', fontWeight: 'bold' }}
              onClick={this.handlecl}
            >
              Get this
            </button>
            <div style={{ float: 'right', fontWeight: 'bold' }}>
              More info &gt;
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default MiddleContent;
