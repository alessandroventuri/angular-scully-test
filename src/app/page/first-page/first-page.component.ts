import { Component } from '@angular/core';

@Component({
  template: `
    <h2>First Page</h2>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/second">Second Page</a></li>
      </ul>
    </nav>
  `,
})
export class FirstPageComponent {}
