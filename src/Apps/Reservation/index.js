import React, { Component } from 'react';

// 여러 Input 제어하기
class Reservation extends Component {
  state = {
    comments: 'Have a nice day!',
    isGoing: true,
    numberOfGuests: 2,
    when: 'afternoon',
    when2: 'evening'
  };

  handleInputChange = e => {
    const {
      target,
      target: { name, type }
    } = e;
    const value = type === 'checkbox' ? target.checked : target.value;

    console.log(name, value, type);

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
    const { comments, isGoing, numberOfGuests, when, when2 } = this.state;
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
          <select name="when" value={when} onChange={handleInputChange}>
            <option value="morning">Morning</option>
            <option value="afternoon">Aternoon</option>
            <option value="evening">Evening</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Moning:
          <input
            type="radio"
            name="when2"
            value="morning"
            checked={when2 === 'morning'}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Afternoon:
          <input
            type="radio"
            name="when2"
            value="afternoon"
            checked={when2 === 'afternoon'}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Evening:
          <input
            type="radio"
            name="when2"
            value="evening"
            checked={when2 === 'evening'}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Reservation;
