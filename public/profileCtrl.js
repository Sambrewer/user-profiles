angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	$scope.getFriends = function() { friendService.getFriends().then(function(response) {
		$scope.friends = response.friends;
		$scope.currentUser = response.currentUser;
	});
}
	$scope.getFriends();
	console.log($scope.friends)
});
