function printAnArrayWithAGivenDelimiter(arrayOfStrings, delimiter) {

    let result = arrayOfStrings.join(`${delimiter}`);
    console.log(result);
}

printAnArrayWithAGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-');
console.log('-----');
printAnArrayWithAGivenDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');
