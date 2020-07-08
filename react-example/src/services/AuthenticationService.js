export function authenticate(data){
    
    let ret = false;

    if(data.username === "javalee" && data.password === "1234"){
        localStorage.setItem("token", data.username+data.password);
        ret = true;
    }else{
        alert('Senha errada')
    }

    return ret;
}

export function isAuthenticated(){
    
    var token = localStorage.getItem("token");  

    return !!token;
}


