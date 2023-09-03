import { createContext, useContext, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const tokenUrl = baseUrl + "api/token/";

const AuthContext = createContext();

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("You forgot AuthProvider!");
  }
  return auth;
}

export function AuthProvider(props) {
  const [state, setState] = useState({
    tokens: null,
    user: null,
    login,
    logout,
    signup,
  });
  useEffect(() => {
    if (Cookies.get("token")) {
      const token = JSON.parse(Cookies.get("token"));
      console.log(token);
      const decodedAccess = jwt.decode(token.access);
      const newState = {
        tokens: token,
        user: {
          username: decodedAccess.username,
          email: decodedAccess.email,
          id: decodedAccess.user_id,
          location: decodedAccess.location,
          first_name: decodedAccess.first_name,
          last_name: decodedAccess.last_name,
        },
      };
      setState((prevState) => ({ ...prevState, ...newState }));
    }
  }, []);

  async function login(username, password) {
    // const response = await axios.post(tokenUrl, { username, password });

    const options = {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(tokenUrl, options);

    const data = await response.json();

    const decodedAccess = jwt.decode(data.access);

    const newState = {
      tokens: data,
      user: {
        username: decodedAccess.username,
        email: decodedAccess.email,
        id: decodedAccess.user_id,
        location: decodedAccess.location,
        first_name: decodedAccess.first_name,
        last_name: decodedAccess.last_name,
      },
    };
    // console.log(decodedAccess);

    setState((prevState) => ({ ...prevState, ...newState }));
    return data;
  }

  function logout() {
    const newState = {
      tokens: null,
      user: null,
    };
    setState((prevState) => ({ ...prevState, ...newState }));
    Cookies.remove("token");
  }

  async function signup(info) {
    const options = {
      method: "POST",
      body: JSON.stringify(info),
      headers: { "Content-Type": "application/json" },
    };
    await fetch(`${baseUrl}accounts/signup/`, options);
  }

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
