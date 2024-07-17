import { Component } from '@angular/core';
<<<<<<< HEAD

@Component({
  selector: 'app-root',
=======
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
>>>>>>> 6caf25979ace09fda2b625cc85bb5fe55e0ed2c9
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
<<<<<<< HEAD
  title = 'PokerPlanningFrontend';
=======
  title = 'PokerPlanningFront';
>>>>>>> 6caf25979ace09fda2b625cc85bb5fe55e0ed2c9
}
