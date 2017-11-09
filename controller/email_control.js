

myapp.controller('patient_emailCtrl', function ($scope,$location,$anchorScroll, $mdDialog, $window, $http,$timeout,blockUI,$mdSidenav,$mdPainLessToast,sessionService,$route,$rootScope,$sce,$filter) {

$rootScope.padding_hotfix = '0px';
 var id = $location.hash();
$location.hash('top');
$anchorScroll();
$location.hash(id);
var page_type = $route.current.$$route.page_type;

//console.log('service page_type'+page_type);

if(page_type == 'admin')
{
  angular.element('md-sidenav').removeClass('close');
   angular.element('md-sidenav').addClass('md-locked-open');
   angular.element('md-sidenav').addClass('open');
  $rootScope.admin_menu = false;
  $rootScope.patient_menu = true;
}else if (page_type == 'external')
{
  angular.element('md-sidenav').removeClass('md-locked-open');
   angular.element('md-toolbar').addClass('display_none');
   angular.element('section').addClass('active');
 
 
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


  $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }


  
});



myapp.controller('physician_emailCtrl', function ($scope,$location,$anchorScroll, $mdDialog, $window, $http,$timeout,blockUI,$mdSidenav,$mdPainLessToast,sessionService,$route,$rootScope,$sce,$filter) {

$rootScope.padding_hotfix = '0px';
 var id = $location.hash();
$location.hash('top');
$anchorScroll();
$location.hash(id);
var page_type = $route.current.$$route.page_type;

//console.log('service page_type'+page_type);

if(page_type == 'admin')
{
  angular.element('md-sidenav').removeClass('close');
   angular.element('md-sidenav').addClass('md-locked-open');
   angular.element('md-sidenav').addClass('open');
  $rootScope.admin_menu = false;
  $rootScope.patient_menu = true;
}else if (page_type == 'external')
{
  angular.element('md-sidenav').removeClass('md-locked-open');
  angular.element('md-toolbar').addClass('display_none');
  angular.element('section').addClass('active');
 
 
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


  $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }


  
});


myapp.controller('campaign_emailCtrl', function ($scope,$location,$anchorScroll, $mdDialog, $window, $http,$timeout,blockUI,$mdSidenav,$mdPainLessToast,sessionService,$route,$rootScope,$sce,$filter) {

$scope.go = function ( path ) {
  $rootScope.selectedTab = 3;
  $location.path( path );
  
};

var page_type = $route.current.$$route.page_type;
 var id = $location.hash();
$location.hash('top');
$anchorScroll();
$location.hash(id);
$rootScope.padding_hotfix = '0px';

//console.log('service page_type'+page_type);

if(page_type == 'admin')
{
  angular.element('md-sidenav').removeClass('close');
   angular.element('md-sidenav').addClass('md-locked-open');
   angular.element('md-sidenav').addClass('open');
  $rootScope.admin_menu = false;
  $rootScope.patient_menu = true;
}else if (page_type == 'external')
{
  angular.element('md-sidenav').removeClass('md-locked-open');
  angular.element('md-toolbar').addClass('display_none');
   angular.element('section').addClass('active');
 
 
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


  $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }


  
});


myapp.controller('patientemail_landingCtrl', function($http,$scope,$timeout,$location,sessionService,$route,$rootScope) {

  //console.log('inside patientemail_landingCtrl');


// layout based on session begins

//console.log('patient_landingCtrl page');

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
   $rootScope.patient_menu = true;
}

// layout based on session ends

  // angular.element('md-sidenav').removeClass('md-locked-open');
  // angular.element('md-sidenav').addClass('close');

  // $scope.is_step2 = false;

    // $scope.next_fun = function(){
    //  $scope.is_step2 = false;
    // }
$scope.show_fun = function(){

$scope.continue_1 += 1;



}
    $scope.show_gender_fun = function(){

      $scope.show_age = true;
      $scope.show_gender = true;

      $scope.step2 = true;
  angular.element('.step2').addClass('visited');


        };

    $scope.show_HDL_fun = function(){

      //console.log($scope.gender);

      $scope.show_gender = false;
      $scope.show_HDL = true;
      $scope.step3 = true;
  angular.element('.step3').addClass('visited');

        };

        $scope.show_allergy_fun = function(){

      $scope.show_HDL = false;      
      $scope.show_allergy = true;
      $scope.step4 = true;
  angular.element('.step4').addClass('visited');

        };

        $scope.show_statin_fun = function(){

      $scope.show_allergy = false;
      $scope.show_acid = true;
      $scope.step5 = true;
  angular.element('.step5').addClass('visited');

        }
        $scope.show_acid_fun = function(){
      $scope.show_statin = false;
      $scope.show_acid = true;
      $scope.step6 = true;
  angular.element('.step6').addClass('visited');  

        }

        $scope.show_form_fun = function(){
      $scope.show_question_area = true;
      $scope.show_form = true;
         
        }

// form_view

         $scope.show_final_fun = function(){

      //$scope.show_statin = false;
      $scope.show_success_msg = true;
      $scope.failure_time = true;
      $scope.finalsubm = true;
      /*$timeout(function() {
        // Stop the block after some async operation.
        angular.element('md-sidenav').addClass('md-locked-open');
        angular.element('md-sidenav').removeClass('close');
        angular.element('md-sidenav').addClass('open');

        $location.path( "/home" );

      }, 3000);*/
        }
        $scope.complete = function(){

           angular.element('md-sidenav').addClass('md-locked-open');
        angular.element('md-sidenav').removeClass('close');
        angular.element('md-sidenav').addClass('open');

        $location.path( "/home" );
        }


          $scope.show_final_fail_fun = function(){

      //$scope.show_statin = false;
      $scope.show_failure_msg = true;
      $scope.show_question_area = true;
      $scope.failure_time = true;
      $scope.finalsubm = true;
        }


});

myapp.controller('patient_landingCtrl', function($http,$scope,$timeout,$location,sessionService,$route,$rootScope) {

  //console.log('inside patient_landingCtrl');


// layout based on session begins

//console.log('patient_landingCtrl page');

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
   $rootScope.patient_menu = true;
}

// layout based on session ends

  // angular.element('md-sidenav').removeClass('md-locked-open');
  // angular.element('md-sidenav').addClass('close');

  // $scope.is_step2 = false;

    // $scope.next_fun = function(){
    //  $scope.is_step2 = false;
    // }
$scope.show_fun = function(){

$scope.continue_1 += 1;



}
    $scope.show_gender_fun = function(){

      $scope.show_age = true;
      $scope.show_gender = true;

      $scope.step2 = true;
  angular.element('.step2').addClass('visited');


        };

    $scope.show_HDL_fun = function(){

      //console.log($scope.gender);

      $scope.show_gender = false;
      $scope.show_HDL = true;
      $scope.step3 = true;
  angular.element('.step3').addClass('visited');

        };

        $scope.show_allergy_fun = function(){

      $scope.show_HDL = false;      
      $scope.show_allergy = true;
      $scope.step4 = true;
  angular.element('.step4').addClass('visited');

        };

        $scope.show_statin_fun = function(){

      $scope.show_allergy = false;
      $scope.show_acid = true;
      $scope.step5 = true;
  angular.element('.step5').addClass('visited');

        }
        $scope.show_acid_fun = function(){
      $scope.show_statin = false;
      $scope.show_acid = true;
      $scope.step6 = true;
  angular.element('.step6').addClass('visited');  

        }

        $scope.show_form_fun = function(){
      $scope.show_question_area = true;
      $scope.show_form = true;
         
        }

// form_view

         $scope.show_final_fun = function(){

      //$scope.show_statin = false;
      $scope.show_success_msg = true;
      $scope.failure_time = true;
      $scope.finalsubm = true;
      /*$timeout(function() {
        // Stop the block after some async operation.
        angular.element('md-sidenav').addClass('md-locked-open');
        angular.element('md-sidenav').removeClass('close');
        angular.element('md-sidenav').addClass('open');

        $location.path( "/home" );

      }, 3000);*/
        }
        $scope.complete = function(){

           angular.element('md-sidenav').addClass('md-locked-open');
        angular.element('md-sidenav').removeClass('close');
        angular.element('md-sidenav').addClass('open');

        $location.path( "/home" );
        }


          $scope.show_final_fail_fun = function(){

      //$scope.show_statin = false;
      $scope.show_failure_msg = true;
      $scope.show_question_area = true;
      $scope.failure_time = true;
      $scope.finalsubm = true;
        }

});



myapp.controller('community_pageController', function($route,$rootScope,sessionService,$location,$anchorScroll) {

// layout based on session begins
 var id = $location.hash();
$location.hash('top');
$anchorScroll();
$location.hash(id);
//console.log('community page');

$rootScope.padding_hotfix = '0px';

var page_type = $route.current.$$route.page_type;

//console.log('service page_type'+page_type);

if(page_type == 'admin')
{
  angular.element('md-sidenav').removeClass('close');
   angular.element('md-sidenav').addClass('md-locked-open');
   angular.element('md-sidenav').addClass('open');
  $rootScope.admin_menu = false;
  $rootScope.patient_menu = true;
}else if (page_type == 'external_page')
{

angular.element('md-sidenav').removeClass('md-locked-open');
   angular.element('md-toolbar').addClass('display_none');
   angular.element('section').addClass('active');
 
 
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


});


myapp.controller('community_landingCtrl', ['$scope','$routeParams','$route','$location','sessionService','$rootScope', function ($scope,$routeParams,$route,$location,sessionService,$rootScope)
{
// layout based on session begins

//console.log('login page');

$rootScope.padding_hotfix = '55px';
// layout based on session begins

//console.log('my trials page');

var styleArray = [ //any style array defined in the google documentation you linked
  {
    featureType: "all",
    stylers: [
      { saturation: -80 }
    ]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { hue: "#00ffee" },
      { saturation: 50 }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];
$scope.options = {
   styles: styleArray
};
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
   angular.element('md-toolbar').removeClass('display_none');
   angular.element('section').removeClass('active');
}

// layout based on session ends

// layout based on session ends
}]);

// myapp.controller('loginCtrl', [function($rootScope) {



myapp.controller('patient_campaign_landingController', function($scope,$http,$route,sessionService,$rootScope) {


// layout based on session begins

$rootScope.padding_hotfix = '55px';

//console.log('my trials page');

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
  //console.log("inside no session")

   angular.element('md-sidenav').removeClass('md-locked-open');
   angular.element('md-sidenav').addClass('close');
    angular.element('md-toolbar').removeClass('display_none');
   angular.element('section').removeClass('active');
   $rootScope.admin_menu = true;
   $rootScope.patient_menu = true;
}

// layout based on session ends


});