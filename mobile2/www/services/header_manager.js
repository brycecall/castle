app.factory('header_manager', function ($rootScope) {
  var public = {};
  var private = {};

  public.action = null;
  public.enabled = true;
  public.mode = HEADER_MODES.Default;

  public.enable = function () {
    public.enabled = true;
    if (public.mode === HEADER_MODES.Action && public.action == null) {
      throw {
        "NoActions": "There are no actions to perform. The action button will display when actions are added."
      }
    }
  }

  public.disable = function () {
    public.enabled = false;
  }

  public.setAction = function (name, icon, method, classname) {
    if (name && icon && method) {
      public.action = {
        name: name,
        icon: icon,
        method: method,
        classname: classname
      };
    } else {
      throw {
        "InvalidParameters": "Please provide a name, icon, and method in order to add an action to floating action button."
      }
    }
  }

  public.clearAction = function () {
    public.action = null;
    public.enable();
    public.mode = HEADER_MODES.Default;
  }

  return public;
});

app.controller('header', function ($scope, $rootScope, header_manager) {
  $scope.service = header_manager;

  $scope.run = function (method) {
    method();
  }
});

app.run(function ($transitions, header_manager) {
  $transitions.onStart({}, function () {
    header_manager.clearAction();
  });
});

var HEADER_MODES = {
  Default: 1,
  Action: 2,
  Title: 3
};
