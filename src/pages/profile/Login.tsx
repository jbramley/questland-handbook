import React from "react";
import {GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";
import {useCookies} from 'react-cookie';
import {qlApiUrl} from "../../config";


export const Login: React.FC<{
    onLoginSuccess?(res: GoogleLoginResponse | GoogleLoginResponseOffline): void,
    onLoginFailure?(error: any): void
}> = ({onLoginSuccess, onLoginFailure}) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const oauth2ClientId = process.env.REACT_APP_OAUTH2_CLIENT_ID || '';

    const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
        if (onLoginSuccess) {
            onLoginSuccess(res);
        }
        refreshTokenSetup(res);
    };

    const onFailure = (error: any): void => {
        removeCookie('token');
        if (onLoginFailure) {
            onLoginFailure(error);
        }
    };

    const setupUserProfile = (idToken: string) => {
        const requestInit: RequestInit = {
            method: 'POST',
            headers: {
                'id_token': idToken,
            }
        };
        fetch(qlApiUrl + 'profile', requestInit);
    };

    const refreshTokenSetup = (res: any) => {
        // Timing to renew access token
        let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
        const idToken = res.getAuthResponse().id_token;
        setCookie('token', idToken);
        setupUserProfile(idToken);

        const refreshToken = async () => {
            const newAuthRes = await res.reloadAuthResponse();
            refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;

            // Setup the other timer after the first one
            setTimeout(refreshToken, refreshTiming);
        };

        //Setup first refresh timer
        setTimeout(refreshToken, refreshTiming);
    };

    return (
        <GoogleLogin
            clientId={oauth2ClientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    );
};