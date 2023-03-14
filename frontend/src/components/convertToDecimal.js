function convertToDecimal(n){
    // sanity check - is it exponential number
    const str = n.toString();
    if (str.indexOf('e') !== -1) {
        const exponent = parseInt(str.split('-')[1], 10);
        // Unfortunately I can not return 1e-8 as 0.00000001, because even if I call parseFloat() on it,
        // it will still return the exponential representation
        // So I have to use .toFixed()
        const result = n.toFixed(exponent);
        return result;
    } else {
        return n;
    }
}

export default convertToDecimal;