import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppState, Auth0Provider } from '@auth0/auth0-react';

interface Auth0ProviderWithRouterProps {
    children: React.ReactNode;
}

const Auth0ProviderWithRouter: React.FC<Auth0ProviderWithRouterProps> = ({ children }) => {
    const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN!;
    const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID!;

    const navigate = useNavigate();

    const onRedirectCallback = (appState: AppState | undefined) => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithRouter;