# constants
export ENDPOINT='https://www.analogstudios.net/api/albums/';
export EXPECTED=1;

# test native fetch
node ./src/fetch.js

# test node-fetch
node ./src/node-fetch.js

# test native http(s)
node ./src/http.js

# test request
node ./src/request.js