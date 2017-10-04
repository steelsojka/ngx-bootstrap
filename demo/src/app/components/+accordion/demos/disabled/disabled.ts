import { Component } from '@angular/core';

@Component({
  selector: 'demo-accordion-disabled',
  templateUrl: './disabled.html'
})
export class DemoAccordionDisabledComponent {
  status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
}
