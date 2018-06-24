import React from 'react';
import { connect } from 'react-redux';

class UserPage extends React.Component {
  render() {
    let str;
    let curUser;
    if (this.props.user === 'current') {
        curUser = this.props.currentUser;
    } else {
        curUser = this.props.users[this.props.match.params.userid];
        str = (this.props.currentUser.friends.includes(+this.props.match.params.userid)) ? 'UNFOLLOW' : 'FOLLOW';
        console.log()
    }

    return (
        <div className="userpage">
            <div className='uspage'>
                <h1>{curUser.login}</h1>
                <p>{curUser.friends.length+' friends'}</p>
                <p>{curUser.parties.length+' parties'}</p>
                <h2>{curUser.status}</h2>
                <p className='discription'>{curUser.discr}</p>
                <button className='submit'>
                    {(this.props.user === 'current') ? 'EDIT' : str}
                </button> 
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

export default connect(mapStateToProps)(UserPage);