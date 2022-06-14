import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify, graphqlOperation, API } from "aws-amplify";
import { Home } from "./views/Home/Home";
import { Login } from "./views/Login/Login";
import "./styles.css";
import { createGuest } from "./graphql/mutations";

import awsExports from "./aws-exports";
import React from "react";
Amplify.configure(awsExports);

async function createNewGuest() {
    const guest = {
        firstName: "Test1",
        lastName: "Test1",
        signedUpBy: 'admin',
        foodPreferences: 'Glutenfree',
        attendingFriday: true,
        attendingSaturday: true,
        attendingSunday: false,
    };

    return API.graphql(graphqlOperation(createGuest, { input: guest }));
}


export default function App() {
    const { user } = useAuthenticator();

    if (user) {
        return <Home />;
    }

    return <Login />;
}
