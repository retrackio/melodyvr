# MelodyVR

## Description

This is an application that displays a list of releases in either a grid or carousel view. A release can also be clicked to view additional details. The data used for this demo app comes from the http://demo6536168.mockable.io endpoint.

The application is a SPA (Single Page Application) that also does SSR (server side rendering). It uses Typescript, React and NextJS. The server uses Express. Unit tests are using Jest and Enzyme.

## Requirements

- Node 12.x
- Yarn 1.17.x

## Installation and running (development)

Please run the following to install all dependencies and start the application:

```bash
yarn
yarn dev
```

If everything went well, you should see the following message:

```
$ nodemon
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*
[nodemon] watching extensions: js,ts
[nodemon] starting `ts-node --project tsconfig.server.json src/`
info  - Loaded env from .env
event - compiled successfully
> 🚀 Ready on http://localhost:8080
```

Once everything is ready, just load [http://localhost:8080](http://localhost:8080).

## Bundle analyzer

In order to analyze the dependencies and their sizes please run:

```bash
yarn analyze
```

This will give you an overview of all libraries and packages used, both on the server and client.

## Building (production)

In order to build the application in production mode please run:

```bash
yarn build
```

This will build the entire application. The artefacts will be stored in the `.next` folder. You can then start the application in production mode by running `yarn start` or `node .next`.

## Testing & linting

In order to execute the unit tests and generate the code coverage please run:

```bash
yarn test
```

To run the linter please run:

```
yarn lint
```

## A few things to improve

There are a couple of things that can be improved:

1. Navigating between a release page and homepage (and vice versa) will always reload the data from the API endpoints. A stored local state can be introduced, either via Redux or something equivalent

2. Giving no local state is used, the view mode will not be remembered between pages

3. The carousel has no swipe functionality (either via touch or mouse interations)

4. There is no caching mechanism when it comes to talking to the API endpoints. Given this app does server side rendering, some caching can be introduced (either at the API client level or a simple HTTP caching if the page is not personalised)

5. The releases API endpoint exposes a `is_free` flag in the wrong position. Instead of the flag being attached to the `product` itself, it is attached to the `release` object. This means that once you load the additional product details, the `is_free` flag is lost. If the product has a `price` key and we also want to use a `is_free` flag, the flag should be part of the product data in order to keep things consistent
