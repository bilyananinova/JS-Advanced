function listOfNames(names) {

    names = names.sort().forEach((element, index) => {
        console.log(`${index + 1}.${element}`);
    });
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
