(function() {
  function HomeCtrl(Room, $scope) {
    
    this.canDelete = false;
    this.rooms = Room.all;

    this.delRoom = function(room) {
      console.log("Deleting " + room);
      Room.delete(room);
    }

    this.toggleDelete = () => {
      this.canDelete = !this.canDelete;
      console.log("canDelete is " + (this.canDelete ? "enabled." : "disabled."));
    }
  }

  angular
      .module('basicChat')
      .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
