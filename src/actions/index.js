let nextPwdId = 0;

export const addPwd = (desc, site, acc, pwd) => ({
    type: 'ADD',
    id: nextPwdId++,
    desc,
    site,
    acc,
    pwd
})

export const delPwd = id => ({
    type: 'DEL',
    id: id
})

export const modPwd = (id, desc, site, acc, pwd) => ({
    type: 'MOD',
    id,
    desc,
    site,
    acc,
    pwd
})

export const enqPwd = cri => ({
    type: 'ENQ',
    cri
})