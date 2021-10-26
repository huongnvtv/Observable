// Import stylesheets
import './style.css';
import { from, fromEvent, Observable, of ,interval, timer, forkJoin, delay, zip } from 'rxjs';
import { distinct, endWith, filter, find, map, single, skip, startWith, take, takeUntil, takeWhile, withLatestFrom } from 'rxjs/operators';
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
zip(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9));
fromEvent(document, 'click')
  .pipe(withLatestFrom(interval(1000)))
of("hello").pipe(
  startWith("word")
)
of("hello").pipe(
  endWith("word")
).subscribe(observer)