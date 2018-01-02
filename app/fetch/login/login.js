import post from '../post';

export function getLoginData(params) {
    // console.log("进入logindata")
    const result = post('/api/v1/login', params);
    return result;
}