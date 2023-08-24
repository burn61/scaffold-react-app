function isKeyExists(obj, key) {
    if (typeof obj === 'object' && obj !== null) {
        return key in obj
    }
    return false
}

export default isKeyExists