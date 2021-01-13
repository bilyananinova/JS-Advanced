function wordsUppercase(str) {

    str = str.split(/\W/g).filter(x => x != '').map(x => x.toUpperCase(x));
    console.log(str.join(', '));
}

wordsUppercase('Hi, how are you?');
console.log('-----');
wordsUppercase('hello');
