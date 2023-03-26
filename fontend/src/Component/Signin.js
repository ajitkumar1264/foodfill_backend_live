import React, { useState } from "react";
import { auth } from "./config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./../index.css";
function Signin() {
  const nav = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const googlesign = async () => {
    const provider = await new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        nav("/");
        alert("success fully login");
      })
      .catch((error) => alert(error));
  };

  const verify = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        nav("/");
        alert("successfully login");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const signout = () => {
    signOut(auth)
      .then(() => {
        alert("successfully log out");
        nav("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <section className="pop-sec">
        <div className="content pop">
          <div>
            <div className="wrap">
              <h1>
                Sign <span className="red">Up</span>
              </h1>
              <div className="input-field">
                <input
                  placeholder="Email"
                  className="validate"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="input-field">
                <input
                  placeholder="Password"
                  className="validate"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="btn btn-g" onClick={verify}>
                Sign Up
              </div>
              <div className="btn btn-g" onClick={signout}>
                Sign Out
              </div>
              <p>
                Don't have an account? Than Login with{" "}
                <a href="/signup.html">Google</a>
              </p>

              <div className="google-btn" onClick={googlesign}>
                <div className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  />
                </div>
                <p className="btn-text">
                  <b>Sign in with google</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
