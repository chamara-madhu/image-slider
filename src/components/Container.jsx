import React, { PureComponent } from "react";

import { imagesArr } from "../assets/images/imagesArr";

import SliderCard from "./common/SliderCard";
import PrevButton from "./common/PrevButton";
import NextButton from "./common/NextButton";
import NavDots from "./common/NavDots";
import Filter from "./common/Filter";

// set time interval variable
var timeInterval;

class Container extends PureComponent {
  constructor() {
    super();
    this.state = {
      imagesIndex: [],
      current: 0,
      isAnimation: false,
      noOfSlides: 3,
      isAutoplay: true,
      time: 5000,
      direction: "RIGHT",
    };
  }

  componentDidMount = () => {
    // initial slides
    this.initialSlides();

    // start autoplay
    this.autoplayTimer();
  };

  // set initial slides
  initialSlides = () => {
    let arr = [];
    this.createArr(this.state.noOfSlides).forEach((el) => {
      arr = [...arr, imagesArr[el]];
    });
    this.setState({ imagesIndex: arr });
  };

  // create sample arr
  createArr = (items) => {
    let newArr = [];

    for (let i = 0; i < items; i++) {
      newArr = [...newArr, i];
    }

    return newArr;
  };

  // handle auto play changes
  handleAutoplay = (e) => {
    this.setState(
      {
        isAutoplay: e.target.value === "true" ? true : false,
      },
      () => {
        if (e.target.value === "true") {
          this.autoplayTimer();
        } else {
          // clear interval
          clearInterval(timeInterval);
        }
      }
    );
  };

  // assign value to timeInterval
  autoplayTimer = () => {
    if (this.state.isAutoplay) {
      timeInterval = setInterval(this.autoplay, this.state.time);
    }
  };

  // hanfle autopaly
  autoplay = () => {
    if (this.state.direction === "RIGHT") {
      this.handleNext();
    } else {
      this.handlePrev();
    }
  };

  // handle changes of direction, sliding time and No of Slides
  handleChange = (e) => {
    if (e.target.name === "time") {
      this.setState({ [e.target.name]: parseInt(e.target.value) });
      // check isAutoplay status
      if (this.state.isAutoplay) {
        // clear interval
        clearInterval(timeInterval);

        // start again with new sliding time
        setTimeout(() => {
          timeInterval = setInterval(this.autoplay, this.state.time);
        }, 100);
      }
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  // handle prev
  handlePrev = () => {
    this.setState({ isAnimation: true });

    const commingIndex =
      this.state.current === 0 ? imagesArr.length - 1 : this.state.current - 1;

    let arr = [];

    let index =
      this.state.current === 0 ? imagesArr.length - 1 : this.state.current - 1;

    // setting new index
    this.createArr(this.state.noOfSlides).forEach((el) => {
      index = index === imagesArr.length - 1 ? 0 : index + 1;
      arr = [...arr, imagesArr[index]];
    });

    this.setState({ current: commingIndex, imagesIndex: arr }, () => {
      setTimeout(() => {
        this.setState({ isAnimation: false });
      }, 2000);
    });
  };

  // handle next
  handleNext = () => {
    this.setState({ isAnimation: true });

    const commingIndex =
      this.state.current === imagesArr.length - 1 ? 0 : this.state.current + 1;

    let arr = [];

    let index =
      this.state.current > imagesArr.length - 1 ? 0 : this.state.current;

    // setting new index
    this.createArr(this.state.noOfSlides).forEach((el) => {
      index = index === imagesArr.length - 1 ? 0 : index + 1;
      arr = [...arr, imagesArr[index]];
    });

    this.setState({ current: commingIndex, imagesIndex: arr }, () => {
      setTimeout(() => {
        this.setState({ isAnimation: false });
      }, 2000);
    });
  };

  render() {
    return (
      <div className="container-fluid p-0">
        <div className="row slider-settings-container">
          <div className="col p-0">
            <Filter
              isAutoplay={this.state.isAutoplay}
              direction={this.state.direction}
              time={this.state.time}
              noOfSlides={this.state.noOfSlides}
              handleAutoplay={this.handleAutoplay}
              handleChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row m-0 ">
          <div className="col p-0 ">
            <div className="main-slider-container">
              <PrevButton handlePrev={this.handlePrev} />

              <div className="main-slider-div">
                {this.state.imagesIndex.map((slide, i) => {
                  return (
                    <div
                      className={
                        this.state.isAnimation
                          ? "slider-card active"
                          : "slider-card"
                      }
                      key={i}
                    >
                      <SliderCard name={slide.name} url={slide.url} />
                    </div>
                  );
                })}
              </div>

              <NextButton handleNext={this.handleNext} />

              <NavDots current={this.state.current} imagesArr={imagesArr} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
