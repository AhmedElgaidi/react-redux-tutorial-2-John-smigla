# Notes:
1) Redux can work with any UI library/ framework or even vanilla javascript.
2) redux is responsible for storing our data and giving us method for updating it.
3) react-redux is responsible for connecting our react app with the redux store.


- Store: stores data
- Reducer: function used in updating the store data.
- Action: type of function you want to do (increase, decrease, etc...), It's common to write them in upper case and in form of variables (const) not just strings to avoid mis-spelling (typos).
- Action examples: DECREASE, INCREASE, REMOVE, CLEAR_CART, GET_TOTAL, GET_AMOUNT, etc...

## React-redux;
We look about two things:
1) Provider => this wraps App component
2) connect => used in components => we use it in each component we want to access the store and update it.
We pass two parameters (mapStateToProps, mapStateToProps), But what if we don't have functionality? as we just want to display the amount of cart items in the navbar? we just pass the mapStateToProps and the vice versa if we only do some functions and we don't want to display the state, we write as follows connect(null, mapStateToProps)

So, what are these params? from their name, we are passing the state to the props and the dispatch to props ,so we can use them. (we can name them whaterver we want, but it's a community standard to use these names)

What if we have really big store object? do we really pass the whole object to every component? of course not, we can destructure it as follows:
const mapStateToProps = state => {
    return {
        amount: state.amount // now we are just passing the amount property from the store/ state to the Navbar component
    }
}

// And that's really it what you really want!!!

- The dispatch() method is found by default in the store and passed by default also as props, so we just need to destrucure it as any other props in our Component and use it (dispatch(ACTION)) and actually we can pass another params called payload, which is optional not just as ACTION you have to pass, but it's really powerfull and useful

let object = {
    id: 1,
    name: 'laptop',
    url: 'sdfsdf'
}
- const mapDispatchToProps = (dispatch, ownProps) => {
    // here we add second params (ownProps) so, we can access any property of the passed object and pass it to the Reducer function in the form of action.payload object
    // let's destructure it.
    const { id } = ownProps;
    
    return {
        remove: () => dispatch({
            type: REMOVE,
            payload: {
                id // now we have the id property(and it's value) in the component and we can remove this cart item by it (unique property)
            }
        })
    }

}