"use client";

import { useGoogleLoginMutation } from '@/redux/services/authApiSlice';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useCallback } from 'react';
import { toast } from 'sonner';

type GoogleCredentialResponse = {
  credential?: string;
  select_by?: string;
  clientId?: string;
};

declare global {
    interface Window {
        google?: {
            accounts: {
                id: {
                    initialize: (config: { client_id: string; callback: (response: GoogleCredentialResponse) => void; auto_select?: boolean; ux_mode?: 'popup' | 'redirect'; }) => void;
                    renderButton: (parentElement: HTMLElement, options: Record<string, unknown>) => void;
                    prompt: (momentNotification?: (notification: unknown) => void) => void;
                };
            };
        };
        handleGoogleCredentialResponse?: (response: GoogleCredentialResponse) => void;
    }
}

const GoogleLoginButton = () => {
    const router = useRouter();
    const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const [googleLogin] = useGoogleLoginMutation();
    const buttonDivRef = useRef<HTMLDivElement>(null);
    const scriptLoaded = useRef(false);

    const handleGoogleSignInSuccess = useCallback(async (idToken: string) => {
        try {
            const result = await googleLogin({ idToken }).unwrap();
            console.log("Google Sign-In successful:", result);
            toast.success("Successfully signed in with Google!");
            router.push('/my-shelf');
        } catch (error) {
            console.error("Google Sign-In API call failed:", error);
        }
    }, [googleLogin, router]);

    useEffect(() => {
        window.handleGoogleCredentialResponse = (response: GoogleCredentialResponse) => {
            if (response.credential) {
                handleGoogleSignInSuccess(response.credential);
            } else {
                console.error("Google Sign-In error: No credential returned.", response);
            }
        };

        const loadScriptAndInitialize = () => {
            if (document.getElementById('google-gsi-script')) {
                initializeButton();
                return;
            }

            const script = document.createElement('script');
            script.id = 'google-gsi-script';
            script.src = 'https://accounts.google.com/gsi/client';
            script.async = true;
            script.defer = true;
            script.onload = () => {
                scriptLoaded.current = true;
                initializeButton();
            };
            script.onerror = (error: string | Event) => {
                console.error("Failed to load Google GSI script.", error);
            };
            document.head.appendChild(script);
        };

        const initializeButton = () => {
            if (!window.google || !window.google.accounts || !window.google.accounts.id) {
                if (scriptLoaded.current) {
                    setTimeout(initializeButton, 150);
                }
                return;
            }

            if (!buttonDivRef.current) {
                return;
            }

            try {
                window.google.accounts.id.initialize({
                    client_id: googleClientId!,
                    callback: window.handleGoogleCredentialResponse!,
                });
                window.google.accounts.id.renderButton(
                    buttonDivRef.current,
                    {
                        theme: 'outline',
                        size: 'large',
                        text: 'signin_with',
                        shape: 'rectangular',
                        logo_alignment: 'left',
                        width: 200,
                    }
                );
            } catch (e) {
                console.error("Error initializing Google Sign-In button:", e);
            }
        };

        if (!googleClientId) {
            console.error("Google Client ID is missing for GoogleLoginButton.");
            return;
        }

        loadScriptAndInitialize();

        return () => {
            delete window.handleGoogleCredentialResponse;
        };
    }, [googleClientId, handleGoogleSignInSuccess]);

    if (!googleClientId) {
        return <p className="text-sm text-red-500 text-center">Google Sign-In is not configured (missing Client ID).</p>;
    }

    return <div ref={buttonDivRef} className="w-full flex justify-center"></div>;
};

export default GoogleLoginButton;