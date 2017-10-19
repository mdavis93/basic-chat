(function() {
  function RoomCtrl(Room) {
      this.room = Room;
      this.rooms = Room.all;
      this.testMessage = Room.testMessage;
  }

  angular
      .module('basicChat')
      .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
