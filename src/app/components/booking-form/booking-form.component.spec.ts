import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFormComponent } from './booking-form.component';

describe('BookingFormComponent', () => {
  let component: BookingFormComponent;
  let fixture: ComponentFixture<BookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BookingFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Request Consultation');
  });

  it('should render form', () => {
    const fixture = TestBed.createComponent(BookingFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  it('should render inputs', () => {
    const fixture = TestBed.createComponent(BookingFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('input')).toBeTruthy();
  });

  it('should render submit button', () => {
    const fixture = TestBed.createComponent(BookingFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')).toBeTruthy();
  });

});
