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
            <View left="0" right="50vw" bottom="0" height="100vh" position="absolute" display="flex" justifyContent="center" alignItems="center">

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

                    {/*<Image src={flowers} height="10em" position="absolute" top="15px" left="10px" transform="scaleX(-1) rotate(180deg)" />*/}
                    {/*<Image src={flowers} height="10em" position="absolute" top="15px" right="10px" transform="scaleX(-1) scaleY(-1)" />*/}
                    {/*<Image src={flowers} height="10em" position="absolute" bottom="20px" right="10px" transform="scaleX(-1)" />*/}
                    {/*<Image src={flowers} height="10em" position="absolute" bottom="20px" left="10px" />*/}

                    {/*<Text fontSize="6em" color="white" position="absolute" top="10vh" right="10vw">*/}
                    {/*    Patrik och Pauline*/}
                    {/*</Text>*/}
        </View>
    );
}
