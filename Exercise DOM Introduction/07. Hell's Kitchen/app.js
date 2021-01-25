function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let workersParagraph = document.querySelector('#workers > p')
      let bestRestaurantParagraph = document.querySelector('#bestRestaurant > p');
      let input = document.querySelector('#inputs > textarea').value;
      input = JSON.parse(input);
      let restaurants = {};

      for (let line of input) {
         let [restaurantName, workersInfo] = line.split(' - ')
         let workersArray = workersInfo.split(', ');
         let workers = [];

         for (const worker of workersArray) {
            let [name, salary] = worker.split(' ');
            workers.push({ name, salary: Number(salary) });
         }

         if (restaurants[restaurantName]) {
            workers = workers.concat(restaurants[restaurantName].workers);
         }

         workers.sort((a, b) => b.salary - a.salary);
         let average = workers
         .reduce((sum, worker) => sum + worker.salary, 0) / workers.length;
         let best = workers[0].salary;

         restaurants[restaurantName] = {
            workers,
            average,
            best
         }
      }

      let bestAverageSalary = 0;
      let bestRestaurant;

      for (let name in restaurants) {
         if (restaurants[name].average > bestAverageSalary) {
            bestRestaurant = {
               name,
               workers: restaurants[name].workers,
               best: restaurants[name].best,
               average: restaurants[name].average,
            }
         }

         bestAverageSalary = restaurants[name].average
      }

      bestRestaurantParagraph.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.average.toFixed(2)} Best Salary: ${bestRestaurant.best.toFixed(2)}`

      let result = []

      bestRestaurant.workers.forEach(element => {
         result.push(`Name: ${element.name} With Salary: ${element.salary}`)
      });

      workersParagraph.textContent = result.join(' ');
   }

}