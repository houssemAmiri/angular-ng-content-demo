import { Component } from '@angular/core';

@Component({
    selector: 'app-widget',
    standalone: true,
    template: `
    <div class="widget-header">
      <ng-content select="[slot='header']"/>
    </div>
    <div class="widget-content">
      <ng-content> 
        <p class="no-content">No content ......</p>
      </ng-content>
    </div>
  `,
})
export class WidgetComponent {

}
