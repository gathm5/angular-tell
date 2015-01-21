# angular-tell #

angular-tell is a very simple library to create an `Event-Driven Architecture` on the angular views.

This library makes maximum use of angular's $broadcast and $emit.

#### Why use angular-tell?

angular-tell lets you add an unique name/id for the view from which you can simply bubble/capture the event to the parent/child views.

### Installation

```bower install -S angular-tell```

or download and add the file release/angular-tell.js to your webpage.

### Usage

use `ng-tell` directive and assign a name/id

```<div class="some-class" ui-view="view-name-if-used" ng-tell="UNIQUE ID"></div>```

You can inject `$Tell` into your application (controller/service/factory/directive/filter)

To trigger the event in child views

```$Tell.children('UNIQUE ID', 'EVENT NAME', EVENT_PARAMS);```

To trigger the event in parent views.

```$Tell.parents('UNIQUE ID', 'EVENT NAME', EVENT_PARAMS);```


** This component is to avoid broadcasting from $rootScope everytime and also helps you to easily maintain an event library for code maintenance. **
