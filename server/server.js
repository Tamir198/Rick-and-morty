import confige from "./confige.js";

import createApp from './app.js'

const app = createApp();

app.listen(confige.port, () => {
    console.log(`Listening on port ${confige.port}`);
})