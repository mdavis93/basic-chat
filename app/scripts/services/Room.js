(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = (name) => {
      var roomCount = rooms.length;
      rooms.$add({'$value': name}).then(function() { console.log(name); });
//{"$value":"room1","$id":"room1"
      console.log(rooms);
    }

    Room.delete = (name) => {
      rooms.$remove(name).then( function(error) { console.log(error); });
    }

    return Room;
  }

  angular
      .module('basicChat')
      .factory('Room', ['$firebaseArray', Room]);
})();
