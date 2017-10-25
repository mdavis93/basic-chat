(function() {
  function HomeCtrl(Room, Message, $document, $filter, $scope) {

    /**
    * @desc Boolean value denoting whether the user is deleting a room
    * @type {Boolean}
    **/
    this.Deleting = false;
    rooms = Room.all;

    rooms.$loaded().then(function(rooms) {
      room = rooms[0];

      $scope.activeRoom = room;
      if ($scope.activeRoom) {
        $scope.messages = Message.getByRoomId($scope.activeRoom.$id);
      }
    });

    this.toLocalTime = (date) => {
      return( $filter('date')(date, 'shortTime') );
    }

    /**
    * @desc Array of all rooms currently available
    * @type {Array}
    **/
    this.rooms = rooms;

    this.send = Message.send;

    /**
    * @func delRoom
    * @param {Object} room
    * @desc Delete 'room' from 'rooms' array
    **/
    this.delRoom = function(room) {
      Room.delete(room);
    };

    /**
    * @func toggleDelete
    * @desc Toggles the ability to delete rooms On and Off
    **/
    this.toggleDelete = () => {
      this.Deleting = !this.Deleting;
    };

    /**
    * @func changeRoom
    * @param {Object} room
    * @desc Changes the currently active room, setting it to 'room'.
    **/
    this.changeRoom = (room) => {
      $scope.activeRoom = room;
      $scope.messages = Message.getByRoomId($scope.activeRoom.$id);
    }

    /**
    * @func processClick
    * @param {Object} room
    * @desc Process user clicks on a room in a list of rooms
    **/
    /**** TODO AT THIS POINT, ROOM DELETION SHOULD BE BROKEN INTO A SERVICE ****/
    /****      PERHAPS THE ~~ROOM~~ SERVICE!                                ****/
    this.processClick = (room) => {
      if (this.Deleting) {
        this.toggleDelete();

        angular.forEach($scope.messages, function(value, key, obj) {
          if (value.roomId === $scope.activeRoom.$id) {
            Message.delete(value);
          }
        });

        // If we're deleting the room we are in, let's leave it first.
        if ($scope.activeRoom === room) {
          var roomIndex = rooms.indexOf(room)
          this.changeRoom( roomIndex > 0 ? rooms[roomIndex - 1] : rooms.length > 0 ? rooms[rooms.length - 1] : null );
        }
        this.delRoom(room);

      } else {
        this.changeRoom(room);
      }
    };
  }

  angular
      .module('basicChat')
      .controller('HomeCtrl', ['Room', 'Message', '$document', '$filter', '$scope', HomeCtrl]);
})();
