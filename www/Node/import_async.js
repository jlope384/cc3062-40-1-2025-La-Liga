
import { readFile } from 'fs';

readFile('iliada.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  
  console.log(data);
});