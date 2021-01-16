function addAndRemoveElements(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'add') {
            result.push(i+1);
        } else {
            result.pop()
        }
    }

    if(result.length > 0) {
        return result.join('\n')
    } else {
        return 'Empty'
    }

}

addAndRemoveElements(['add', 'add', 'add', 'add']);
console.log('-----');
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
console.log('-----');
addAndRemoveElements(['remove', 'remove', 'remove']);
