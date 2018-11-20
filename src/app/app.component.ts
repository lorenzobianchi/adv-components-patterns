import { Component } from '@angular/core';
import { NewToggleState } from './newToggle/newToggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adv-components-patterns';
  timesClicked = 0;

  stateReducer = (state: NewToggleState, changes: Partial<NewToggleState>) => {
    if(this.timesClicked > 3) {
      return state;
    }
    if(changes.on !== undefined) {
      this.timesClicked = this.timesClicked + 1;
    }
    return {...state, ...changes}
  }

  onToggle(on) {
    console.log('toggle', on);
  }

  log(message, value) {
    console.log(message, value);
  }
}
