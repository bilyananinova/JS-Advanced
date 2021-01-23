function editElement(reference, match, replacer) {
    let regex = new RegExp(match, 'g');
    let element = reference.textContent;
    let result = element.replace(regex, replacer);
    reference.textContent = result;

    console.log(reference);

}