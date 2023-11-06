const tokenHelpers = {
    isLoggedIn() {
        const token = localStorage.getItem('token');
        return !!token;
    }
}

export default tokenHelpers