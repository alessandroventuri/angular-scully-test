import { Component } from '@angular/core';

@Component({
  selector: '[app-root]',
  template: `
    <header>
      <h1>Angular-Scully test!</h1>
    </header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
