import "./App.css";
import { auth, logOut, signInWithGoogle } from "./Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { async } from "@firebase/util";
import { useState } from "react";

function App() {
  const [userActive, setUserActive] = useState();
  auth.onAuthStateChanged((user) => {
    setUserActive(user);
    console.log(userActive);
  });
  return (
    <div className="App">
      <button onClick={signInWithGoogle}> Sign In With Google </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} />
      <button onClick={logOut}>Sign Out</button>
      <button
        className="btn"
        onClick={() => {
          if (!userActive) {
            alert("sign in please");
          } else {
            alert("well done, you completed the task");
          }
        }}
      >
        can you click?
      </button>
    </div>
  );
}

export default App;
