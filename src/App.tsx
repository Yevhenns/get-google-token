import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import "./App.css";
import { useState } from "react";

function App() {
  const [token, setToken] = useState<null | CredentialResponse>(null);
  return (
    <>
      <div className="btnWrapper">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            setToken(credentialResponse);
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
      {token && (
        <div className="tokenContainer">
          <p>Your google token:</p>
          <p>{token.credential}</p>
        </div>
      )}
    </>
  );
}

export default App;
