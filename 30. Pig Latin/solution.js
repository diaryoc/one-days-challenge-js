const partitionWord = (s) => {
    let m = s.match(/^(?:[aeiou]|xr|yt)/);
    if (m) return ['', s];
    m = s.match(/^(.?qu)(.*)/);
    if (m) return [m[1], m[2]];
    m = s.match(/^([^aeiou]+)(y.*)/);
    if (m) return [m[1], m[2]];
    m = s.match(/^([^aeiou]+)(.*)/);
    if (m) return [m[1], m[2]];
    return ['', s];
}
const translate = (string) => {
    return string
        .split(/\s+/)
        .map((word) => {
            const [prefix, rest] = partitionWord(word);
            return `${rest}${prefix}ay`;
        })
        .join(' ');
};

console.log(translate('Hello, World!'));
console.log(translate('Alvillage Zuknisianta'));