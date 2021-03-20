export const generateInitials = (name:string = "") => {
    var names = name.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};

export const saveToken = (token:string) => {
    try{
        window.localStorage.setItem("t0k3n", token)
    }catch(e){
        console.error(e)
    }
};


export const getToken = () => {
    try{
       return  window.localStorage.getItem("t0k3n")
    }catch(e) {
        console.error(e);
        return null
    }
};