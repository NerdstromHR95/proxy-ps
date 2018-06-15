const express = require('express');
const path = require('path');


const app = express();

const proxy = require('http-proxy-middleware');

app.use('/:id', express.static(path.join(__dirname, '../client')));
// app.use('/', express.static(path.join(__dirname, '../client')));

app.use('/:itemNo/reviews/*', proxy({target: 'http://localhost:3002'}))

app.use('/details/*', proxy({target: 'http://localhost:3004'}))
app.use('/:id/*', proxy({target: 'http://localhost:3003'}))



// app.get('/', (res) => {
//   const options = {
//     host: 'http://localhost:',
//     port: 3001,
//     path: 'photo/100',
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//     }
// };
//     request(options, (err, data) => {
//           if (err) {
//             res.status(500).send();
//           } else {
//             res.send(data);
//           }
//         });
//     });

//     app.get('/', (res) => {
//       const options = {
//         host: 'http://localhost:',
//         port: 3001,
//         path: 'photo/Black/100',
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*'
//         }
//     };
//         request(options, (err, data) => {
//               if (err) {
//                 res.status(500).send();
//               } else {
//                 res.send(data);
//               }
//             });
//         });

//         app.get('/', (res) => {
//           const options = {
//             host: 'http://localhost:',
//             port: 3002,
//             path: '/review-bundle.js',
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*'
//             }
//         };
//             request(options, (err, data) => {
//                   if (err) {
//                     res.status(500).send();
//                   } else {
//                     res.send(data);
//                   }
//                 });
//             });
const PORT = 3000;
app.listen(PORT, () => console.log(`server is listening on: ${PORT}`));