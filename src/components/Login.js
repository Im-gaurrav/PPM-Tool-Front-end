import React, {Component} from "react";
import {Jumbotron} from "reactstrap";
class Login extends Component{
    render(){
        return(
        <div className="login">
        <div className="container">
            <Jumbotron>
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Log In</h1>
                    <form action="Dashboard">
                        <div className="form-group">
                            <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" />
                        </div>
                        <input type="submit" className="btn btn-info btn-block mt-4" />
                    </form>
                </div>
            </div>
            </Jumbotron>
        </div>
    </div>
)
        }
    }

export default Login;