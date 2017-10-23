(function() {
  function Message($firebaseArray, $filter) {
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);

    return {
       getByRoomId: function(roomId) {
           return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
       },
        send: function(newMessage, currentRoom) {
            var date = new Date();
            var post = {
                content: newMessage,
                username: 'TestUser',
                roomId: currentRoom.$id,
                sentAt: date
            };
            messages.$add(post);
            this.message = '';
        }
    };
  }

  angular
      .module('basicChat')
      .factory('Message', ['$firebaseArray', '$filter', Message]);
})();
