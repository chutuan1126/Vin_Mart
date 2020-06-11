export const Auth = {
    isAuthenticated: false,
    authenticate(cb) {
        Auth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        Auth.isAuthenticated = false;
        sessionStorage.clear();
        setTimeout(cb, 100);
    }
};