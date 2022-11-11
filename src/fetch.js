const url = `${process.env.ENDPOINT}?artistId=1`;
const response = await fetch(url);
const data = await response.json();

console.debug(`[fetch] Request => ${url}`);
console.debug(`[fetch] Response Length (actual) => ${data.length}`);
console.debug(`[fetch] Response Length (expected) => ${process.env.EXPECTED}`);

if (data.length === parseInt(process.env.EXPECTED, 10)) {
  console.log('\x1b[32m%s\x1b[0m', 'PASS')
} else {
  console.log('\x1b[31m%s\x1b[0m', 'FAIL')
}

console.debug('===============================================')