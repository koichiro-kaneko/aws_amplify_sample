import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"; // 認証画面用のCSS
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

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
Auth.configure(awsExports);
export default withAuthenticator(App);
