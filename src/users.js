const img = "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
let users = [
    { name: "sathish", age: 22, city: "Chennai", role: "developer",id:0,img:img },
    {
        name: "kumar",
        age: 22,
        city: "Chennai",
        role: "developer",
        id: 1,
        img:img
    }, {
        name: "rahul",
        age: 22,
        city: "Chennai",
        role: "developer",
        id:2,
        img:img
    }, {
        name: "kannan",
        age: 22,
        city: "Chennai",
        role: "developer",
        id:3,
        img:img
    }, {
        name: "sheik",
        age: 22,
        city: "Chennai",
        role: "developer",
        id:4,
        img:img
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

export { crudReducer };