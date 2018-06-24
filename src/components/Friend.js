import React from 'react';

class Friend extends React.Component {
  render() {
    let id = this.props.users[this.props.id];
    return (
        <div className="friend">
            <h1>{id.login}</h1>
            <p>{id.parties.length+' parties'}</p>
            <button>Remove</button>
        </div>
    );
  }
}

export default Friend;