import React, { Component } from 'react';

// 여러 Input 제어하기
class Reservation extends Component {
  state = {
    comments: 'Have a nice day!',
    isGoing: true,
    numberOfGuests: 2,
    selected: 'afternoon'
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    for (let prop in this.state) {
      console.log(`${prop}: ${this.state[prop]}`);
    }
  };

  render() {
    const { comments, isGoing, numberOfGuests, selected } = this.state;
    const { handleInputChange, handleSubmit } = this;

    return (
      <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc' }}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={isGoing}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of Guests:
          <input
            name="numberOfGuests"
            type="number"
            value={numberOfGuests}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Comments:
          <textarea
            name="comments"
            value={comments}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          When:
          <select name="selected" value={selected} onChange={handleInputChange}>
            <option value="morning">Morning</option>
            <option value="afternoon">Aternoon</option>
            <option value="evening">Evening</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Reservation;
