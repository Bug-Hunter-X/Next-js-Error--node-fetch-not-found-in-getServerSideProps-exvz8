# Next.js node-fetch Error
This repository demonstrates a common error encountered when using `node-fetch` within the `getServerSideProps` function in Next.js. The error occurs because `node-fetch` isn't automatically included in the Next.js environment, leading to a runtime failure.  The solution showcases the correct way to import and utilize `node-fetch` for fetching data during server-side rendering.

## Problem
The provided `about.js` file uses `node-fetch` to retrieve data from an external API. However, it incorrectly tries to import `node-fetch` directly, which doesn't work within the Next.js server-side rendering context.

## Solution
The solution (`aboutSolution.js`) demonstrates the proper method: using a package like `next/link` which does not require additional importing of libraries when used in getServerSideProps. 