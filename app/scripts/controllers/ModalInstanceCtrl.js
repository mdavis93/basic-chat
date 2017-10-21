(function() {
  function ModalInstanceCtrl( $uibModalInstance ) {
    this.ok =  function()  {

      console.log('this.name = ' + this.name);
      $uibModalInstance.close(this.name);
    };

    this.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
      .module('basicChat')
      .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
