app.factory('action', function ($rootScope) {
  var public = {};
  var private = {};

  public.actions = [];
  public.enabled = true;
  public.mode = ACTION_MODES.Action;

  public.enable = function () {
    public.enabled = true;
    if (public.mode != ACTION_MODES.Confirm && public.actions.length <= 0) {
      throw {
        "NoActions": "There are no actions to perform. The action button will display when actions are added."
      }
    }

  }

  public.disable = function () {
    public.enabled = false;
  }

  public.addAction = function (name, icon, method) {
    if (name && icon && method) {
      public.actions.push({
        name: name,
        icon: icon,
        method: method
      });
    } else {
      throw {
        "InvalidParameters": "Please provide a name, icon, and method in order to add an action to floating action button."
      }
    }
  }

  public.removeAction = function (name) {
    for (var index in public.actions) {
      if (public.actions[index].name === name) {
        public.actions.splice(index, 1);
      }
    }
  }

  public.clearActions = function () {
    public.actions = [];
    public.mode = ACTION_MODES.Action;
  }

  return public;
});

app.controller('action_manager', function ($scope, $rootScope, $timeout, $window, action) {

  /*
    $scope.$watch('service.mode', function (oldValue, newValue) {
      // Watch the open variable to update the tooltips
      
    }); */

  $scope.service = action;
  $scope.open = false;

  $scope.run = function (method) {
    method();
  }

  $scope.cancel = function () {
    $window.history.back();
  }
});

// Reset the actions on every navigation
app.run(function ($rootScope, $location, action) {
  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    action.clearActions();
  })
});

var ACTION_MODES = {
  Action: 1,
  Confirm: 2
};
