function search() {

    let towns = [...document.querySelectorAll('#towns > li')]
    let searchValue = document.getElementById('searchText').value.toLowerCase();
    let list = [];
    towns.forEach(town => {
        if (searchValue != '' && town.textContent.toLowerCase().includes(searchValue)) {
            town.style.fontWeight = 'bold'
            town.style.textDecoration = 'underline'
            list.push(town)
        } else {
            town.style.fontWeight = ''
            town.style.textDecoration = ''
        }
    });

    console.log(document.getElementById('result').textContent = `${list.length} matches found`);
}
