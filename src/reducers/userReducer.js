
const initialState = {
    id: undefined,
    username: undefined
};

const userReducer = (state=initialState, action) => {
    switch (action.tpye) {
        case 'SIGN_UP':

            break;
        default:
            return state;
    }
}

export default userReducer;
