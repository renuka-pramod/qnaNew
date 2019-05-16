import React, { Component } from "react";
import Input from '../../Presentational/Input';
import Button from '../../Presentational/Button';
import './Login.css';
import Header from '../Header';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            isLogin: false
        };
    }

    // clearValidationErr(elm) {
    //     this.setState((prevState) => {
    //         let newArr = [];
    //         for (let err of prevState.errors) {
    //             if (elm != err.elm) {
    //                 newArr.push(err);
    //             }
    //         }
    //         return { errors: newArr };
    //     });
    // }

    // showValidationErr(elm, msg) {
    //     this.setState((prevState) => ({
    //         errors: [
    //             ...prevState.errors, {
    //                 elm,
    //                 msg
    //             }
    //         ]
    //     }));
    // }

    handleClick = (event) => {
        //event.preventDefault();
        // if (this.state.username == "") {
        //     this.showValidationErr("username", "Username Cannot be empty!");
        // }
        // if (this.state.password == "") {
        //     this.showValidationErr("password", "Password Cannot be empty!");
        // }
        console.log(this.state.isLogin)

        this.props.history.push({
            pathname: '/home',
            state: {isLogin: this.state.isLogin}
        });
    }

    handleUserNameChange = (e) => {
        this.setState({
            username: e.target.value
        });
        //this.clearValidationErr("username");
    }

    handlePassWordChange = (e) => {
        this.setState({
            password: e.target.value
        });
        // this.clearValidationErr("password");
    }
    render() {
        // let usernameErr = null,
        //     passwordErr = null;
        // for (let err of this.state.errors) {
        //     if (err.elm == "username") {
        //         usernameErr = err.msg;
        //     }
        //     if (err.elm == "password") {
        //         passwordErr = err.msg;
        //     }
        // }
        return (
            <div>
                <Header />
                <div className="login">
                    <form onSubmit={this.handleClick}>
                        <Input
                            placeholder="Username"
                            type="text"
                            handleChange={(e) => this.handleUserNameChange(e)}
                        />
                        {/* <small className="danger-error">{usernameErr
                        ? usernameErr
                        : ""}
                    </small> */}
                        <Input
                            placeholder="Password"
                            type="text"
                            handleChange={(e) => this.handlePassWordChange(e)}
                        />
                        {/* <small className="danger-error">{passwordErr
                        ? passwordErr
                        : ""}
                    </small> */}
                        <div className="btn-group float-right">
                            <Button
                                name="Reset"
                                className="secondary-button"
                                handleClick={this.reset}
                            />
                            <Button
                                handleClick={this.handleClick}
                                name="Submit"
                                className="primary-button"
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;