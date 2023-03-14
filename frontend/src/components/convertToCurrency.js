function convertToCurrency (n) {
    return(n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
}
export default convertToCurrency;