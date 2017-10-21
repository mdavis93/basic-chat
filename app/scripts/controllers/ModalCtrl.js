(function() {
  function ModalCtrl($uibModal, $document, Room) {

    var room = Room;
    this.animationsEnabled = true;

    this.open = (size, parentSelector) => {
      var parentElem = parentSelector ?
              angular.element($document[0].querySelector('.newRoomModal ' + parentSelector)) : undefined;

      var modalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        templateUrl: '/../../templates/modals/NewRoomModal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: 'modal',
        size: size,
        appendTo: parentElem
      });

      modalInstance.result.then(function(name) {
        // Execute this code if the result is "OK"
        room.add(name);
        console.log('Name: ' + name);
      }, function () { return; });
    };
  }

  angular
      .module('basicChat')
      .controller('ModalCtrl', ['$uibModal', '$document', 'Room', ModalCtrl]);
})();
