const initialState = {
    favoriteList: [
        {
            title: 'Margherita',
            description: 'Tomato, mozzarella, basil',
            price: 5
        },
        {
            title: 'Margherita',
            description: 'Tomato, mozzarella, basil',
            price: 5
        },
        {
            title: 'Margherita',
            description: 'Tomato, mozzarella, basil',
            price: 5
        },
        {
            title: 'Margherita',
            description: 'Tomato, mozzarella, basil',
            price: 5
        },
        {
            title: 'Margherita',
            description: 'Tomato, mozzarella, basil',
            price: 5
        },
    ],
    extrasList: [
        {
            title: 'French Fries',
            description: 'Tomato, mozzarella, basil',
            price: 5
        },
        {
            title: 'Green Salad',
            description: 'Tomato, mozzarella, basil',
            price: 5
        },
        {
            title: 'Tomato Bruschetta',
            description: 'Tomato, mozzarella, basil',
            price: 5
        }
    ]
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'GET_FAVORITE_LIST':
            return {
                ...state,
                favoriteList: payload,
            };
        default:
            return state;
    }
}
