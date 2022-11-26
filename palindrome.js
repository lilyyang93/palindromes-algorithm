exports.palindrome = function(word) {
    let reversed = []
    let allowed = 'abcdefghijklmnopqrstuvwxyz123456789'
    let str1 = word.toString().toLowerCase().split('')
    let str2 = ''
    for (let char of str1) {
        if (allowed.includes(char)) {
            str2 += char
        }
    }
    str2.split('')
    for (let char of str2) {
        if (allowed.includes(char)) {
            reversed.unshift(char)
        }
    }
    let result = reversed.join('')
    return result === str2
};