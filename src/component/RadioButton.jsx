import React, { Component } from 'react';


class RadioButton extends Component {
  
  render() {
    return (
      <div className={this.props.name}>
        <p className='Ptitle'>{this.props.pTitle}</p>
        <input
          type="radio"
          name="type"
          value={this.props.pTitle}
          checked={this.props.check}
          style={{ width: '2vw', height: '2vw', marginTop: '-1vw'}}
          onChange={e => this.props.getInputValue(e)}
        />

      </div>
    );
  }
}
export default RadioButton;
