import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-smpl-web-pgs',
  imports: [RouterOutlet,RouterLink,MatToolbarModule,MatListModule,RouterLinkActive],
  templateUrl: './smpl-web-pgs.component.html',
  styleUrl: './smpl-web-pgs.component.scss'
})
export class SmplWebPgsComponent {

}
