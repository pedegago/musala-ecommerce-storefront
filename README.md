![GapCommerce](https://dev-assets.opencarwash.com/musalasoft/favicon.png "MusalaSoft")

# Artworks store (frontend)

Artworks store (frontend). A programming task from Pablo David Gago Ballester to MusalaSoft. May 2020.

## Table of contents

-   [Description](#description)
-   [Architecture](#architecture)
-   [Folders structure](#folders-structure)
    -   [Components](#components)
    -   [Hooks](#hooks)
    -   [Utils](#Utils)
    -   [Styles](#styles)
-   [Tools](#tools)
-   [Solution](#solution)
    -   [State management](#state-management)
    -   [Local storage](#local-storage)
    -   [Authentication](#authentication)
    -   [Views](#views)
-   [Build & deploy](#build-ddeploy)

## Description

This project is the frontend of an Artworks store which is a SPA solution of a MusalaSoft practical task. This solution is about an online store for selling artworks related to MusalaSoft. In this application the users can do purchases of artworks, see a specific artwork in detail, list all artworks availables and even to see all purchases that have been done by an user.

## Architecture

The selected architecture is **components-based architecture**, where each component is a small piece of the source code that can be easily both reusable and replaceable. This architecture promote the scalability of the project.

## Folders structure

Based on the architecture, the folders structure allows us to scale easily the project. The components, the hooks, the utils and the styles has been separated this way.

### `components`

-   `base`: Basic components (Button, Input, Loading, Logo, Counter, etc).
-   `contexts`: React context components.
-   `layout`: Components for building the layout such as header, subscription, footer or copyright section`.
-   `pages`: Content pages such as start page, products list, checkout form.
-   `routes`: Defines all project routes.

### `hooks`

React hooks that allows us to manage global state, APIs calls or form control.

### `utils`

This folder contains constants variables, basic functions for manage the localStorage or three party classes.

### `styles`

This structure was defined using the **7-1 Pattern**. This pattern allows us to separate the styles by its function. It is similar to `/components` folder.

-   `base`: Defines basic styles such as typography.
-   `components`: Defines styles for basic components.
-   `layout`: Defines styles for layout components such as header, footer, copyright.
-   `pages`: Defines styles for page components.
-   `utils`: Defines variables, mixins and animations.
-   `vendors`: Defines styles and imports of three party frameworks.

All this estyles, are centralized and loaded from a `main.scss` file which is the "1" in the **7-1 Pattern**. This file is imported from the entry component of the application.

## Tools

This solution was implemented using:

-   Node.js(10.16.3)
-   Yarn as packages manager.

The main libraries used are:

-   Reactjs
-   React router
-   Reactstrap as wrapper of Bootstrap for Reactjs.
-   Bootstrap 4

Other libraries used:

-   Axios for managing requests.
-   React-scripts for automatic Reactjs project configuration.
-   Validator for valiation rules.
-   Node-sass because all styles was implemented using **SASS as CSS preprocessor**.

## Solution

### State management

There are in the market a couple of State managers for React applications, but this project was implemented using a new feature of React called **Contexts**. The contexts allow us to pass props to all children in the tree whitout passing it explicitly. This new feature could be used to implement a basic state manager for simple applications like this because the state can be consumed and updated for any child without installing additional libraries like Redux. In this solution the highest level component is wrapped by the context with this initial state:

```javascript
const initialState = {
    //Ui states such as shopping cart open
    ui: {},
    //Products in the shopping cart
    cart: [],
    //Information of the order
    order: {},
    //Authenticated user information
    auth: {}
};
```

### Local storage

This application uses the local storage of the browser to persist information related to authenticated users, products added to shopping carts and order information. It uses out of the box the key: `musala-soft-framed-artworks`. This feature is useful because the user don't have to rewrite the information related to order, or shopping cart products one leaves the application and come back again in other moment.

### Authentication

This project support a basic authentication mechanism based on **JWT** (Json Web Token), a good way of securely transmitting information between parties. For practical purposes this programming task doesn't includes sign up feature.

In order to explore the sign in feature, you have this credentials:

-   username: `musala.soft@example.com`
-   password: `Musalas0ft`

Once authenticated you will be able to see in the header and footer, options for checking your orders list (`/orders`) and your profile information (`/profile`).

### Views

-   **Start page** `/`:
    All pages has the same layout: Header, Content page, Subscription, Footer and Copyright. The start page shows a promotional slider with two slides. Has a section of features of this fake business. Has a section for showing the best sellers products, and has a section for showing some reviews. This page is available without authentication.

-   **Products list** `/products`:
    Contains all products availables in the application. You can navigate to a product details page clicking in its image or its name. You can add any product to the shopping cart from this page. This page is available without authentication.

-   **Product details** `/products/:url`:
    Shows detailed information of a specific product. Also, you can add it to the shopping. Strategically like famous e-commerce applications this page includes a Reviews section. This page is available without authentication.

-   **Checkout** `/checkout`:
    Shows a form with shipping, billing and payment information. Also shows the order summary.

-   **Thanks you** `/thank-you`:
    This page is showed once you have completed your purchase. You can not access to this page directly.

-   **Sign in** `/signin`:
    Shows a form for sign in users. The default credentials are in the [Authentication](#authentication) section of this document.

-   **Orders** `/orders`:
    Shows a table with details of all your purchases including a button to print this table. This page is only accessible after successful sign in.

-   **Profile** `/profile`:
    Shows the currently authenticated user information which includes the location using Html5 **geolocation** API.

## Build & deploy

This project is available on github at https://github.com/pedegago/musala-ecommerce-storefront. In order to deploy this application was configured an account on https://www.heroku.com. This account is configured to build and deploy automatically the branch master of the repository. So **heruku** is our automated build tool. The deployed url is in https://musala-artworks-frontend.herokuapp.com
