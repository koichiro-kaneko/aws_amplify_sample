import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"; // 認証画面用のCSS
import { Amplify } from "@aws-amplify/core";
import { Auth } from "@aws-amplify/auth";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function App({ signOut, user }: any) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello React app with AWS</h2>
        {user ? (
          <>
            <h3>私は権限を持っています:{user.username}</h3>
            <button onClick={signOut}>サインアウト</button>
          </>
        ) : (
          <h3>権限がありません</h3>
        )}
      </header>
    </div>
  );
}
export default withAuthenticator(App);
