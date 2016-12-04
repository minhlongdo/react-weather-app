/*
function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Philadelphia', function(err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}


getTempPromise('Philadelphia').then(function(temp) {
  console.log('promise success', temp);
}, function(err) {
  console.log('promise error', err);
})
*/

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
      if (isNaN(a) || isNaN(b)) {
      reject("One or more is not a number");
    } else {
      resolve(a + b);
    }
  })
}

addPromise(1, 2).then(function(result) {
  console.log('promise success', result);
}, function(err) {
  console.log('promise failed', err);
})

addPromise(1, '1a2').then(function(result) {
  console.log('promise success', result);
}, function(err) {
  console.log('promise failed', err);
})
