// Import stylesheets
import './style.css';
import { from, fromEvent, Observable, of ,interval, timer } from 'rxjs';
import { distinct, filter, find, single, skip, take, takeUntil, takeWhile } from 'rxjs/operators';
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
from([1,2,3,4,5,4,3,2,1]).pipe(
   distinct()
).subscribe(observer);