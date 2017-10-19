(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = () => {
      var roomCount = rooms.length;
      rooms.$add({'$value': "room" + (roomCount + 1)}).then(function(ref) { console.log(ref.key); });
//{"$value":"room1","$id":"room1"
      console.log(rooms);
    }

    return Room;
  }

  angular
      .module('basicChat')
      .factory('Room', ['$firebaseArray', Room]);
})();
