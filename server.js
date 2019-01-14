const app = require("./src/app");
const port = process.env.PORT || 3000;

app.listen(port, () => {
 console.log(`The server is running on port ${port}`);
 console.log(`=====================================`);
});

