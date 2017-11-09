
myapp.controller('analyticCtrl', function ($scope, $mdDialog, $window, $http,sessionService) {

$http.get('assets/json/trial_list.json')
.success(function(data){
   console.log(data);
    $scope.trial_list = data;
});

$scope.showCustom = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true, 
                  templateUrl: 'pages/dialog1.tmpl.html',          
                 
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };
         

      
         
         
$scope.showControl = function(value){
// console.log('hellow');
   $mdDialog.hide(value);
   //$scope.hide_dialog = 1;
   $scope.collapsiblebody = 1;
   
};

         
$scope.hideDialog = function(value){
// console.log('hellow');
   $mdDialog.hide(value);
   
};

 $scope.toppings = [
    { name: 'Pepperoni', wanted: true },
    { name: 'Sausage', wanted: false },
    { name: 'Black Olives', wanted: true },
    { name: 'Green Peppers', wanted: false }
  ];

   
});




