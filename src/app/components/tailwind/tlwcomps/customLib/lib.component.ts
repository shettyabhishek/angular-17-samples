import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lib',
  imports: [RouterOutlet,RouterLink,MatToolbarModule,MatListModule,RouterLinkActive],
  templateUrl: './lib.component.html',
  styleUrl: './lib.component.scss'
})
export class LibComponent {

}
