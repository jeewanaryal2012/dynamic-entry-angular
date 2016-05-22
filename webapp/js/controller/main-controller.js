

app.controller("main-controller", ["$scope", "$localStorage", "$timeout", function($scope, $localStorage, $timeout) {

    var dummyData = [{
        "type": "Developer",
        "name": "Ryan",
        "title": "PHP Developer",
        "phone": "123-456-7890",
        "ext": "1234",
        "fax": "123-456-7890",
        "email": "ryan@abc.com"
    }, {
        "type": "Jr. Developer",
        "name": "Chris",
        "title": "Java Developer",
        "phone": "123-456-7890",
        "ext": "1234",
        "fax": "123-456-7890",
        "email": "chris@abc.com"
    }, {
        "type": "Sr. Developer",
        "name": "Bob",
        "title": "UI Developer",
        "phone": "123-456-7890",
        "ext": "1234",
        "fax": "123-456-7890",
        "email": "bob@abc.com"
    }];

    $scope.showDelete = false;
    $scope.show = false;
    $scope.arr = ($localStorage.localData===undefined) ? dummyData : $localStorage.localData;
    $scope.showForm = function() {
        $scope.show = true;
    };

    $scope.submitForm = function() {
        if($scope.formData !== undefined) {
            $scope.show = false;
            $scope.arr.push($scope.formData);
            $localStorage.localData = $scope.arr;
            $scope.formData = {};
            $scope.formData.email = "";
        } else {
            alert("Form can not be empty. Enter at least one value.");
        }
    };
    $scope.closeForm = function() {
        $scope.show = false;
    };


    $scope.checkboxClicked = function(i, a) {
        $scope.chk = [];
        angular.forEach(a, function(k, v) {
            if(k.checked === undefined) {
                $scope.chk.push(false);
            } else {
                $scope.chk.push(k.checked);
            }
        });
        $scope.showDelete = $scope.chk.indexOf(true) > -1;

    };

    $scope.deleteClicked = function() {
        for (var i = ($scope.chk).length - 1; i >= 0; i--) {
            if($scope.chk[i] === true) {
                $scope.arr.splice(i, 1);
                $localStorage.localData = $scope.arr;
            }
        }
        $scope.showDelete = false;
    };

}]);