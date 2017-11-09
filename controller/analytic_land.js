
myapp.controller('analyticlandingCtrl', ['$http','$location','$anchorScroll' ,'$mdEditDialog', '$q', '$timeout', '$scope','$mdDialog','$window','sessionService','$route','$rootScope', '$sce', function ($http,$location,$anchorScroll, $mdEditDialog, $q, $timeout, $scope, $mdDialog, $window,sessionService,$route,$rootScope,$sce){


  // console.log('page_type'+page_type);
 var id = $location.hash();
$location.hash('top');
$anchorScroll();
$location.hash(id);
$rootScope.padding_hotfix = '55px';

  function gotoElement(eID){
      // set the location.hash to the id of
      // the element you wish to scroll to.
      //console.log("the element you wish to scroll to."+eID);
      $location.hash('top');
 
      // call $anchorScroll()
      anchorSmoothScroll.scrollTo(eID);
      
    };

// layout based on session begins
$scope.hepatitis_pie= $sce.trustAsResourceUrl("pages/hepatitis_pie.html");
//console.log('analyticlandingCtrl page');
$scope.moredata = function(){


}

 $scope.moredata = function(){
    $scope.read_more=true;
    $scope.lemoredt = true;
    $scope.moredt = true;
  }
  $scope.hidemoredata = function(){
    $scope.read_more=false;
    $scope.lemoredt = false;
    $scope.moredt = false;

 

  }
var page_type = $route.current.$$route.page_type;

/*console.log('service page_type'+page_type);*/
$scope.hepatitisPop = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true, 
                  templateUrl: 'pages/Hepatitis_popup.html',          
                 
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };

$scope.highvolume = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true, 
                  templateUrl: 'pages/highvolumetest.html',          
                 
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };
  $scope.hide = function() {
      $mdDialog.hide();
    };



    function DialogController($scope, $mdDialog) {




    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };



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


 $http.get('assets/json/trial_list.json')
       .then(function(res){
          $scope.trial_list = res;               
        });

   $http.get('assets/json/physicians_list.json')
       .then(function(res1){
          $scope.phy_list = res1.data;      
           //console.log('phy data'+$scope.phy_list);
        });

$scope.showCustom = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true, 
                  templateUrl: 'pages/dialog_analytic.html',          
                 
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
    { name: 'Top States by Patients Signups', wanted: true },
    { name: 'Registered Patients within 25 miles radius of Investigators in Boston ?', wanted: false },
    { name: 'Black Olives', wanted: true },
    { name: 'Green Peppers', wanted: false }
  ];
function tabController ($scope) {            
             $scope.data = {
                selectedIndex: 0,
                secondLocked:  true,
                secondLabel:   "2",
                bottom:        false
             };
             $scope.next = function() {
                $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
             };
             $scope.previous = function() {
                $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
             };
          }  
   


$scope.centerAnchor = true;
        $scope.toggleCenterAnchor = function () {$scope.centerAnchor = !$scope.centerAnchor}
        $scope.draggableObjects = [{name:'By state'}, {name:'By age'}, {name:'By gender'}];
        $scope.droppedObjects1 = [];
        $scope.droppedObjects2= [];
        $scope.onDropComplete1=function(data,evt){
            var index = $scope.droppedObjects1.indexOf(data);
            if (index == -1)
            $scope.droppedObjects1.push(data);
        }
        $scope.onDragSuccess1=function(data,evt){
            //console.log("133","$scope","onDragSuccess1", "", evt);
            var index = $scope.droppedObjects1.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects1.splice(index, 1);
            }
        }
        $scope.onDragSuccess2=function(data,evt){
            var index = $scope.droppedObjects2.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects2.splice(index, 1);
            }
        }
        $scope.onDropComplete2=function(data,evt){
            var index = $scope.droppedObjects2.indexOf(data);
            if (index == -1) {
                $scope.droppedObjects2.push(data);
            }
        }
        var inArray = function(array, obj) {
            var index = array.indexOf(obj);
        }







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

  $http.get('assets/json/identify_data.json').then(function (identifyData) {
    $scope.identifyData = identifyData.data;

  
  });

   $http.get('assets/json/patients_list.json')
       .then(function(res1){
          $scope.patients_list = res1.data;      
           
        });


  $http.get('assets/json/alpha.json').then(function (alphaData) {
    //console.log(alphaData);
    $scope.alphaData = alphaData;

  
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
    //console.log('Scope Page: ' + $scope.query.page + ' Scope Limit: ' + $scope.query.limit);
    //console.log('Page: ' + page + ' Limit: ' + limit);

    $scope.promise = $timeout(function () {

    }, 2000);
  };

  $scope.deselect = function (item) {
    //console.log(item.name, 'was deselected');
  };

  $scope.log = function (item) {
  //  console.log(item.name, 'was selected');
  };

  $scope.loadStuff = function () {
    $scope.promise = $timeout(function () {

    }, 2000);
  };

  $scope.onReorder = function(order) {

    //console.log('Scope Order: ' + $scope.query.order);
    //console.log('Order: ' + order);

    $scope.promise = $timeout(function () {

    }, 2000);
  };



//console.log('analyticlandingCtrl');

$scope.mapsection = false;

$scope.loadMapView = function(abc)
{
      //console.log('open html 1 page'+abc);

      if(abc == 'tues')
      {
        $scope.tuesdayvalue = true;
        //console.log('open html 1 with'+abc+'content');
      }else
      {
        //console.log('open html 1 with'+abc+'content');
      }

  //$scope.timecheck();
}

$scope.someclick = function()
{
  //checkbox clicked
}



}]);

myapp.config(function ($logProvider) {
      $logProvider.debugEnabled(false);
    });


