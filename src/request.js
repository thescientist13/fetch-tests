import request from 'request';

const url = 'https://www.analogstudios.net/api/albums?artistId=1'

request.get(url, (err, res, body) => {
  if (err) {
    reject();
  }

  const data = JSON.parse(body);

  console.debug(`[request] Request => ${url}`);
  console.debug(`[request] Response Length (actual) => ${data.length}`);
  console.debug(`[request] Response Length (expected) => 1`);

  if(data.length === 1) {
    console.log('\x1b[32m%s\x1b[0m', 'PASS')
  } else {
    console.log('\x1b[31m%s\x1b[0m', 'FAIL')
  }
  
  console.debug('===============================================')
});