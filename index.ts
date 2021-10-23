// Import stylesheets
import './style.css';
import { from, fromEvent, Observable, of ,interval, timer, forkJoin, delay } from 'rxjs';
import { distinct, filter, find, map, single, skip, take, takeUntil, takeWhile } from 'rxjs/operators';
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
forkJoin([
  of([1,2,3]).pipe(delay(2000)),
  of("word").pipe(delay(5000))
]).pipe(
  map(function([item1,item2]){
    return {hello: item1, word : item2}
  })
).subscribe(observer)