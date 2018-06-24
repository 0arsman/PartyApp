import React from 'react';
import { connect } from 'react-redux';

class PartyPage extends React.Component {
  render() {
    let item = this.props.parties.find((el) => el.id === +this.props.match.params.id);
    let mem = item.members; 
    return (
        <div className="userpage">
          <div className="page">
                <h1>{item.name}</h1>
                <h2>{item.status}</h2>
                <p className='discription'>{item.discr}</p>
                <span>Orgsnizer: {item.organizer}</span>
                <span>Members: {this.props.users[mem[mem.length-1]].login}, {this.props.users[mem[mem.length-2]].login}...</span>
                <span>Cost: {item.cost}</span>
                <button className='submit'>Will Go</button> 
          </div>       
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    parties: state.parties,
    categories: state.categories,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(PartyPage);