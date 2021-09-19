//封装取到senssionStorage的函数
export function parseInfo(){
    return JSON.parse(sessionStorage.getItem('userinfo'))
}

//取到token函数
export function getToken(){
    return parseInfo() ? parseInfo().token:''
}