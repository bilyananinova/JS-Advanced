function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let workersParagraph = document.querySelector('#workers > p')
      let bestRestaurantParagraph = document.querySelector('#bestRestaurant > p');
      let input = document.querySelector('#inputs > textarea').value;
      input = JSON.parse(input);
      let restaurants = {};
      let average = 0;
      let best = 0;
      for (let line of input) {
         let [restaurantName, workersInfo] = line.split(' - ')
         let workersArray = workersInfo.split(', ');
         let workers = [];

         for (const worker of workersArray) {
            let [name, salary] = worker.split(' ');
            workers.push({ name, salary: Number(salary) });
         }

         //If there is a restaurant in the input array which is added more than once you should update (add the new ones) the workers, average salary and best salary.

         if (restaurants[restaurantName]) {
            workers = workers.concat(restaurants[restaurantName].workers)
         }

         //display the best restaurant of all the added restaurants with its average salary and best salary. 
         average = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;
         best = workers.sort((a, b) => b.salary - a.salary)
         best = workers[0].salary

         restaurants[restaurantName] = {
            workers,
            average,
            best
         }
      }
      let averageSalary = 0;
      let bestRestaurant = {};

      for (const name of Object.keys(restaurants)) {
         //The best restaurant is the restaurant with the highest average salary. If two restaurants have the same average salary the best restaurant is the first one added.
         if (restaurants[name].average > averageSalary) {
            bestRestaurant[name] = {
               workers: restaurants[name].workers,
               average: restaurants[name].average,
               best: restaurants[name].best,
            }

            averageSalary = restaurants[name].average

            bestRestaurant[name].workers.sort((a, b) => b.salary - a.salary)

            bestRestaurantParagraph.textContent =
               `Name: ${name} Average Salary: ${bestRestaurant[name].average.toFixed(2)} Best Salary: ${bestRestaurant[name].best.toFixed(2)}`

            let output = [];

            bestRestaurant[name].workers.forEach(element => {

               output.push(`Name: ${element.name} With Salary: ${element.salary}`);

            });


            workersParagraph.textContent = output.join(' ')

         }

      }

   }

}
