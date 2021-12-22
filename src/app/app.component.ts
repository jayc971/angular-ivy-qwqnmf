import { Component, VERSION } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myControl = new FormControl();
  name = 'Angular ' + VERSION.major;
  options = ['dsadsa', 'dsadsa', '123'];
}
