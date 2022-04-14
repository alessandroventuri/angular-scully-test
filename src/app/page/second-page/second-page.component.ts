import { Component } from '@angular/core';

@Component({
  template: `
    <h2>Second Page</h2>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/first">First Page</a></li>
      </ul>
    </nav>
  `,
})
export class SecondPageComponent {}
