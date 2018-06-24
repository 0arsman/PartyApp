import React from 'react';
import Friend from './Friend';

class Friends extends React.Component {
  render() {
    return (
        <div className="friends">
            
                <h1>My Friends</h1>
                {this.props.currentUser.friends.map((el, i) => {
                    return <Friend key={i} users={this.props.users} id={el} del={this.deleteClick} />
                })}
                
        </div>
    );
  }
}

export default Friends;