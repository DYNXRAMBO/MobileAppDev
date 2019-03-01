import React, { Component } from 'react';

class PasswordInput extends Component {

    //constructor
    constructor(props){
        super(props);

        //state
        this.state = {
            password: ''
        }

        //even handlers
        this.onPasswordChange = this.onPasswordChange.bind(this);        

    }

    onPasswordChange(event){
        var password = event.target.value;

        //this is lifting the state value to the parent
        this.props.onPasswordChange(password);

        this.setState( () => {
                return {
                    password
                }
            }
        );
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input className="form-control"
                       id="examplePassword1" 
                       onChange={this.onPasswordChange}
                       placeholder="password"
                       type="password"
                       value={this.state.password}  />
            </div>
        );
    };
}

export default PasswordInput;