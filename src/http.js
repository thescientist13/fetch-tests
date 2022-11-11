import https from 'https';

const url = 'https://www.analogstudios.net/api/albums?artistId=1'

https.get(url, (resp) => {
  let body = '';

  resp.on('data', (chunk) => {
    body += chunk;
  });

  resp.on('end', () => {
    const data = JSON.parse(body);

    console.debug(`[https] Request => ${url}`);
    console.debug(`[https] Response Length (actual) => ${data.length}`);
    console.debug(`[https] Response Length (expected) => 1`);

    if(data.length === 1) {
      console.log('\x1b[32m%s\x1b[0m', 'PASS')
    } else {
      console.log('\x1b[31m%s\x1b[0m', 'FAIL')
    }

    console.debug('===============================================')
  });
}).on('error', (err) => {
    console.error('Error: ', { err });
});