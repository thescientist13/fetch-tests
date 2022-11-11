import nodeFetch from 'node-fetch';

const url = 'https://www.analogstudios.net/api/albums?artistId=1';
const response = await nodeFetch(url);
const data = await response.json();

console.debug(`[nodeFetch] Request => ${url}`);
console.debug(`[nodeFetch] Response Length (actual) => ${data.length}`);
console.debug(`[nodeFetch] Response Length (expected) => 1`);

if(data.length === 1) {
  console.log('\x1b[32m%s\x1b[0m', 'PASS')
} else {
  console.log('\x1b[31m%s\x1b[0m', 'FAIL')
}

console.debug('===============================================')