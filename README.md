# Babywearing Consultation Booking Requester - BwBooking

BwBooking is a web application designed to facilitate booking consultations for babywearing. Users can fill out a form to request a consultation, specifying their preferred date and time. Once the booking is successfully submitted, a confirmation message is displayed.

## Features

- **Booking Form**: Users can fill out a form with their name, email, preferred date, and time for the consultation.
- **Date and Time Selection**: The date picker allows users to select specific days of the week (e.g., Tuesdays and Thursdays), and the time picker restricts time selection to specific hours (e.g., 12:00 PM to 6:00 PM).
- **Booking Confirmation**: After submitting the form, users receive a confirmation message.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project, run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## How to Run Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/bw-booking.git
    cd bw-booking
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    ng serve
    ```

4. **Open the application**:
    Open your browser and navigate to `http://localhost:4200/`.

## Application Structure

- **Components**:
  - `BookingFormComponent`: Handles the booking form where users can input their details and select a date and time.
  - `BookingConfirmationComponent`: Displays a confirmation message once the booking is successfully submitted.

- **Services**:
  - Add any services used in the application here.

- **Models**:
  - Add any models used in the application here.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. We welcome all contributions!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.# BwBooking

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
