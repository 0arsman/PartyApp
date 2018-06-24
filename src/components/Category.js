import React from 'react';

class Category extends React.Component {
  render() {
    let cat = this.props.categories[this.props.id];
    return (
        <div className="category">
            <h1>{cat.name}</h1>
            <p>{cat.parties.length+' parties'}</p>
            <h3>last active: <span>{this.props.parties[cat.parties[cat.parties.length-1]].organizer}</span></h3>
            <h3>new party: <span>{this.props.parties[cat.parties[cat.parties.length-1]].name}</span></h3>
        </div>
    );
  }
}

export default Category;