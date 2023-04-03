export const reducer = (state: State, action: Action) => {
    if (action.type === "HOME_UPDATE") {
        return {
            ...state,
            name: action.payload.name,
            img: action.payload.img,
        };
    }

    if (action.type === "ABOUT_UPDATE") {
        return {
            ...state,
            name: action.payload.name,
            img: action.payload.img,
        };
    }
    
    return state;
};

type Action = {
    type: "ABOUT_UPDATE" | "HOME_UPDATE",
    payload: {
        name: string, 
        img: string
    }
}

type State = {
    name: string,
    img: string
}