

myapp.controller('outreachCtrl', function ($scope, $mdDialog, $window,sessionService,$route,$rootScope,$sce,$anchorScroll,$location) {

// layout based on session begins

 var id = $location.hash();
$location.hash('top');
$anchorScroll();
$location.hash(id);

$scope.outreach_summary= $sce.trustAsResourceUrl("pages/outreach_line_overview.html"); 
$scope.outreach_location= $sce.trustAsResourceUrl("pages/geo_overview.html");

var page_type = $route.current.$$route.page_type;

console.log('service page_type'+page_type);

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

$scope.showAlert = showAlert;
function showAlert() {
      alert = $mdDialog.alert()
        .title('Conditions' )
        .content('jones')
        .ok('OK');

      $mdDialog
          .show( alert )
          .finally(function() {
            alert = undefined;
          });
    }
$scope.scroll = function () {
        $window.scrollTo(0, angular.element(document.getElementById('div1')).offsetTop);  
        // $window.scrollTo(0, 0);  
      };



	
});
