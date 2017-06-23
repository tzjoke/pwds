let state1 = {
    pwds: [
        {
            id: 1,
            desc: 'A',
            site: 'A.com',
            acc: 'X',
            pwd: 'Y'
        },{
            id: 2,
            desc: 'AA',
            site: 'AA.com',
            acc: 'X',
            pwd: 'Y'
        }
    ],
    cri: 'A'
}


let action1 = {type: 'ADD', id: 3, desc: 'B', site: 'B.com', acc: 'M', pwd: 'N'}
let action2 = {type: 'DEL', id: 1}
let action3 = {type: 'ENQ', cri: 'A'}
let action4 = {type: 'MOD', id:2, desc: 'AA', site: 'AA.com', acc: 'M', pwd: 'N'}


function criteriaFilter(state='', action){
    if(action.type === 'ENQ'){
        return action.cri;
    }
    return state;
}

function pwds(state=[], action){
    switch (action.type){
        case 'ADD':
            return state.concat({
                id: action.id,
                desc: action.desc,
                site: action.site,
                acc: action.acc,
                pwd: action.pwd
            })
        case 'DEL':
            let inx =  state.findIndex(val => val.id === action.id)
            state.splice(inx, 1);
            return state;
        case 'MOD':
            return state.map(pwd =>
                pwd.id === action.id ?
                    {
                        id: action.id,
                        desc: action.desc,
                        site: action.site,
                        acc: action.acc,
                        pwd: action.pwd
                    } : pwd
            )
        default :
            return state
    }
}


function pwdAPP(state={}, action){
    return {
        pwds: pwds(state.pwds, action),
        desc: criteriaFilter(state.cri, action)
    }
}