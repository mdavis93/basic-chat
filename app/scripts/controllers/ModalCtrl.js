(function() {
  function ModalCtrl($uibModal, $document) {
    this.animationsEnabled = true;

    this.open = (size, parentSelector) => {
      var parentElem = parentSelector ?
              angular.element($document[0].querySelector('.newRoomModal ' + parentSelector)) : undefined;

      var modalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        templateUrl: '/../../templates/modals/NewRoomModal.html',
        size: size,
        appendTo: parentElem
      });

    };
  }

  angular
      .module('basicChat')
      .controller('ModalCtrl', ['$uibModal', ModalCtrl]);
})();
