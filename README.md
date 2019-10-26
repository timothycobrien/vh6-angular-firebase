# Vh6Workshop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Dependencies

@angular, @types, TypeScript (at a high level, have to break these down further), rxjs (for observables)

## Workshop notes (rough draft)

Start off by running `ng new 'your-project-name'` to create a new Angular directory with your project name. Let's see that this worked by jumping into the directory and running `ng serve` to create a webpage. Angular will tell you where the page is being hosted on your computer, this is usually `localhost:4200`.

### Basic Angular building blocks

#### Modules

"NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. They can contain components, service providers, and other code files whose scope is defined by the containing NgModule. They can import functionality that is exported from other NgModules, and export selected functionality for use by other NgModules. While a small application might have only one NgModule, most apps have many more feature modules. The root NgModule for an app is so named because it can include child NgModules in a hierarchy of any depth." You can use `ng generate module your-module-name` to create a new module.

#### Components

Components control what is actually rendered to the screen. You can think of these as individual pieces of the larger view. Note that it's entirely likely that you would have multiple components rendered to the screen at one time. For example, a menu bar might be one component, a sidenav might be another, and there might be a component with the content on that particular page. You can use `ng generate component your-component-name` to create a new component.

#### Services

"Service is a broad category encompassing any value, function, or feature that an app needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well." This handles non-view related functionality that your app might need. You might have an authentication service, a query service, or anything else. Services are usually injectable which means that we can make them available to any component that needs them. What's really nice, though, is that these services will only be "spun up" one time, and only when they're needed; this is called lazy-loading. This will make our application run much faster. You can use `ng generate service your-service-name` to create a new service.

### Firebase setup

You can create a new Firebase project and add it to your Angular app by clicking "Add Firebase to your web app". Copy the `var firebaseConfig` and add it to `environment.ts` in the `environments` directory as a JSON object. Let's `npm install firebase and @angular/fire`. Now at the top of `app.module.ts` add:

```TypeScript
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
```

Also `import { environment } from 'src/environments/environment';` so that we have access to this variable.

Now, under imports in `@ngModule`, add:

```TypeScript
AngularFireModule.initializeApp(environment.firebaseConfig),
AngularFirestoreModule,
AngularFireAuthModule
```

Now we can use Firebase throughout our app! Wow!

### Creating a sign-in page

This is really going to involve two things. First we need to check that we're signed in whenever we navigate anywhere in our application. That's going to involve a service to check for being signed in. We're also going to need a service that actually signs us in.

#### Create log-in page

Let's begin by making a service that signs us in using Google SSO. This could easily be changed to use another kind of SSO or email&password, but Google SSO should be good enough for our use case here.

Run `ng g service login`.

Now we're going to create two m

#### Check for being signed in

This service will return a bool value telling us whether or not we're signed in. That's going to allow us to use something called a "route guard" to prevent the users from going anywhere in our application without being signed in first.

Let's create this with `ng g service auth`
