(function() {
  function HomeCtrl(Room, $scope) {

    this.Deleting = false;
    rooms = Room.all;

    rooms.$loaded().then(function(rooms) {
      room = rooms[0];

      $scope.activeRoom = room;
      console.log(`Active Room: ${$scope.activeRoom.$value}`);
    });

    this.rooms = rooms;

    /**
    * @func delRoom
    * @param {Object} room
    * @desc Delete 'room' from 'rooms' array
    **/
    this.delRoom = function(room) {
      console.log("Deleting " + room);
      Room.delete(room);
      this.toggleDelete();
    };

    /**
    * @func toggleDelete
    * @desc Toggles the ability to delete rooms On and Off
    **/
    this.toggleDelete = () => {
      this.Deleting = !this.Deleting;
      console.log("canDelete is " + (this.Deleting ? "enabled." : "disabled."));
    };

    this.changeRoom = (room) => {
      $scope.activeRoom = room;
    }

    /**
    * @func processClick
    * @param {Object} room
    * @desc Process user clicks on a room in a list of rooms
    **/
    this.processClick = (room) => {
      console.log(room);
      if (this.Deleting) {
        this.delRoom(room);
      } else {
        this.changeRoom(room);
      }
    };
  }

  angular
      .module('basicChat')
      .controller('HomeCtrl', ['Room', '$scope', HomeCtrl]);
})();
