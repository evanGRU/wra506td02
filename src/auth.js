const getToken = () => {
    return localStorage.getItem('token');
}

const getUsername = () => {
    return localStorage.getItem('username');
}

const isUserAuthenticated = () => {
    if (!getToken()) {
        window.location.replace('/login');
        return false;
    }
    return true;
}

const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    window.location.replace('/login');
}


export {
    getToken,
    getUsername,
    isUserAuthenticated,
    logOut
}

