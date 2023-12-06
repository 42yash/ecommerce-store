import { useState } from 'react';
import { useRouter } from 'next/router';
import { UserCircle } from 'lucide-react';
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";

const LoginPage = () => {
    return (
        <div>
            <SignedIn>
                {/* Mount the UserButton component */}
                <UserButton />
            </SignedIn>
            <SignedOut>
                {/* Signed out users get sign in button */}
                <SignInButton>
                    <UserCircle size={20} color="white" />
                </SignInButton>
            </SignedOut>
        </div>
    );
};

export default LoginPage;