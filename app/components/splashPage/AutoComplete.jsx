import React from 'react';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    // send to backend
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="City"
          value={this.state.city}
          onChange={e => this.setState({ city: e.target.value })}
        />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default AutoComplete;
