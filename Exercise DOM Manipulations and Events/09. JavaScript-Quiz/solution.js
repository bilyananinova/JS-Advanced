function solve() {
  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let rightAnswers = 0;
  let i = 0;
  
  Array.from(document.getElementsByClassName('answer-text')).forEach((li) => {
    li.addEventListener('click', () => {
      if (correctAnswers.includes(li.textContent)) {
        rightAnswers++
      };

      let currentSection = document.querySelectorAll("section")[i];
      currentSection.style.display = "none";

      if (document.querySelectorAll("section")[i + 1] !=  undefined) {
        let nextSection = document.querySelectorAll("section")[i + 1];
        nextSection.style.display = "block";
        i++
      } else {
        document.getElementById('results').style.display = 'block'
        if (rightAnswers < 3) {
          document.querySelector('.results-inner > h1').textContent = `You have ${rightAnswers} right answers`
        } else {
          document.querySelector('.results-inner > h1').textContent = `You are recognized as top JavaScript fan!"`
        }
      }

    })
  })
}
