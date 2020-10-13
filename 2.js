function func(s, a, b) {
    const aIndex = a.length === 1 ? s.lastIndexOf(a) : -1;
    const bIndex = b.length === 1 ? s.lastIndexOf(b) : -1;
    return Math.max(aIndex, bIndex);
}

console.log(func('abcd', 'c', 'd'));
console.log(func('abcd', 'd', 'c'));
console.log(func('abdc', 'd', 'c'));
console.log(func('abdc', 'a', 'd'));