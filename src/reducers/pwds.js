import update from 'immutability-helper';

const pwds = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: action.id,
                    desc: action.desc,
                    site: action.site,
                    acc: action.acc,
                    pwd: action.pwd
                }
            ]
        case 'MOD':
            return state.map(pwd =>
                (pwd.id === action.id) ?
                    {
                        ...state,
                        desc: action.desc,
                        site: action.site,
                        acc: action.acc,
                        pwd: action.pwd
                    } : pwd
            )
        case 'DEL':
            const index = state.findIndex(val => val.id === action.id)
            return update(state, {$splice: [[index, ~index?1:0]]})
        default:
            return state
    }
}

export default pwds
