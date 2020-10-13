function verify(str) {
    let oldStr;
    str = str.replace(/[^\(\)\[\]\<\>]+/g, '');
    do {
        oldStr = str;
        str = str.replace(/(\(\)|\[\]|\<\>)/g, '');
    } while (str.length !== oldStr.length);
    return !str.length * 1;
}

console.log('Expected 1', 'Result ' + verify("---(++++)----"));
console.log('Expected 1', 'Result ' + verify(""));
console.log('Expected 1', 'Result ' + verify("before ( middle []) after "));
console.log('Expected 0', 'Result ' + verify(") ("));
console.log('Expected 0', 'Result ' + verify("<(   >)"));
console.log('Expected 1', 'Result ' + verify("(  [  <>  ()  ]  <>  )"));
console.log('Expected 0', 'Result ' + verify("   (      [)"));