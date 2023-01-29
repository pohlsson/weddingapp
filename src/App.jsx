import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { Home } from "./views/Home/Home";
import { Login } from "./views/Login/Login";
import "./styles.css";

import awsExports from "./aws-exports";
import React from "react";

Amplify.configure(awsExports);

export default function App() {
  const { user } = useAuthenticator();
  document.title = "pp2023 - Patrik och Paulines bröllop";

  if (user) {
    return <Home />;
  }
  return <Login />;
}
