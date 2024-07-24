import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import blogTestData from '../../blog.test.json';
import {Blog} from '../../interfaces';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { PAGE_SIZE, PAGE_SIZE_OPTIONS, PAGINATOR_LENGTH } from '../../constants';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,SearchComponent,MatIconModule,MatCardModule,MatButtonModule,MatPaginatorModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  blogs: Blog[] = blogTestData;
  length = PAGINATOR_LENGTH;
  pageSize = PAGE_SIZE;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  handlePageEvent!: PageEvent;
  
  // handlePageEvent(event: PageEvent)  {} // temporary void

}
