import React from 'react';
import './App.scss';

class App extends React.PureComponent {
  state = {
    minSliderValue: 50,
    maxSliderValue: 51,
    max1: 50,
    min2: 51,
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
      max1: state.maxSliderValue - 1,
      min2: state.maxSliderValue,
    }));
  }

  handleMouseDownMaxSlider = () => {
    this.setState(state => ({
      min2: state.minSliderValue + 1,
      max1: state.minSliderValue,
    }));
  }

  render() {
    const { minSliderValue, maxSliderValue } = this.state;

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
              style={{ width: `${(this.state.max1 * 3) + 15}px` }}
              type="range"
              min="0"
              max={this.state.max1}
              onChange={this.minThumbMovement}
              onMouseDown={this.handleMouseDownMinSlider}
            />
            <input
              style={{ width: `${((100 - this.state.min2) * 3) + 15}px` }}
              className="slider__thumb"
              type="range"
              min={this.state.min2}
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
