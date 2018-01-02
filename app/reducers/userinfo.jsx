export default function userInfo(state={},action) {
    console.log("1111111111",action.type);
    switch (action.type) {
        case "LOGIN":
            return action.data;
            break;
    
        default:
            return state;
            break;
    }
}