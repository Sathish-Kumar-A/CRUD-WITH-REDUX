let users = [{
        name: "sathish",
        age: 22,
        city: "Chennai",
        role: "developer",
        id: 0
    },
    {
        name: "kumar",
        age: 22,
        city: "Coimbatore",
        role: "software engineer",
        id: 1
    }, {
        name: "rahul",
        age: 23,
        city: "salem",
        role: "React Js developer",
        id: 2
    }, {
        name: "kannan",
        age: 27,
        city: "Tirunelveli",
        role: "Angular developer",
        id: 3
    }, {
        name: "sheik",
        age: 22,
        city: "Madurai",
        role: "Buisness Analyst",
        id: 4
    },
]

const crudReducer = (state = users, action) => {
    switch (action.type) {
        case 'CREATE_USER': {
            return [...state, action.payload]
        }
        case 'DELETE_USER': {
            state = state.filter(user => user.id !== action.payload)
            return state;
        }
        case "UPDATE_USER": {
            state = state.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                }
                return user
            })
            return state;
        }
        default: {
            return state
        }
    }
}

export {
    crudReducer
};