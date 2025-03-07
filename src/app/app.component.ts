import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookingFormComponent } from './components/booking-form/booking-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookingFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bw-booking';
}
