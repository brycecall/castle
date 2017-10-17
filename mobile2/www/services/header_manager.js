app.factory('header_manager', function ($rootScope) {
  var public = {};
  var private = {};

  public.action = null;
  public.enabled = true;
  public.mode = HEADER_MODES.Action;
  public.title = "";
  public.theme = "default";
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
    public.setAction("Back", 'back', private.back);
    public.title = "Castle";
    public.mode = HEADER_MODES.Action;
    public.theme = "default";
    public.enable();
  }

  private.back = function () {
    window.history.back();
  }

  public.clearAction();
  return public;
});

app.controller('header', function ($scope, $rootScope, header_manager) {
  $scope.service = header_manager;
  
  $scope.run = function (method) {
    method();
  }
});

// Rest on page transitions
app.run(function ($transitions, header_manager) {
  $transitions.onExit({}, function () {
    header_manager.clearAction();
  });
});

// Override the back button to sync with the action header
app.run(function (header_manager) {
  document.addEventListener("backbutton", function (event) {
    if (header_manager.action && header_manager.mode == HEADER_MODES.Action) {
      header_manager.action.method();
    } else {
      event.preventDefault();
    }
  }, true);
});

var HEADER_MODES = {
  Home: 1,
  Action: 2,
  Title: 3
};
