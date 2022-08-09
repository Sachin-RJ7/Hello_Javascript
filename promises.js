
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
