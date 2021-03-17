import React, {Component} from "react";
import {Jumbotron} from "reactstrap";
import ApiService from "../services/ApiService";


class Register extends Component{

constructor(props){
        super(props);
        this.state ={
            name: '',
            email: '',
            password: ''
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let u = {name: this.state.name, email: this.state.email, password: this.state.password};
        ApiService.addUser(u)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/login');
        console.log(u);

            });
    }
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
    render(){
        return(
        <div class="register">
        <div class="container">
        <Jumbotron>
            <div class="row">
                <div class="col-md-8 m-auto">
                    <h1 class="display-4 text-center">Sign Up</h1>
                    <p class="lead text-center">Create your Account</p>
                    <form action="create-profile.html">
                        <div class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="Name" name="name" value={this.state.name} onChange={this.onChange} required />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-lg" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange}/>

                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control form-control-lg" placeholder="Confirm Password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.onChange}/>
                        </div>
                        {/* <div class="dropdown">
                            <label for="sel1">Select list:</label>
                            <select class="form-control" id="sel1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div> */}
                        {/* <input type="submit" onClick={this.saveUser} class="btn btn-info btn-block mt-4" /> */}
                        <button className="btn btn-success" onClick={this.saveUser}>Submit</button>
                    </form>
                </div>
            </div>
            </Jumbotron>
        </div>
    </div>
)
        }
    }

export default Register;