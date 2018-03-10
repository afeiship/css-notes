const express = require('express');
const app = express();
const portNumber = 3000;
const sourceDir = './src/2018-03/2018-03-10_1';

app.use(express.static(sourceDir));

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
