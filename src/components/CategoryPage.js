import React from 'react';
import Party from './Party';
import { connect } from 'react-redux';

class CategoryPage extends React.Component {
  render() {
    let id = this.props.match.params.id;
    let name = this.props.categories.find((el) => el.id === +id);
    let cat = this.props.categories[+id];
    let my = this.props.parties.filter((el) => el.organizer === this.props.currentUser.login);
    return (
        <div className="categorypage">

                <h1>
                  {((id === 'actual') && 'Parties I`ll Go') ||
                  ((id === 'my') && 'My Parties') ||
                  ((+id === name.id) && name.name) }
                </h1>
                {((id === 'actual') && (this.props.currentUser.parties.map((el, i) => {
                    return <Party key={i} {...this.props} id={el} />
                }))) ||
                ((id === 'my') && (my.map((el, i) => {
                    return <Party key={i} {...this.props} id={el.id}/>
                }))) ||
                ((+id === name.id) && (cat.parties.map((el, i) => {
                    return <Party key={i} {...this.props} id={el} />
                })))}
                <button className='submit'>{(id === 'my') && 'ADD PARTY'}</button> 
               
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

export default connect(mapStateToProps)(CategoryPage);