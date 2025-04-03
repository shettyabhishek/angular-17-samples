import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tailwind',
  imports: [RouterOutlet,RouterLink,MatToolbarModule,MatListModule],
  templateUrl: './tailwind.component.html',
  styleUrl: './tailwind.component.scss'
})
export class TailwindComponent {

}
