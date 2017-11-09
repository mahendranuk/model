
myapp.controller('trialCtrl', function ( $http, $scope, $mdDialog, $window,$route,$rootScope,$sce) {

$scope.recruiting_results= $sce.trustAsResourceUrl("pages/result_chart.html");
$scope.outreach_physician= $sce.trustAsResourceUrl("pages/outreach_phy.html");
$scope.outreach_channel= $sce.trustAsResourceUrl("pages/outreach_channel.html");

// layout based on session begins

//console.log('trial page');

var page_type = $route.current.$$route.page_type;

//console.log('service page_type'+page_type);

if(page_type == 'admin')
{
  angular.element('md-sidenav').removeClass('close');
   angular.element('md-sidenav').addClass('md-locked-open');
   angular.element('md-sidenav').addClass('open');
  $rootScope.admin_menu = false;
  $rootScope.patient_menu = true;
}else if (page_type == 'patient_session')
{
  angular.element('md-sidenav').removeClass('close');
   angular.element('md-sidenav').addClass('md-locked-open');
   angular.element('md-sidenav').addClass('open');
  $rootScope.admin_menu = true;
  $rootScope.patient_menu = false;
}else
{
   angular.element('md-sidenav').removeClass('md-locked-open');
   angular.element('md-sidenav').addClass('close');
   $rootScope.admin_menu = true;
   $rootScope.patient_menu = false;
}

// layout based on session ends

  $http.get('assets/json/trial_list_new.json')
       .then(function(res){
          
          //console.log($scope.trial_list) ;
$scope.parseId = function(val){
    $scope.trial_list.Pre_Screened = parseInt($scope.trial_list.Pre_Screened);
    $scope.trial_list.Identified = parseInt($scope.trial_list.Identified);
    $scope.trial_list.Qualified = parseInt($scope.trial_list.Qualified);
    $scope.trial_list.Enrolled = parseInt($scope.trial_list.Enrolled);
  }
    $scope.trial_list = res.data;    


        });


  $http.get('assets/json/completed_trials.json')
       .then(function(res){
          
          //console.log('inside completed trials') ;
    $scope.parseId = function(val){
        $scope.trial_list.Pre_Screened = parseInt($scope.trial_list.Pre_Screened);
        $scope.trial_list.Identified = parseInt($scope.trial_list.Identified);
        $scope.trial_list.Qualified = parseInt($scope.trial_list.Qualified);
        $scope.trial_list.Enrolled = parseInt($scope.trial_list.Enrolled);
      }
    $scope.completed_trial_list = res.data;    


        });

  $http.get('assets/json/draft_trials.json')
       .then(function(res){
          
          //console.log('inside draft trials') ;
    $scope.parseId = function(val){
        $scope.trial_list.Pre_Screened = parseInt($scope.trial_list.Pre_Screened);
        $scope.trial_list.Identified = parseInt($scope.trial_list.Identified);
        $scope.trial_list.Qualified = parseInt($scope.trial_list.Qualified);
        $scope.trial_list.Enrolled = parseInt($scope.trial_list.Enrolled);
      }
    $scope.draft_trial_list = res.data;    


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

$rootScope.selectedTab = 0;

   
});




