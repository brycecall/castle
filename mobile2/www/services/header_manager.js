app.factory('header_manager', function ($rootScope, $timeout) {
  var public = {};
  var private = {};

  public.action = null;
  public.actions = [];
  public.enabled = true;
  public.mode = HEADER_MODES.Action;
  public.title = "";
  public.theme = "default";
  
  public.enable = function () {
    public.enabled = true;
    if (public.mode === HEADER_MODES.Action && public.action == null) {
      console.error("There are no actions to perform. The action button will display when actions are added.");
    }
  }

  public.disable = function () {
    public.enabled = false;
  }

  // NOTE: Action function set the action on the left (actions allow for multiple actions on the right of header)
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
    public.mode = HEADER_MODES.Action;
    public.enable();
  }

  private.back = function () {
    window.history.back();
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
        "InvalidParameters": "Please provide a name, icon, and method in order to add an action to the header."
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
    public.mode = HEADER_MODES.Action;
  }

  public.clearAction();
  public.clearActions();
  return public;
});

app.controller('header', function ($scope, $rootScope, $mdMenu, header_manager) {
  $scope.service = header_manager;

  $scope.run = function (method) {
    method();
  }
});

// Rest on page transitions
app.run(function ($transitions, header_manager) {
  $transitions.onExit({}, function () {
    header_manager.clearAction();
    header_manager.clearActions();
    header_manager.title = "Castle";
  });
});

// Override the back button to sync with the action header
app.run(function (header_manager) {
  // Override the back button functionality
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
