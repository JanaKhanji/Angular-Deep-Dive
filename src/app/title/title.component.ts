import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-title',
  template: `<h1>{{ text + title }}</h1>
    <input type="text" [(ngModel)]="text" />`,
  standalone: true,
  imports: [FormsModule],
})
export class TitleComponent {
  @Input() title!: string;
  text = 'Hello ';
}
