import React from 'react';

class Party extends React.Component {
  render() {
    let party = this.props.parties.find((el) => el.id === +this.props.id);
    return (
        <div className="party">
            <h1>{party.name}</h1>
            <p>{party.members.length+' | 13 friends'}</p>
            <h3>{'adress: '+party.adress}</h3>
            <h3>{'start time: '+party.time}</h3>
        </div>
    );
  }
}

export default Party;