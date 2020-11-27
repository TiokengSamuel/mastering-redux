export const bookReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BOOk':
        return [...state, {
            title: action.book.title,
            author: action.
        }]
    }
}