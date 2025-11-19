const app = require('./app.js');
const https = require('https');
const fs = require('fs');
const port = process.env.PORT || 8081;

// const options = {
//   cert: fs.readFileSync('D:\\socialinsurance\\backend\\baohiemxahoiq7_zapto_org.pem'),
//   key: fs.readFileSync('D:\\socialinsurance\\backend\\private-key.pem'),
//   ca: fs.readFileSync('D:\\socialinsurance\\backend\\DigiCertCA.crt'),
// };

// https.createServer(options, app).listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
