// 💡 promises tutorial

// syntax
function fun1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = false;
      if (!false) {
        console.log(`Your promise has been resolved`);
        resolve();
      } else {
        console.log(`Your promise has been not resolved`);
        reject(`Sorry: Not fulfilled `);
      }
    }, 2000);
  });
}
// calling fun1() function
fun1()
  .then(function () {
    console.log(`Thanks for resolving`);
  })
  .catch(function () {
    console.log(`Very bad bro`);
  });


// Promise chaining
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // Output: 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // Output: 2
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // Output: 4
    return result * 2;
  });
  
promise;
