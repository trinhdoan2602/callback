// event loop

// function eventLoop() {
//     console.log('Doan')
//     setTimeout(() => console.log('Cong'), 0)
//     console.log('Trinh')
// }
// eventLoop()

// const functionCallback = name => {
//     console.log(`hello ${name}`);
// }
// function asyncOperation(name, callback) {
//     callback(name)
// }
// asyncOperation('Trinh', functionCallback)

// call back

// const promise = function asyncOperation(name, callback) {
//     return new Promise((resolve, reject) => {
//         resolve(name)
//     })
// }
// promise('Trinh').then(name => console.log(`hello ${name}`))

// async

function slowAddition(n1, n2) {
  return new Promise((resolve, reject) => {
    // setTimeout(() => resolve(n1 + n2), 3000);
    setTimeout(() => {
      reject(new Error("Trinh 123"));
    }, 3000);
  });
}

async function increaseSalary(base, increase) {
    let newSalary
    try{
      newSalary = await slowAddition(base, increase);
    }catch (e) {
      console.log(`Error get newSalary ${e.message}`);
      newSalary = base * 2

    }
  // const newSalary = await slowAddition(base, increase);
  console.log(`New Salary ${newSalary}`);
  return newSalary;
}

const newSalary = increaseSalary(1000, 100).then((newSalary) =>
  console.log(`New Salary ${newSalary}`)
);
console.log(newSalary);
