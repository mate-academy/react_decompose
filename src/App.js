import React from 'react';
import './App.scss';

class App extends React.PureComponent {
  state = {
    minSliderValue: 50,
    maxSliderValue: 51,
    minInputMaxValue: 50,
    maxInputMinValue: 51,
  }

  minThumbMovement = (event) => {
    const e = +event.target.value;

    this.handleMouseDownMinSlider();
    if (+e < this.state.maxSliderValue) {
      this.setState(state => ({
        minSliderValue: +e,
      }));
    }
  }

  maxThumbMovement = (event) => {
    const e = +event.target.value;

    this.handleMouseDownMaxSlider();
    if (+e > this.state.minSliderValue) {
      this.setState(state => ({
        maxSliderValue: +e,
      }));
    }
  }

  handleMouseDownMinSlider = () => {
    this.setState(state => ({
      minInputMaxValue: state.maxSliderValue - 1,
      maxInputMinValue: state.maxSliderValue,
    }));
  }

  handleMouseDownMaxSlider = () => {
    this.setState(state => ({
      maxInputMinValue: state.minSliderValue + 1,
      minInputMaxValue: state.minSliderValue,
    }));
  }

  render() {
    const {
      minSliderValue,
      maxSliderValue,
      minInputMaxValue,
      maxInputMinValue,
    } = this.state;

    return (
      <div className="control">
        <p className="control__header">I&apos;m a double range-slider</p>
        <div className="control__displays">
          <input disabled className="control__display" value={minSliderValue} />
          <input disabled className="control__display" value={maxSliderValue} />
        </div>
        <div className="slider slider__wrapper">
          <div className="slider__bar" />
          <div className="">
            <input
              className="slider__thumb"
              style={{ width: `${(minInputMaxValue * 3) + 15}px` }}
              type="range"
              min="0"
              max={minInputMaxValue}
              onChange={this.minThumbMovement}
              onMouseDown={this.handleMouseDownMinSlider}
            />
            <input
              style={{ width: `${((100 - maxInputMinValue) * 3) + 15}px` }}
              className="slider__thumb"
              type="range"
              min={maxInputMinValue}
              max="100"
              onChange={this.maxThumbMovement}
              onMouseDown={this.handleMouseDownMaxSlider}
            />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
