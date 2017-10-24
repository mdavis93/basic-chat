(function() {
  function UsernameModalInstanceCtrl($uibModalInstance) {

    this.ok = (userName) => {
      $uibModalInstance.close(userName.trim());
    }
  }

  angular
      .module('basicChat')
      .controller('UsernameModalInstanceCtrl', ['$uibModalInstance', UsernameModalInstanceCtrl]);
})();
