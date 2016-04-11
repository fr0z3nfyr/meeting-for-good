import React from "react";
import DefaultLayout from "./layouts/default";

export default class Login extends React.Component {
    render(){
        return (
            <DefaultLayout title="Login | Lets Meet">
                <div className="med-card">
                    <div className="card">
                        <div className="card-content">
                            <h4 className="center">Login</h4>
                            <div className="input-field">
                                <input placeholder="Username" id="first_name" type="text" className="validate" />
                            </div>
                            <div className="input-field">
                                <input placeholder="Password" id="last_name" type="text" className="validate" />
                            </div>
                            <div className="center">
                                <p><a className="waves-effect waves-light btn purple">Login</a></p>
                                <p>-or-</p>
                                <p><a className="waves-effect waves-light btn grey darken-2">Login with GitHub</a></p>
                                <p><a className="waves-effect waves-light btn blue darken-4">Login with Facebook</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}