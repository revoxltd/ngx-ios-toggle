# Pages iOS Toggle
[![Build Status](https://travis-ci.org/revoxltd/pg-ios-toggle.svg?branch=master)](https://travis-ci.org/revoxltd/pg-ios-toggle)
[![codecov](https://codecov.io/gh/revoxltd/pg-ios-toggle/branch/master/graph/badge.svg)](https://codecov.io/gh/revoxltd/pg-ios-toggle)
[![npm version](https://badge.fury.io/js/ngx-ios-toggle.svg)](http://badge.fury.io/js/ngx-ios-toggle)
[![devDependency Status](https://david-dm.org/revoxltd/pg-ios-toggle/dev-status.svg)](https://david-dm.org/revoxltd/pg-ios-toggle?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/revoxltd/pg-ios-toggle.svg)](https://github.com/revoxltd/pg-ios-toggle/issues)
[![GitHub stars](https://img.shields.io/github/stars/revoxltd/pg-ios-toggle.svg)](https://github.com/revoxltd/pg-ios-toggle/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/revoxltd/pg-ios-toggle/master/LICENSE)

## Demo
https://revoxltd.github.io/pg-ios-toggle/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

iOS inspired toggle for Angular 5 / 6

## Installation

Install through npm:
```
npm install --save ngx-ios-toggle
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { IosToggleModule } from 'ngx-ios-toggle';

@NgModule({
  imports: [
    IosToggleModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/revoxltd/pg-ios-toggle/blob/master/demo/demo.component.ts).

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://revoxltd.github.io/pg-ios-toggle/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
