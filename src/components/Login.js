import React, { useContext } from "react";
import { signInWithGoogle } from "../firebase";
import { AuthContext } from "../AuthContext";

function Login() {
  const { user, login, logout } = useContext(AuthContext);
  console.log(user);
  console.log(login);
  console.log(logout);

  if (user) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Welcome, {user.displayName || user.email}</h2>
        <img
          src={user.photoURL}
          alt="User avatar"
          style={{ borderRadius: "50%", width: "80px", marginTop: "1rem" }}
        />
        <p style={{ marginTop: "1rem" }}>{user.email}</p>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Login Page</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default Login;
