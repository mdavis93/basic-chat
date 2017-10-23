(function() {
  function HomeCtrl(Room, $scope) {

    this.Deleting = false;
    rooms = Room.all;

    rooms.$loaded().then(function(rooms) {
      room = rooms[0];

      $scope.activeRoom = room;
    });

    this.rooms = rooms;

    /**
    * @func delRoom
    * @param {Object} room
    * @desc Delete 'room' from 'rooms' array
    **/
    this.delRoom = function(room) {
      Room.delete(room);
      this.toggleDelete();
    };

    /**
    * @func toggleDelete
    * @desc Toggles the ability to delete rooms On and Off
    **/
    this.toggleDelete = () => {
      this.Deleting = !this.Deleting;
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
      if (this.Deleting) {
        // If we're deleting the room we are in, let's leave it first.
        if ($scope.activeRoom === room) {
          var roomIndex = rooms.indexOf(room)
          $scope.activeRoom = roomIndex > 0 ? rooms[roomIndex - 1] : rooms.length > 0 ? rooms[rooms.length - 1] : null;
        }
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
