module.exports = function reverse (n) {
    let result = '' + Math.abs(n);    
    result = result.split('').reverse().join('');  
    result = +result 
    return result;
}
