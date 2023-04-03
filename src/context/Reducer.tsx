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

    if (action.type === "GET_SERVICES") {
        return {
            ...state,
            services: action.payload,
        };
    }

    return state;
};

type Action = {
    type: "GET_SERVICES" | "ABOUT_UPDATE" | "HOME_UPDATE",
    payload: {
        name: string, 
        img: string
    }
}

type State = {
    name: string,
    img: string
}