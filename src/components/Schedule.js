import React, { Component } from "react";

class Schedule extends Component {
  render() {
    return (
      <div>
        <p className="Forms">
          Stream times not guranteed but will try to stick to schedule as best as possible
        </p>
        <ul className="Ul">
          <li>
            Monday: No Stream
          </li>
          <li>
            Tuesday: 7 pm to 10ish pm
          </li>
          <li>
            Wednesday: No Stream
          </li>
          <li>
            Thursday: 7 pm to 10ish pm
          </li>
          <li>
            Friday: 7 pm to 10ish pm
          </li>
          <li>
            Saturday: No Stream
          </li>
          <li>
            Sunday: 9 pm to 12 am
          </li>
        </ul>
      </div>
    );
  }
}
export default Schedule;