import React from "react";

const Settings = ({
  isAutoplay,
  direction,
  time,
  noOfSlides,
  handleAutoplay,
  handleChange,
}) => {
  return (
    <form>
      <div className="form-row">
        <div className="form-group col-6 col-sm-3">
          <label htmlFor="isAutoplay">Autopaly</label>
          <select
            id="isAutoplay"
            className="form-control"
            name="isAutoplay"
            value={isAutoplay}
            onChange={handleAutoplay}
          >
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
        <div className="form-group col-6 col-sm-3">
          <label htmlFor="direction">Direction</label>
          <select
            id="direction"
            className="form-control"
            name="direction"
            value={direction}
            onChange={handleChange}
            disabled={isAutoplay ? false : true}
          >
            <option value="RIGHT">Right</option>
            <option value="LEFT">Left</option>
          </select>
        </div>
        <div className="form-group col-6 col-sm-3">
          <label htmlFor="time">Sliding Time</label>
          <select
            id="time"
            className="form-control"
            name="time"
            value={time}
            onChange={handleChange}
          >
            <option value={1000}>1 second</option>
            <option value={2000}>2 seconds</option>
            <option value={3000}>3 seconds</option>
            <option value={4000}>4 seconds</option>
            <option value={5000}>5 seconds</option>
            <option value={6000}>6 seconds</option>
          </select>
        </div>
        <div className="form-group col-6 col-sm-3">
          <label htmlFor="noOfSlides">No of Slides</label>
          <select
            id="noOfSlides"
            className="form-control"
            name="noOfSlides"
            value={noOfSlides}
            onChange={handleChange}
          >
            <option value={1}>1 slide</option>
            <option value={2}>2 slides</option>
            <option value={3}>3 slides</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Settings;
