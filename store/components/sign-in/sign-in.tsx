import { useState } from 'react';
import { useRouter } from 'next/router';
import { SignInButton } from '@clerk/clerk-react';
import { UserCircle } from 'lucide-react';

const LoginPage = () => {
    return (
        <div>
            <SignInButton>
                <UserCircle size={20} color="white" />
            </SignInButton>
        </div>
    );
};

export default LoginPage;