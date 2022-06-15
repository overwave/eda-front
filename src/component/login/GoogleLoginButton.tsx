import {useEffect, useRef, useState} from "react"
import {login} from "../../api/GoogleLogin";

export function GoogleLoginButton() {
    const buttonRef = useRef(null);

    const [googleAccounts, setGoogleAccounts] = useState<typeof google.accounts>();

    const timerHandle = setInterval(() => {
        if (window?.google?.accounts !== undefined) {
            setGoogleAccounts(window.google.accounts);
            clearInterval(timerHandle);
        }
    }, 100);

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    useEffect(() => {
        if (googleAccounts === undefined) {
            return;
        }

        function handleCredentialResponse(response: { credential: string }) {
            login(response.credential)
                .then((loginResponse) => {
                    localStorage.setItem("auth_token", loginResponse.token);
                    localStorage.setItem("profile_picture", loginResponse.user.pictureUrl);
                });
        }

        googleAccounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_API_CLIENT_ID!,
            callback: handleCredentialResponse,
            ux_mode: "popup"
        });
        googleAccounts.id.renderButton(
            buttonRef.current!,
            {type: 'standard', theme: "outline", size: "large"}
        );
        googleAccounts.id.prompt(() => {
        });

    }, [buttonRef, googleAccounts]);

    return <div ref={buttonRef}>Login with google</div>;
}