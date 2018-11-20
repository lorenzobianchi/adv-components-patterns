import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';

export interface NewToggleState {
  on: boolean;
}

export type NewToggleStateReducer = (state: NewToggleState, changes: Partial<NewToggleState>) => NewToggleState;


@Component({
  exportAs: 'new-toggle',
  template: `
  <ng-container *ngTemplateOutlet="layoutTemplate; context: { on: this.on, fns: { toggle: toggle } }"></ng-container>`,
  selector: 'new-toggle, [new-toggle]',
})

export class NewToggleComponent {
  @Input() stateReducer: NewToggleStateReducer = (state, changes) => ({...state, ...changes});
  @Input() on: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(TemplateRef) layoutTemplate: TemplateRef<any>;

  setOnState(on: boolean) {
    const oldState = {on: this.on};
    const newState = this.stateReducer(oldState, {on});
    if(oldState !== newState) {
      this.on = newState.on;
      this.toggled.emit(this.on);
    }
  }

  toggle = () => {
    this.setOnState(!this.on)
  }
}
