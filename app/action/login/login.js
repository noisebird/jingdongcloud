export function saveLoginData(data) {
    console.log(data, "action ........");
    return {
        type: "LOGIN",
        data: data
    }
}