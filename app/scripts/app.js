(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
        .html5Mode({
          enabled: true,
          requireBase: false
        });

    $stateProvider
        .state('home', {
          url: '/',
          controller: 'HomeCtrl as home',
          templateUrl: '/templates/home.html'
        });
  }

  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '../templates/modals/UsernameModal.html',
        controller: 'UsernameModalInstanceCtrl',
        controllerAs: 'modalUN',
        size: 'sm',
        backdrop: 'static',
        keyboard: false
      });

      modalInstance.result.then(function (usrname) {
        console.log(`modalInstance.result fired, usrname is '${usrname}'`);

        $cookies.put('blocChatCurrentUser', usrname);
        console.log(`Cookie value: ${$cookies.get('blocChatCurrentUser')}`);
      });
    }
  }

  angular
      .module('basicChat', ['ui.router', 'firebase', 'ngCookies', 'ui.bootstrap'])
      .config(config)
      .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
