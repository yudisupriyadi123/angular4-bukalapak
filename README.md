# The Problem with Activated Route, Data, dan Title

The design of application is separating user interface
from business logic.

```
./src/app/
├── app.component.ts
├── app.module.ts
├── products
│   ├── product-list
│   │   ├── product-list.component.html
│   │   └── product-list.component.ts
│   │
│   ├── shared
│   │   ├── product.model.ts
│   │   └── product.service.ts
│   │
│   ├── products.module.ts
│   └── products-routing.module.ts
│
└── user-interface
    ├── layout
    │   ├── footer
    │   │   └── footer.component.ts
    │   ├── navbar
    │   │   └── navbar.component.ts
    │   └── nav-sidebar
    │       └── nav-sidebar.component.ts
    └── user-interface.module.ts
```

Each part of user interface is implemented as a component 
and collected under a feature module.

One part of user interface is `NavBar` and it needs a `title`
to displays. The title is title of page or content.

As AppComponent only need to call `<app-user-interface>`
and projecting the content to it, there is a problem,
since the information about title is located in route definition
that placed in every feature module's root component. Like below.

```
from: src/app/products/products-routing.module.ts

const routes: Routes = [
    {  
        path: 'product-list',
        component: ProductListComponent,
        data: { title: 'Product List' },
    },
];
```

The NavBar cannot access the `data` that contain title, because it
lives in the ActivatedRoute of `ProductListComponent`.

Fortunately, after chatting in gitter I get a solution and found
this resource:
https://toddmotto.com/dynamic-page-titles-angular-2-router-events

***

# AngularPortfolioBukalapakApi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
