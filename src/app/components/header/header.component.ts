import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatNavList,MatListItem} from '@angular/material/list'
import { APP_NAME } from '../../constants';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,MatNavList,MatListItem],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
appName = APP_NAME;
loggedIn = false;
constructor() {}

isLoggedIn(): boolean {
  return this.loggedIn;
}

logIn(): boolean {
  return this.loggedIn = true;
}

logout() : boolean {
  return this.loggedIn = false;
}

}
