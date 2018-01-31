app.factory('action_manager', function ($rootScope, $mdToast) {
  var public = {};
  var private = {};

  public.actions = [];
  public.enabled = true;
  public.mode = ACTION_MODES.Default;

  public.enable = function () {
    public.enabled = true;
    if (public.mode == ACTION_MODES.Action && public.actions.length <= 0) {
      throw {
        "NoActions": "There are no actions to perform. The action button will display when actions are added."
      }
    }
  }

  public.disable = function () {
    public.enabled = false;
  }

  public.addAction = function (name, icon, method, classname) {
    if (name && icon && method) {
      public.actions.push({
        name: name,
        icon: icon,
        method: method,
        classname: classname
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
    public.mode = ACTION_MODES.Default;
    public.enable();
  }

  public.showSuccessMessageToast = function(message) {
      $mdToast.show(
          $mdToast.simple()
          .textContent(message)
          .hideDelay(2000)
          .toastClass('toast-success')
      );
  }
  
  public.showFailureMesssageToast = function(message) {
      $mdToast.show(
          $mdToast.simple()
          .textContent(message)
          .hideDelay(2000)
          .toastClass('toast-failure')
      );
  }
  
  return public;
});

app.controller('action', function ($scope, $rootScope, $timeout, $window, action_manager) {
  $scope.service = action_manager;
  $scope.open = false;

  $scope.run = function (method) {
    method();
  }
});

// Reset the actions on every navigation
app.run(function ($transitions, action_manager) {
  $transitions.onExit({}, function () {
    action_manager.clearActions();
  });
});

var ACTION_MODES = {
  Default: 1,
  Action: 2,
  Toolbar: 3
};
