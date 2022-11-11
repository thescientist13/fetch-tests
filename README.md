# fetch-tests

A repo for testing fetch and http implementations.  For some reason, it seems _query strings_ aren't behaving as expected with native **fetch** / **node-fetch** as with raw HTTP.

Seeing it in both these projects
- https://github.com/AnalogStudiosRI/www.analogstudios.net/issues/81
- https://github.com/AnalogStudiosRI/www.tuesdaystunes.tv/blob/main/src/pages/index.js#L11

## Setup
1. Clone this repo
1. Run `nvm` (or make sure you are using Node >= `18.11.x`)
1. Run `npm ci`

To generate the the results, run
```sh
$ sh test.sh
```

## Results

```sh
owenbuckley@Owens-MBP-2 fetch-tests % sh test.sh
[nodeFetch] Request => https://www.analogstudios.net/api/albums?artistId=1
[nodeFetch] Response Length (actual) => 14
[nodeFetch] Response Length (expected) => 1
FAIL
===============================================
[request] Request => https://www.analogstudios.net/api/albums?artistId=1
[request] Response Length (actual) => 1
[request] Response Length (expected) => 1
PASS
===============================================
(node:21465) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
[fetch] Request => https://www.analogstudios.net/api/albums?artistId=1
[fetch] Response Length (actual) => 14
[fetch] Response Length (expected) => 1
FAIL
===============================================
[https] Request => https://www.analogstudios.net/api/albums?artistId=1
[https] Response Length (actual) => 1
[https] Response Length (expected) => 1
PASS
===============================================
```