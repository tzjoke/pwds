const criteria = (state='', action) => {
    switch (action.type){
        case 'ENQ':
            return action.cri
        default:
            return state
    }
}

export default criteria