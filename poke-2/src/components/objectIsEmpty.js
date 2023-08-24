function objectIsEmpty(obj) {
    return Object.keys(obj).length === 0 || obj === null
}

export default objectIsEmpty