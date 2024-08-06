import { Component } from '@angular/core';
import { WidgetComponent } from './widget/widget.component';
import { WeatherContentComponent } from './weather/weather-content.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WidgetComponent, WeatherContentComponent],
    template: `
    <app-widget>
        <ng-container slot="header">
            <div class="widget-title">Weather Forecast</div>
            <div class="widget-sub-title">Currently in Vienna, Austria</div>
        </ng-container>
        <app-weather-content />
    </app-widget>
  `
})
export class AppComponent {

}
