import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss'
})
export class StarComponent {
  isSelected:boolean = false

  onClick(){
    this.isSelected = !this.isSelected
  }
}
