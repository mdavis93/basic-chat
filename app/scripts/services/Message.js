(function() {
  function Message($firebaseArray, $cookies, $filter) {
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);

    return {
      getByRoomId: function(roomId) {
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      },
      send: function(newMessage, currentRoom) {
        var post = {
          content: newMessage,
          username: $cookies.get('blocChatCurrentUser'),
          roomId: currentRoom.$id,
          sentAt: Date.now()
        };

        messages.$add(post);
        this.message = '';
      },
      delete: (msgToDel) => {
        messages.$remove(messages.$getRecord(msgToDel.$id));
      }
    };
  }

  angular
      .module('basicChat')
      .factory('Message', ['$firebaseArray', '$cookies', '$filter', Message]);
})();
