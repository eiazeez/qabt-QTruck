const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ4NDNiNjIxLTBlNzItNDllNC04YzM2LTQyNmI0OGZlN2ZmNi0xNjYyNjgwMTE2NDc3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiN2YwMTU0YTQtMDk5Mi00NmY4LTkzNzItYmFiNzk2M2ZiNjg2IiwidHlwZSI6InQifQ.MGeo9PFe2q7Wjqt22BSpB3SJ-Tknea1rd6ERZyayq6Q'

cypress.run({
  // specs to run here
  browser: 'chrome',
  baseUrl: 'http://localhost:3000',
  env: {
    apiUrl: 'http://localhost:3333'
  }
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})