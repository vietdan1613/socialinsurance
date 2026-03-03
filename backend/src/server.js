const app = require('./app.js');
const https = require('https');
const fs = require('fs');
const port = process.env.PORT || 8082;

const options = {
  cert: fs.readFileSync('C:\\project\\socialinsurance\\backend\\ssl\\baohiemxahoiq7_zapto_org.pem'),
  key: fs.readFileSync('C:\\project\\socialinsurance\\backend\\ssl\\private-key.pem'),
  ca: fs.readFileSync('C:\\project\\socialinsurance\\backend\\ssl\\DigiCertCA.crt'),
};

https.createServer(options, app).listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
