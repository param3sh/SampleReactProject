import React from "react";
import Card from "../../components/Card/Card";


interface LoginProps {}

interface LoginState {
    userName: string;
    password: string;
}

class Login extends React.Component<LoginProps, LoginState>  {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event:any) => {
        alert(`User ${this.state.userName} logged in`);
        event.preventDefault();
    }

    render() : JSX.Element {
        return(
            <div className="login-container">
                <div className="page">
                    <Card className="login-card">
                        <div className="login-boxes">
                            <form onSubmit={this.handleSubmit}>
                                <label className="login-label">
                                    <input className="login-box"  type="text" name="userName" placeholder="UserName"/>
                                </label>
                                <br/>
                                <label className="login-label">
                                    <input className="login-box" type="password" name="password" placeholder="Password"/>
                                </label>
                                <br/>
                                <input className="login-button" type="submit" value="submit"/>
                            </form>
                        </div>
                    </Card>                    
                </div>
            </div>
        );
    }
}

export default Login;