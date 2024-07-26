import { Component } from '@angular/core';
import { QuillModule} from 'ngx-quill';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [QuillModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  editorContent!: string;
}
