import { oauth2BaseUrl, clientId, redirectUrl, scope } from './config';

export function redirectToLogin() {
    const authUrl = 
    // Base URL 
    `${oauth2BaseUrl}/authorize?` +
    // Client ID
    `client_id=${encodeURIComponent(clientId)}` +
    // Pre-configured redirect URL
    `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
    // Grant type
    `&response_type=code` +
    // Scope defined on line 2
    `&scope=${encodeURIComponent(scope)}`;

    // Browser redirects to OAuth2 / Authorize page
    console.log(authUrl);
    window.location = authUrl;
}