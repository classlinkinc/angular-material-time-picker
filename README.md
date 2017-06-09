[![npm version](https://badge.fury.io/js/angular-material-time-picker.svg)](https://badge.fury.io/js/angular-material-time-picker)

# Angular Material Time Picker (md-time-picker)

Angular Material has a date picker, but no time picker.  This module is an effort to implement a time picker in [Angular Material](https://material.angularjs.org/latest/).  

The modal popup is based off [mdPickers](https://github.com/alenaksu/mdPickers), but with modifications for 24 hour time, removal of dependency on momentjs, and improvements in usability.

The "time input field" is made up of three individual text inputs for hour, minute, and meridiem.  This allows better cross browser support, especially for older browsers that do not support time input.

* [Screenshots](#screenshots)
* [Demo](#demo)
* [Requirements](#requirements)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Screenshots

#### On page

12 hour | 24 hour
--------|--------
![12 Hour](/img/time-picker-12.PNG?raw=true) | ![24 hour](/img/time-picker-24.PNG?raw=true)

#### Modal

12 Hour | 24 Hour | Minute
--------|---------|--------
![12Hour](/img/modal-hour-12.PNG?raw=true) | ![24 hour](/img/modal-hour-24.PNG?raw=true) | ![Minute](/img/modal-minute.PNG?raw=true)

## Demo

A live [Codepen demo](http://codepen.io/mattbajorek/pen/OpGVyv).  The same html/css file is also included in the `demoApp` folder.

## Requirements

* 1.5.0 < AngularJS < 2 (angular-messages, angular-animate, angular-aria)
* Angular Material > 1
* Material Icons

## Installation

#### Using npm

```
npm install angular-material-time-picker --save
```

You may use Webpack to inject this module into your application.

#### ES5
```javascript
require('angular-material-time-picker/dist/md-time-picker.css');
var ngTimePicker = require('angular-material-time-picker');
angular.module('myApp', [ngTimePicker]);
```

#### ES6
```javascript
import 'angular-material-time-picker/dist/md-time-picker.css';
import ngTimePicker from 'angular-material-time-picker';
angular.module('myApp', [ngTimePicker]);
```

## Usage

**Example Controller**

```javascript
angular.module('demoApp')

.controller('demoAppController', ['$scope','$mdpTimePicker', function($scope) {

    // Model bound to input fields and modal
    $scope.time = new Date();

    // Optional message to display below each input field
    $scope.message = {
      hour: 'Hour is required',
      minute: 'Minute is required',
      meridiem: 'Meridiem is required'
    }

    $scope.readonly = false;

    $scope.required = true;

}]);
```

**Example Template**

```html
<md-time-picker ng-model="time" message="message" read-only="readonly" mandatory="required" no-meridiem no-auto-switch></md-time-picker>
```
**Optional Attributes**
* **message** (takes an object with keys: hour, minute, and meridiem)
* **no-meridiem** (changes time picker to 24 hour time, 12 hour time is default)
* **no-auto-switch** (stops modal from switching to minutes automatically after an hour is pressed)
* **read-only** (set read only on input. Accepts true or false)
* **mandatory** (input will be validated as required if true. Accepts true or false).

## License

This software is provided free of charge and without restriction under the [MIT License](LICENSE.md)
