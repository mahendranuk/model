myapp.controller('social_outreachCtrl', ['$http', '$mdEditDialog', '$q', '$timeout', '$scope','sessionService','$route','$rootScope', function ($http, $mdEditDialog, $q, $timeout, $scope,sessionService,$route,$rootScope) {
  'use strict';

  
// layout based on session begins

console.log('social outreach page');

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

  $http.get('assets/json/social_outreach.json').then(function (identifyData) {
    $scope.identifyData = identifyData.data;
  });

  $scope.editComment = function (event, identifyData) {
    event.stopPropagation();

    var dialog = {
      // messages: {
      //   test: 'I don\'t like tests!'
      // },
      modelValue: identifyData.comment,
      placeholder: 'Add a comment',
      save: function (input) {
        identifyData.comment = input.$modelValue;
      },
      targetEvent: event,
      title: 'Add a comment',
      validators: {
        'md-maxlength': 30
      }
    };

    var promise = $scope.options.largeEditDialog ? $mdEditDialog.large(dialog) : $mdEditDialog.small(dialog);

    promise.then(function (ctrl) {
      var input = ctrl.getInput();

      input.$viewChangeListeners.push(function () {
        input.$setValidity('test', input.$modelValue !== 'test');
      });
    });
  };

  $scope.toggleLimitOptions = function () {
    $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
  };

  $scope.getTypes = function () {
    return ['Candy', 'Ice cream', 'Other', 'Pastry'];
  };

  $scope.onPaginate = function(page, limit) {
    console.log('Scope Page: ' + $scope.query.page + ' Scope Limit: ' + $scope.query.limit);
    console.log('Page: ' + page + ' Limit: ' + limit);

    $scope.promise = $timeout(function () {

    }, 2000);
  };

  $scope.deselect = function (item) {
    console.log(item.name, 'was deselected');
  };

  $scope.log = function (item) {
    console.log(item.name, 'was selected');
  };

  $scope.loadStuff = function () {
    $scope.promise = $timeout(function () {

    }, 2000);
  };

  $scope.onReorder = function(order) {

    console.log('Scope Order: ' + $scope.query.order);
    console.log('Order: ' + order);

    $scope.promise = $timeout(function () {

    }, 2000);
  };
   $scope.state = ['Alabama' ,'Indiana' ,'Nebraska' ,'South Carolina' ,'Tennessee', 'Wisconsin'];
      $scope.searchTerm;
      $scope.clearSearchTerm = function() {
        $scope.searchTerm = '';
      };
      $scope.source = ['Data Lake' ,'MyQuest' ,'Amino' ,'Outreach'];
      $scope.searchTerm;
      $scope.clearSearchTerm = function() {
        $scope.searchTerm = '';
      };
      $scope.gender = ['Male' ,'Female'];
      $scope.searchTerm;
      $scope.clearSearchTerm = function() {
        $scope.searchTerm = '';
      };
      $scope.age = ['1-25 years' ,'25-50 years ','50-75 years','Above 75 years'];
      $scope.searchTerm;
      $scope.clearSearchTerm = function() {
        $scope.searchTerm = '';
      };
    $scope.min = 20;
$scope.max = 80;
$scope.lower = $scope.min;
$scope.upper = $scope.max;


'use strict';

  $scope.options = {
    rowSelection: true,
    multiSelect: true,
    autoSelect: true,
    decapitate: false,
    largeEditDialog: true,
    boundaryLinks: false,
    limitSelect: false,
    pageSelect: true
  };

  $scope.selected = [];
  $scope.limitOptions = [5, 10, 15, {
    label: 'All',
    value: function () {
      return $scope.identifyData ? $scope.identifyData.count : 0;
    }
  }];

  $scope.query = {
    order: 'name',
    limit: 5,
    page: 1
  }; 
  

}]);


myapp.controller('addsocialoutreachCtrl', function ($scope, $mdDialog, $window, $http,sessionService,$route,$rootScope) {

// layout based on session begins

console.log('social outreach page');

var page_type = $route.current.$$route.page_type;

console.log('service page_type'+page_type);
$scope.showfbpost = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true, 
                  templateUrl: 'pages/fb_post.html',          
                 
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });

                  $scope.hideDialog = function(value){
// console.log('hellow');
   $mdDialog.hide(value);
 }
            };

$scope.showtrend = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true, 
                  templateUrl: 'pages/trend_post.html',          
                 
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });

                  $scope.hideDialog = function(value){
// console.log('hellow');
   $mdDialog.hide(value);
 }
            };


  function DialogController($scope, $mdDialog) {

$scope.submit_add_analytic = function()
{
  //console.log('submit_add_analytic');
  //$scope.no_analytic = true;
  blockUI.start();
  $mdDialog.hide();
$timeout(function() {
  // Stop the block after some async operation.
  myBlockUI.stop();

}, 3000);

}

    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
 console.log("show after directive partial loaded");

L.mapbox.accessToken = 'pk.eyJ1IjoiZGV2bWFwIiwiYSI6ImNpZnpuMXU0cjYwNjB1dWtzczR4NmZ5ZXgifQ.yag8ZZaj_ZWkMajfbcQP4g';

  var map = L.mapbox.map('map', 'mapbox.streets',{
    zoomControl: false,
    maxZoom: 19,
    minZoom: 6,
    tileLayer: {
          // This map option disables world wrapping. by default, it is false.
          continuousWorld: false,
          // This option disables loading tiles outside of the world bounds.
          noWrap: false
      }})
    .setView([37.0902, -95.7129], 5);
    //    map.scrollZoom.disable();
new L.Control.Zoom({ position: 'topright' }).addTo(map);
var myLayer = L.mapbox.featureLayer().addTo(map);


var geojson=[];
//for(var i=0;i<addresspoints.length;i++){
  for(var i=0;i<1000;i++){

geojson.push({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [addresspoints[i][1],addresspoints[i][0]]
    },
    properties: {
      // icon: {
      //   iconUrl: 'https://dl.dropboxusercontent.com/u/90350613/projects/quest/marker-filled.png',
      //   iconSize: [50, 50], // size of the icon
      //   iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
      //   popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
      //   className: 'dot'
      // }
      'marker-color': '#3ca0d3',
      'marker-size': 'large'
      // 'marker-symbol': 'rocket'
    }
  });


}
myLayer.on('layeradd', function(e) {
  var marker = e.layer,
    feature = marker.feature;
  //marker.setIcon(L.icon(feature.properties.icon));
});
myLayer.setGeoJSON(geojson);
map.scrollWheelZoom.disable();




  }

/*if(page_type == 'admin')
{
  angular.element('md-sidenav').removeClass('close');
   angular.element('md-sidenav').addClass('md-locked-open');
   angular.element('md-sidenav').addClass('open');
  $rootScope.admin_menu = false;
  $rootScope.patient_menu = true;
}
*/
/*Social Outreach Control*/
$scope.display_facebook=function(){
  $scope.fb_section=false;
  $scope.twitter_section=false;
  $scope.googlep_section=false;
  $scope.instagram_section=false;
  $scope.trend_section=false;
  angular.element('.trend').removeClass('active');
  angular.element('.facebook').addClass('active');
  angular.element('.twitter').removeClass('active');
  angular.element('.googleplus').removeClass('active');
  angular.element('.instagram').removeClass('active');
}
$scope.display_twitter=function(){
  $scope.fb_section=true;
  $scope.twitter_section=true;
  $scope.googlep_section=false;
  $scope.instagram_section=false;
  $scope.trend_section=false;
  angular.element('.trend').removeClass('active');
  angular.element('.facebook').removeClass('active');
  angular.element('.twitter').addClass('active');
  angular.element('.googleplus').removeClass('active');
  angular.element('.instagram').removeClass('active');
}
$scope.display_googlep=function(){
  $scope.fb_section=true;
  $scope.twitter_section=false;
  $scope.googlep_section=true;
  $scope.instagram_section=false;
  $scope.trend_section=false;
  angular.element('.trend').removeClass('active');
  angular.element('.facebook').removeClass('active');
  angular.element('.twitter').removeClass('active');
  angular.element('.googleplus').addClass('active');
  angular.element('.instagram').removeClass('active');
}
$scope.display_instagram=function(){
  $scope.fb_section=true;
  $scope.twitter_section=false;
  $scope.googlep_section=false;
  $scope.instagram_section=true;
  $scope.trend_section=false;
  angular.element('.trend').removeClass('active');
  angular.element('.facebook').removeClass('active');
  angular.element('.twitter').removeClass('active');
  angular.element('.googleplus').removeClass('active');
  angular.element('.instagram').addClass('active');
}
$scope.display_trend=function(){
  $scope.fb_section=true;
  $scope.twitter_section=false;
  $scope.googlep_section=false;
  $scope.instagram_section=false;
  $scope.trend_section=true;
  angular.element('.trend').addClass('active');
  angular.element('.facebook').removeClass('active');
  angular.element('.twitter').removeClass('active');
  angular.element('.googleplus').removeClass('active');
  angular.element('.instagram').removeClass('active');


}





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