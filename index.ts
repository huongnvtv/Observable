// Import stylesheets
import './style.css';
import { from, fromEvent, Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const observer = {
  next: function (value) {
    console.log(value);
  },
  error: function (error) {
    console.log(error);
  },
  complete: function () {
    console.log('Done');
  },
};
from([1,2,3,4,5,6]).pipe(
   filter(item => {
     return item %2 ===0;
   })
).subscribe(console.log);
