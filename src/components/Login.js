
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {

    
     
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


<Link to="/tweet">Login</Link>



   </div>
    </div>
    </div>

    </form>
    
    </div>
    );
    }




export default Login;






