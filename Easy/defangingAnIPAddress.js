/**
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.

    A defanged IP address replaces every period "." with "[.]".
    Example 1:

    Input: address = "1.1.1.1"
    Output: "1[.]1[.]1[.]1"
 */

 /**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.split('.').join('[.]')
};

//Naive approach
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let defangedAddress = '';
    
    for(let i = 0; i < address.length; i++) {
        let currentCharacter = address[i];
        if(currentCharacter == '.') {
            defangedAddress += '[.]';
        } else {
            defangedAddress += currentCharacter;
        }
    }
    return defangedAddress;
};