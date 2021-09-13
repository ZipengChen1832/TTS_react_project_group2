import { render } from '@testing-library/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

// https://github.com/john-smilga/react-advanced-2020
// https://reactrouter.com/web/guides/quick-start



function Login() {

    let history = useHistory();

    render(

    )

    
    
    return (
        <div className="container">
    <form className="form-signin">
        <h1 className="h3 mb-2 font-weight-normal">Sign In</h1>
        <div className="row">
        <div className="col">
        <input type="text" name="username"  placeholder="Enter Username"></input>
        
        </div>
</div>
        <div className="row">
        <div className="col">
        
<input type="text" name="password" placeholder="Enter Password"></input>

<div>

<button onClick={() => {history.push("/tweet");}}>{" "}Login{" "}</button>
   </div>
    </div>
    </div>

    </form>
    
    </div>
    );
    }




export default Login;






