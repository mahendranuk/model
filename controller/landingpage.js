

myapp.controller('landingpageCtrl', ['$http', '$mdEditDialog', '$q', '$timeout', '$scope','sessionService','$route','$rootScope','$sce', function ($http, $mdEditDialog, $q, $timeout, $scope,sessionService,$route,$rootScope,$sce) {
  'use strict';

// layout based on session begins
$scope.html_editor= $sce.trustAsResourceUrl("ckeditor/samples/index.html");
console.log('landing page page');

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

  $scope.options = {
    rowSelection: true,
    multiSelect: true,
    autoSelect: true,
    decapitate: false,
    largeEditDialog: false,
    boundaryLinks: false,
    limitSelect: true,
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

  // for testing ngRepeat
 

  $http.get('assets/json/landingpage_list.json').then(function (identifyData) {
    $scope.identifyData = identifyData.data;

    // $scope.selected.push($scope.desserts.data[1]);

    // $scope.selected.push({
    //   name: 'Ice cream sandwich',
    //   type: 'Ice cream',
    //   calories: { value: 237.0 },
    //   fat: { value: 9.0 },
    //   carbs: { value: 37.0 },
    //   protein: { value: 4.3 },
    //   sodium: { value: 129.0 },
    //   calcium: { value: 8.0 },
    //   iron: { value: 1.0 }
    // });

    // $scope.selected.push({
    //   name: 'Eclair',
    //   type: 'Pastry',
    //   calories: { value:  262.0 },
    //   fat: { value: 16.0 },
    //   carbs: { value: 24.0 },
    //   protein: { value:  6.0 },
    //   sodium: { value: 337.0 },
    //   calcium: { value:  6.0 },
    //   iron: { value: 7.0 }
    // });

    // $scope.promise = $timeout(function () {
    //   $scope.desserts = desserts.data;
    // }, 1000);
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

 

  
    
    $scope.min = 20;
$scope.max = 80;
$scope.lower = $scope.min;
$scope.upper = $scope.max;

}]);



myapp.controller('custom_templateCtrl', ['$http', '$mdEditDialog', '$q', '$timeout', '$scope','sessionService','$route','$rootScope','$sce','$mdDialog', function ($http, $mdEditDialog, $q, $timeout, $scope,sessionService,$route,$rootScope,$sce,$mdDialog) {
  'use strict';

// layout based on session begins
$scope.html_editor= $sce.trustAsResourceUrl("ckeditor/samples/index.html");
console.log('landing page page');

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

  $scope.options = {
    rowSelection: true,
    multiSelect: true,
    autoSelect: true,
    decapitate: false,
    largeEditDialog: false,
    boundaryLinks: false,
    limitSelect: true,
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

  // for testing ngRepeat


  $scope.previewlanding = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true, 
                  templateUrl: 'pages/patient_camp_modal.html',          
                 
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
 

  $http.get('assets/json/landingpage_list.json').then(function (identifyData) {
    $scope.identifyData = identifyData.data;

    // $scope.selected.push($scope.desserts.data[1]);

    // $scope.selected.push({
    //   name: 'Ice cream sandwich',
    //   type: 'Ice cream',
    //   calories: { value: 237.0 },
    //   fat: { value: 9.0 },
    //   carbs: { value: 37.0 },
    //   protein: { value: 4.3 },
    //   sodium: { value: 129.0 },
    //   calcium: { value: 8.0 },
    //   iron: { value: 1.0 }
    // });

    // $scope.selected.push({
    //   name: 'Eclair',
    //   type: 'Pastry',
    //   calories: { value:  262.0 },
    //   fat: { value: 16.0 },
    //   carbs: { value: 24.0 },
    //   protein: { value:  6.0 },
    //   sodium: { value: 337.0 },
    //   calcium: { value:  6.0 },
    //   iron: { value: 7.0 }
    // });

    // $scope.promise = $timeout(function () {
    //   $scope.desserts = desserts.data;
    // }, 1000);
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

 

  
    
    $scope.min = 20;
$scope.max = 80;
$scope.lower = $scope.min;
$scope.upper = $scope.max;

}]);