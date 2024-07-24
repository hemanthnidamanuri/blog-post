import { Component } from '@angular/core';
import { APP_NAME } from '../../constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
currentYear = new Date().getFullYear();
appName = APP_NAME;
}
