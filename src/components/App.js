import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import LoginPage from '../components/LoginPage';
import UserPage from '../components/UserPage';
import Categories from '../components/Categories';
import CategoryPage from '../components/CategoryPage';
import PartyPage from '../components/PartyPage';
import CreateParty from '../components/CreateParty';
import Friends from '../components/Friends'; 


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path='/' exact component={LoginPage} />
            <Route path='/profile'  render = {() => <UserPage user={'current'}/>} />
            <Route path='/user/:userid'  component = {UserPage} />
            <Route path='/categories/' render = {() => <Categories {...this.props} />} />
            <Route path='/parties/:id'  component = {CategoryPage} />
            <Route path='/party/:id'  component = {PartyPage} /> 
            <Route path='/createparty'  render = {() => <CreateParty {...this.props} />} />
            <Route path='/myfriends/' render = {() => <Friends {...this.props} />} />
          </Switch>
        </div>
      </BrowserRouter>
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

/* const mapDispatchToProps = (dispatch) => {
  return {
      sayLal: bindActionCreators(sayLal, dispatch)
  }
} */

export default connect(mapStateToProps)(App);
