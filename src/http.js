import https from 'https';

const url = `${process.env.ENDPOINT}?artistId=1`;

https.get(url, (resp) => {
  let body = '';

  resp.on('data', (chunk) => {
    body += chunk;
  });

  resp.on('end', () => {
    const data = JSON.parse(body);

    console.debug(`[https] Request => ${url}`);
    console.debug(`[https] Response Length (actual) => ${data.length}`);
    console.debug(`[nodeFetch] Response Length (expected) => ${process.env.EXPECTED}`);

    if (data.length === parseInt(process.env.EXPECTED, 10)) {
      console.log('\x1b[32m%s\x1b[0m', 'PASS')
    } else {
      console.log('\x1b[31m%s\x1b[0m', 'FAIL')
    }

    console.debug('===============================================')
  });
}).on('error', (err) => {
    console.error('Error: ', { err });
});