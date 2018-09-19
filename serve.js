const express = require('express');
const app = express();
const portNumber = 3000;
const sourceDir = './src/2018-09/2018-09-19';

app.use(express.static(sourceDir));

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
