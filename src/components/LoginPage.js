import React from 'react';

class LoginPage extends React.Component {
  render() {
    return (
        <div className="loginpage">
            <form className='loginform'>
                <h1>Login</h1>
                <input className='login' type='text' name='login' placeholder='Login'/>           
                <input className='pass' type='password' name='password' placeholder='Password'/>     
                <button className='submit'>SUBMIT</button> 
            </form>     
        </div>
    );
  }
}

export default LoginPage;