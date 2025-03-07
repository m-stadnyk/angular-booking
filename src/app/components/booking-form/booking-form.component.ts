import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BookingConfirmationComponent } from '../booking-confirmation/booking-confirmation.component';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatTimepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    BookingConfirmationComponent
  ]
})
export class BookingFormComponent {
  parentName = '';
  email = '';
  selectedDate!: Date;
  selectedTime!: Date;
  request = '';
  bookingSubmitted = false;
  errors: string[] = [];

  timeOptions = [
    { label: 'Morning (10am-12pm)', value: new Date(0, 0, 0, 10, 0) },
    { label: 'Afternoon (12pm-3pm)', value: new Date(0, 0, 0, 12, 0) },
    { label: 'Evening (3pm-6pm)', value: new Date(0, 0, 0, 15, 0) },
  ];

  dateFilter = (date: Date | null): boolean => {
    const day = (date || new Date()).getDay();
    return day === 2 || day === 4;
  };

  submitBooking() {
    const errors = [];

    if (!this.parentName) {
      errors.push('Parent Name');
    }

    if (!this.email) {
      errors.push('Email');
    }

    if (!this.selectedDate) {
      errors.push('Selected Date');
    }

    if (!this.selectedTime) {
      errors.push('Selected Time');
    }

    if (errors.length > 0) {
      return;
    }

    this.bookingSubmitted = true;
    console.log('Booking Submitted:', this.parentName, this.email, this.selectedDate, this.selectedTime);
    this.sendConfirmation();
  }

  sendConfirmation() {
    console.log('Sending confirmation email to', this.email);
    // Send email logic here
    alert('Your booking request email sent, watch out for updates in your inbox!');
  }
}