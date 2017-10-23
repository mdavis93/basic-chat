(function() {
  function ModalCtrl($uibModal, Room) {

    var room = Room;
    this.animationsEnabled = true;

    this.open = (size, parentSelector) => {
      var modalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        templateUrl: '/../../templates/modals/NewRoomModal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: 'modal',
        size: size
      });

      modalInstance.result.then(function(name) {
        // Execute this code if the result is "OK"
        room.create(name);
        console.log('Name: ' + name);
      }, function (error) {
        //console.log(`Error: ${error}`);
        return;
      });
    };
  }

  angular
      .module('basicChat')
      .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();
