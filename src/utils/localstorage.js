function getUser() {
    const data = localStorage.getItem("linkr");
    return data ? JSON.parse(data) : null;
};

function setUser(data) {
    return localStorage.setItem("linkr", JSON.stringify(data));
};

export {getUser, setUser};
