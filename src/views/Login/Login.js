import { Authenticator, Flex, Grid, Image, Text, useTheme, View } from "@aws-amplify/ui-react";
import backgroundImage from '../../images/background3.jpg';

import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignInHeader } from "./SignInHeader";
import { SignInFooter } from "./SignInFooter";
import flowers from '../../images/flowers.svg'
import React from "react";

const components = {
    Header,
    SignIn: {
        Header: SignInHeader,
        Footer: SignInFooter
    },
    Footer
};

export function Login() {
    const { tokens } = useTheme();

    return (
        <View height="100vh" position="relative">
            <View left="10px" right="10px" bottom="0" height="100vh" position="absolute" display="flex" justifyContent="center" alignItems="center">

            <View position="absolute" zIndex={2}>
                <Authenticator components={components}>
                    {({ signOut, user }) => (
                        <main>
                            <h1>Hello {user.username}</h1>
                            <button onClick={signOut}>Sign out</button>
                        </main>
                    )}
                </Authenticator>
            </View>
            </View>
            <Image
                src={backgroundImage}
                width="100%"
                height="100vh"
                objectFit="cover"
            />
        </View>
    );
}
