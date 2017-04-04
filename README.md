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
![12 Hour](/img/time-picker-12.png?raw=true "time-picker-12.PNG") | ![24 hour](/img/time-picker-24.png?raw=true "time-picker-24.PNG")

#### Modal

12 Hour | 24 Hour | Minute
--------|---------|--------
![12Hour](/img/modal-hour-12.png?raw=true "modal-hour-12.PNG") | ![24 hour](/img/modal-hour-24.png?raw=true "modal-hour-24.PNG") | ![Minute](/img/modal-minute.png?raw=true "modal-minute.PNG")

## Demo

A live [Codepen demo](http://codepen.io/mattbajorek/pen/OpGVyv).  The same html/css file is also included in the `demoApp` folder.

## Requirements

* 1.5.0 < AngularJS < 2 (angular-messages, angular-animate, angular-aria)
* Angular Material > 1
* Material Icons

## Installation

#### Using Bower

This package is installable through the Bower package manager.

```
bower install angular-material-time-picker --save
```

In your `index.html` file, include the data table module and style sheet.

```html
<!-- style sheet -->
<link href="bower_components/angular-material-time-picker/dist/md-time-picker.min.css" rel="stylesheet" type="text/css"/>
<!-- module -->
<script type="text/javascript" src="bower_components/angular-material-time-picker/dist/md-time-picker.min.js"></script>
```

Include the `md.time.picker` module as a dependency in your application.

```javascript
angular.module('myApp', ['ngMaterial', 'md.time.picker']);
```

#### Using npm

In addition, this package may be installed using npm.

```
npm install angular-material-time-picker --save
```

You may use Browserify to inject this module into your application.

```javascript
require('angular-material-time-picker/dist/md-time-picker.css');
var ngTimePicker = require('angular-material-time-picker');
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

}]);
```

**Example Template**

```html
<md-time-picker ng-model="time" message="message" no-meridiem no-auto-switch></md-time-picker>
```
**Optional Attributes**
* **message** (takes an object with keys: hour, minute, and meridiem)
* **no-meridiem** (changes time picker to 24 hour time, 12 hour time is default)
* **no-auto-switch** (stops modal from switching to minutes automatically after an hour is pressed)

## License

This software is provided free of charge and without restriction under the [MIT License](LICENSE.md)
