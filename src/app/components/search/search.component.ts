import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {NgClass} from '@angular/common'
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, MatIconModule, MatFormFieldModule, FormsModule,NgClass,RouterLinkActive
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText!: String | '';

  onSearch(): void {

  }
}
