(function() {
    function ModalCtrl($uibModal, Room) {

      var addRoom = Room;
      this.animationsEnabeld - true;

      this.open = function (size, parentSelector) {
          var parentElem = parentSelector ?
              angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

        var modalInstance = $uibModal.open({
          animation: this.animationsEnabled,
          templateUrl: '/templates/newchatmodal.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: 'modal',
          size: size,
          appendTo: parentElem,
        });

        modalInstance.result.then(function(newRoom) {
          addRoom.add(newRoom);
        }, function () {
          $log.info('modal-component created at: ' + new Date());
          })
        }
    }

    angular
        .module('basicChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();
