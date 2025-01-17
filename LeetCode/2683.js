// Link: https://leetcode.com/problems/neighboring-bitwise-xor

var doesValidArrayExist = function(derived) {
    let o = [0];
    for(let i = 0; i < derived.length; i++) {
        o.push(derived[i] ^ o[i]);
    }

    const cz = o[0] === o[o.length - 1];

    o = [1];
    for(let i = 0; i < derived.length; i++) {
        o.push(derived[i] ^ o[i]);
    }

    const co = o[0] === o[o.length - 1];

    return cz || co;
};
