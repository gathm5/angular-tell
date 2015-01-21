'use strict';

(function () {
    angular && angular.module('ngTell', [])
        .factory('$$tellEventMgr', [
            function () {
                var scopeManager = {};
                return {
                    register: function (id, scope) {
                        scopeManager[id] = scope;
                    },
                    unRegister: function (id) {
                        delete scopeManager[id];
                    },
                    scope: function (id) {
                        return scopeManager[id];
                    },
                    reset: function () {
                        scopeManager = {};
                    }
                };
            }
        ])
        .factory('$Tell', [
            '$$tellEventMgr',
            function (EventManager) {
                function message(id, event, params) {
                    EventManager.scope(id).$broadcast(event, params);
                }

                return message;
            }
        ])
        .directive('ngTell', [
            '$$tellEventMgr', function (EventManager) {
                return {
                    restrict: 'A',
                    required: 'ngTell',
                    link: function postLink(scope, element, attrs) {
                        if (attrs.ngTell) {
                            EventManager.register(attrs.ngTell, scope, element);
                        }
                        scope.$on('$destroy', function () {
                            if (attrs.ngTell) {
                                EventManager.unRegister(attrs.ngTell);
                            }
                        });
                    }
                };
            }
        ]);
}());