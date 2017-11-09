'use strict';
myapp.controller('my_trialsCtrl', ['$scope','$mdDialog','$http','$route','sessionService','$rootScope', '$location', '$anchorScroll' , function($scope, $mdDialog, $http,$route,sessionService,$rootScope,$location,$anchorScroll) {

 var id = $location.hash();
$location.hash('top');
$anchorScroll();
$location.hash(id);
$rootScope.padding_hotfix = '55px';
var originatorEv;

    $scope.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };


// layout based on session begins

//console.log('my trials page');
$scope.currentValue = 8;
$scope.maxValue     = 14;

$scope.loadingCurrent1 = {
    backgroundColor: "#35792a"
}
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
   angular.element('md-toolbar').removeClass('display_none');
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


}]);


myapp.controller('loginCtrl', ['$scope','$routeParams','$route','$location','sessionService','$rootScope', function ($scope,$routeParams,$route,$location,sessionService,$rootScope)
{
// layout based on session begins

//console.log('login page');

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
}]);

// myapp.controller('loginCtrl', [function($rootScope) {


myapp.controller('patientlandingCtrl', function($http,$scope, $mdDialog,$route,sessionService,$rootScope) {

// layout based on session begins

//console.log('patient landing page');

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


  $http.get('assets/json/trial_search.json')
       .then(function(res12){
          $scope.trialsearch = res12.data;
    });
       


  $scope.showdetail=function(){
    if ($scope.patientdetail==true){
      $scope.patientdetail=false;
    }
    else{
      $scope.patientdetail=true;
      $scope.adv_sch_list=false;
      $scope.browse_by_topics=false;
    }
    
  }
  $scope.advsearch=function(){
    if ($scope.adv_sch_list==true){
      $scope.adv_sch_list=false;
    }
    else{
      $scope.adv_sch_list=true;
      $scope.patientdetail=false;
      $scope.browse_by_topics=false;
    }
  }
  $scope.topicbrowse=function(){
    if ($scope.browse_by_topics==true){
      $scope.browse_by_topics=false;
    }
    else{
      $scope.browse_by_topics=true;
      $scope.adv_sch_list=false;
      $scope.patientdetail=false;
    }
  }
  
});

myapp.controller('saved_trialsCtrl', ['$scope','$mdDialog','$http','$route','sessionService','$rootScope',function($scope, $mdDialog, $http,$route,sessionService,$rootScope) {

// layout based on session begins

//console.log('Saved Trial page');

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

    $http.get('assets/json/trial_search.json')
       .then(function(res12){
          $scope.trialsearch = res12.data;
    });
    $http.get('assets/json/trial_search_completed.json')
       .then(function(res2){
          $scope.trialsearchcompleted = res2.data;
    });
}]);

myapp.controller('account_settingCtrl', function ($scope, $mdDialog, $window,$route,$rootScope,$location,$anchorScroll) {

// layout based on session begins


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


});