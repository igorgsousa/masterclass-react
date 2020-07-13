export function authenticate(data){
    
    let ret = false;

    if(data.username === "javalee" && data.password === "1234"){
        let user = {
            name : data.username,
            token :  data.username+data.password
        };
        localStorage.setItem("user", JSON.stringify(user));
        ret = true;
    }

    return ret;
}

export function getLoggedUser(){
    return !!localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")):undefined;
}

export function logout(){
    localStorage.removeItem("user");
}

export function isAuthenticated(){  
    return !!getLoggedUser();
}


