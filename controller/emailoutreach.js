

myapp.controller('emailoutreachCtrl', ['$http', '$mdEditDialog', '$q', '$timeout', '$scope','sessionService','$route','$rootScope', function ($http, $mdEditDialog, $q, $timeout, $scope,sessionService,$route,$rootScope) {
  'use strict';


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
  $scope.columns = [{
    name: 'identifyData',
    orderBy: 'name',
    unit: '100g serving'
  }, {
    descendFirst: true,
    name: 'Type',
    orderBy: 'type'
  }, {
    name: 'Calories',
    numeric: true,
    orderBy: 'calories.value'
  }, {
    name: 'Fat',
    numeric: true,
    orderBy: 'fat.value',
    unit: 'g'
  }, /* {
    name: 'Carbs',
    numeric: true,
    orderBy: 'carbs.value',
    unit: 'g'
  }, */ {
    name: 'Protein',
    numeric: true,
    orderBy: 'protein.value',
    trim: true,
    unit: 'g'
  }, /* {
    name: 'Sodium',
    numeric: true,
    orderBy: 'sodium.value',
    unit: 'mg'
  }, {
    name: 'Calcium',
    numeric: true,
    orderBy: 'calcium.value',
    unit: '%'
  }, */ {
    name: 'Iron',
    numeric: true,
    orderBy: 'iron.value',
    unit: '%'
  }, {
    name: 'Comments',
    orderBy: 'comment'
  }];

 

  $http.get('assets/json/email_outreach.json').then(function (identifyData) {
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
    //console.log(item.name, 'was selected');
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

}]);



myapp.controller('emailoutreachdetailCtrl', function ($http,$location,$anchorScroll, $mdEditDialog, $q, $timeout, $scope, $mdDialog, $window,sessionService,$route,$rootScope,$sce) {


 var id = $location.hash();
$location.hash('top');
$anchorScroll();
$location.hash(id);



$scope.outreach_summary= $sce.trustAsResourceUrl("pages/outreach_summary.html");
$scope.outreach_location= $sce.trustAsResourceUrl("pages/geo.html");
$scope.showlipidresult = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true, 
                  templateUrl: 'pages/showlipidresult.html',          
                 
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };
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


$scope.clickPatientdetail = function()
{
  $scope.patient_list = true;
  $scope.patient_detail_view = true;
  $scope.patient_analytic_back = true;
}

$scope.clickBackPatient = function()
{
  $scope.patient_list = false;
  $scope.patient_detail_view = false;
  $scope.patient_analytic_back = false;
}

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

    
});




myapp.controller('campaignab_testingCtrl', function ($scope, $mdDialog, $window, $http,$route,$rootScope,$sce,$location) {

$scope.outreach_summary= $sce.trustAsResourceUrl("pages/outreach_summary.html");
$scope.outreach_location= $sce.trustAsResourceUrl("pages/geo.html");
$scope.abcampaign_graphh= $sce.trustAsResourceUrl("pages/abcampaign_graph.html");
$scope.showlipidresult = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true, 
                  templateUrl: 'pages/showlipidresult.html',          
                 
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };
// layout based on session begins

$scope.gotoEmailOutreach = function()
{
   $location.path("/emailoutreach");
}

//console.log('trial page');

var page_type = $route.current.$$route.page_type;
$rootScope.padding_hotfix = '55px';

//console.log('service page_type'+page_type);

if(page_type == 'admin')
{
  angular.element('md-sidenav').removeClass('close');
   angular.element('md-sidenav').addClass('md-locked-open');
   angular.element('md-sidenav').addClass('open');
   angular.element('md-toolbar').removeClass('display_none');
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


$scope.clickPatientdetail = function()
{
  $scope.patient_list = true;
  $scope.patient_detail_view = true;
  $scope.patient_analytic_back = true;
}

$scope.clickBackPatient = function()
{
  $scope.patient_list = false;
  $scope.patient_detail_view = false;
  $scope.patient_analytic_back = false;
}

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

    
});



myapp.controller('templateCtrl', function ($scope, $mdDialog, $window,sessionService,$route,$rootScope) {
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
  
});




myapp.controller('createtemplateCtrl', function ($scope, $mdDialog, $window,sessionService,$route,$rootScope,$sce) {

// layout based on session begins
$scope.html_editor= $sce.trustAsResourceUrl("ckeditor/samples/index.html");
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

$scope.customtemplates=false;
$scope.themes=false;
$scope.basictemplates=true;
 

$scope.show_themes=function()
{

    $scope.basictemplates=false;
    $scope.customtemplates=false;
    $scope.themes=true;
}

$scope.show_custom=function()
{

    $scope.basictemplates=false;
    $scope.customtemplates=true;
    $scope.themes=false;
}
 
$scope.show_basic=function()
{

    $scope.basictemplates=true;
    $scope.customtemplates=false;
    $scope.themes=false;
}


  
});



myapp.controller('edittemplateCtrl', function ($scope, $mdDialog, $window,sessionService) {

  
});



myapp.controller('addemailcampaignCtrl', function ($scope, $mdDialog, $window) {
/*$scope.max = 5;
  $scope.selectedIndex = 0;
  $scope.nextTab = function() {
    var index = ($scope.selectedIndex == $scope.max) ? 0 : $scope.selectedIndex + 1;
    $scope.selectedIndex = index;

  };*/
 

  $scope.myDate = new Date();

  $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());

  $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());

  $scope.onlyWeekendsPredicate = function(date) {
    var day = date.getDay();
    return day === 0 || day === 6;
  };

$scope.patientcontent=function(){
  $scope.phycont=false;
  $scope.patcont=true;
  $scope.save_cont=false;
  $scope.myClass1.line_bottom1 = true;
}
$scope.normalbutton=function(){
  $scope.button_normal=true;
  $scope.save_cont=true;
  $scope.button_AB=false;
  $scope.pat_email_setup_AB=false;
}
$scope.ABbutton=function(){
  $scope.button_AB=true;
  $scope.save_cont=true;
  $scope.pat_email_setup=false;
  $scope.button_normal=false;
}
$scope.physiciancontent=function(){
  $scope.phycont=true;
  $scope.patcont=false;
  $scope.save_cont=true;
  $scope.button_normal=false;
  $scope.myClass1.line_bottom1 = true;
  $scope.button_AB=false;
}

/* Start of Email Campaign Patient Control*/
$scope.myClass1 = {line_bottom1:true};
$scope.myClass2 = {line_bottom2:false};
$scope.myClass3 = {line_bottom3:false};
$scope.myClass4 = {line_bottom4:false};
$scope.myClass5 = {line_bottom5:false};

$scope.patientdetails=function(){
  $scope.pat_email_list=true;
  $scope.pat_email_setup=true;
  $scope.pat_email_setup_AB=false;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = true;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = false;
}
$scope.patientdetailsAB=function(){
  $scope.pat_email_list=true;
  $scope.pat_email_setup_AB=true;
  $scope.pat_email_setup=false;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = true;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = false;
}
$scope.patemailsetup=function(){
  $scope.pat_email_list=true;
  $scope.pat_email_setup=false; 
  $scope.pat_email_setup_AB=false;
  $scope.pat_email_template=true;
  $scope.pat_email_template_AB=false;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=true;
  $scope.setup_succ=true;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = true;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = false;
}
$scope.patemailsetupAB=function(){
  $scope.pat_email_list=true;
  $scope.pat_email_setup_AB=false;
  $scope.pat_email_setup=false;
  $scope.pat_email_template_AB=true;
  $scope.pat_email_template=false;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=true;
  $scope.setup_succ=true;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = true;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = false;
}
$scope.patemailsetupback=function(){
  $scope.pat_email_list=false;
  $scope.pat_email_setup=false;
  $scope.pat_email_setup_AB=false;
  $scope.pat_email_template=false;
  $scope.pat_email_template_AB=false;
  $scope.pat_email_design=false;
  $scope.pat_email_design_AB=false;
  $scope.pat_email_template=false;
  $scope.pat_email_template_AB=false;
  $scope.recipient_fail=false;
  $scope.recipient_succ=false;
  $scope.setup_fail=false;
  $scope.setup_succ=false;
  $scope.myClass1.line_bottom1 = true;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = false;
  
}
$scope.patemailsetupbackAB=function(){
  $scope.pat_email_list=false;
  $scope.pat_email_setup=false;
  $scope.pat_email_setup_AB=false;
  $scope.pat_email_template=false;
  $scope.pat_email_template_AB=false;
  $scope.pat_email_design=false;
  $scope.pat_email_design_AB=false;
  $scope.pat_email_template=false;
  $scope.pat_email_template_AB=false;
  $scope.recipient_fail=false;
  $scope.recipient_succ=false;
  $scope.setup_fail=false;
  $scope.setup_succ=false;
  $scope.myClass1.line_bottom1 = true;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = false;  
}
$scope.patemaildesign=function(){
  $scope.pat_email_list=true;
  $scope.pat_email_setup=false;
  $scope.pat_email_setup_AB=false;
  $scope.pat_email_template=false;
  $scope.pat_email_template_AB=false;
  $scope.pat_email_design=true;
  $scope.pat_email_design_AB=false;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=true;
  $scope.setup_succ=true;
  $scope.templates_fail=true;
  $scope.templates_succ=true;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = true;
  $scope.myClass5.line_bottom5 = false;
}
$scope.patemaildesignAB=function(){
  $scope.pat_email_list=true;
  $scope.pat_email_setup_AB=false;
  $scope.pat_email_setup=false;
  $scope.pat_email_template_AB=false;
  $scope.pat_email_template=false;
  $scope.pat_email_design_AB=true;
  $scope.pat_email_design=false;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=true;
  $scope.setup_succ=true;
  $scope.templates_fail=true;
  $scope.templates_succ=true;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = true;
  $scope.myClass5.line_bottom5 = false;
}
$scope.patemaildesignback=function(){
  $scope.pat_email_list=true;
  $scope.pat_email_setup=true;
  $scope.pat_email_setup_AB=false;
  $scope.pat_email_template=false;
  $scope.pat_email_template_AB=false;
  $scope.pat_email_design=false;
  $scope.pat_email_design_AB=false;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=false;
  $scope.setup_succ=false;
  $scope.templates_fail=false;
  $scope.templates_succ=false;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = true;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = false;
}
$scope.patemaildesignbackAB=function(){
  $scope.pat_email_list=true;
  $scope.pat_email_setup_AB=true;
  $scope.pat_email_setup=false;
  $scope.pat_email_template_AB=false;
  $scope.pat_email_template=false;
  $scope.pat_email_design_AB=false;
  $scope.pat_email_design=false;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=false;
  $scope.setup_succ=false;
  $scope.templates_fail=false;
  $scope.templates_succ=false;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = true;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = false;
}
$scope.patemailreview=function(){
  $scope.pat_email_list=true;
  $scope.pat_email_setup=false;
  $scope.pat_email_setup_AB=false;
  $scope.pat_email_template=false;
  $scope.pat_email_template_AB=false;
  $scope.pat_email_design=false;
  $scope.pat_email_design_AB=false;
  $scope.pat_email_confirm=true;
  $scope.pat_email_confirm_AB=false;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=true;
  $scope.setup_succ=true;
  $scope.templates_fail=true;
  $scope.templates_succ=true;
  $scope.review_fail=true;
  $scope.review_succ=true;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = true;
}
$scope.patemailreviewAB=function(){
  $scope.pat_email_list=true;
  $scope.pat_email_setup_AB=false;
  $scope.pat_email_setup=false;
  $scope.pat_email_template_AB=false;
  $scope.pat_email_template=false;
  $scope.pat_email_design_AB=false;
  $scope.pat_email_design=false;
  $scope.pat_email_confirm_AB=true;
  $scope.pat_email_confirm=false;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=true;
  $scope.setup_succ=true;
  $scope.templates_fail=true;
  $scope.templates_succ=true;
  $scope.review_fail=true;
  $scope.review_succ=true;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = true;
}
$scope.patemailreviewback=function(){
  $scope.pat_email_list=true;
  $scope.pat_email_setup=false;
  $scope.pat_email_setup_AB=false;
  $scope.pat_email_template=true;
  $scope.pat_email_template_AB=false;
  $scope.pat_email_design=false;
  $scope.pat_email_design_AB=false;
  $scope.pat_email_confirm=false;
  $scope.pat_email_confirm_AB=false;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=true;
  $scope.setup_succ=true;
  $scope.templates_fail=false;
  $scope.templates_succ=false;
  $scope.review_fail=false;
  $scope.review_succ=false;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = true;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = false;
}
$scope.patemailreviewbackAB=function(){
  $scope.pat_email_list=true;
  $scope.pat_email_setup=false;
  $scope.pat_email_setup_AB=false;
  $scope.pat_email_template=false;
  $scope.pat_email_template_AB=true;
  $scope.pat_email_design=false;
  $scope.pat_email_design_AB=false;
  $scope.pat_email_confirm=false;
  $scope.pat_email_confirm_AB=false;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=true;
  $scope.setup_succ=true;
  $scope.templates_fail=false;
  $scope.templates_succ=false;
  $scope.review_fail=false;
  $scope.review_succ=false;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = true;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = false;
}
$scope.patconfirmback=function(){
  $scope.pat_email_list=true;
  $scope.pat_email_setup=false;
  $scope.pat_email_setup_AB=false;
  $scope.pat_email_template=false;
  $scope.pat_email_template_AB=false;
  $scope.pat_email_design=true;
  $scope.pat_email_design_AB=false;
  $scope.pat_email_confirm=false;
  $scope.pat_email_confirm_AB=false;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=true;
  $scope.setup_succ=true;
  $scope.templates_fail=true;
  $scope.templates_succ=true;
  $scope.review_fail=false;
  $scope.review_succ=false;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = true;
  $scope.myClass5.line_bottom5 = false;
}
$scope.patconfirmbackAB=function(){
  $scope.pat_email_list=true;
  $scope.pat_email_setup=false;
  $scope.pat_email_setup_AB=false;
  $scope.pat_email_template=false;
  $scope.pat_email_template_AB=false;
  $scope.pat_email_design=false;
  $scope.pat_email_design_AB=true;
  $scope.pat_email_confirm=false;
  $scope.pat_email_confirm_AB=false;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=true;
  $scope.setup_succ=true;
  $scope.templates_fail=true;
  $scope.templates_succ=true;
  $scope.review_fail=false;
  $scope.review_succ=false;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = true;
  $scope.myClass5.line_bottom5 = false;
}
/* End of Email Campaign Patient Control*/

/* Start of Email Campaign Physician Control*/

$scope.physiciandetails=function(){
  $scope.pat_email_list=true;
  $scope.phy_email_setup=true;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = true;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = false;
}
$scope.phyemailsetup=function(){
  $scope.pat_email_list=true;
  $scope.phy_email_setup=false;
  $scope.phy_email_template=true;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=true;
  $scope.setup_succ=true;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = true;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = false;
}
$scope.phyemailsetupback=function(){
  $scope.pat_email_list=false;
  $scope.phy_email_setup=false;
  $scope.phy_email_template=false;
  $scope.phy_email_design=false;
  $scope.phy_email_template=false;
  $scope.recipient_fail=false;
  $scope.recipient_succ=false;
  $scope.setup_fail=false;
  $scope.setup_succ=false;
  $scope.myClass1.line_bottom1 = true;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = false;
}
$scope.phyemaildesign=function(){
  $scope.pat_email_list=true;
  $scope.phy_email_setup=false;
  $scope.phy_email_template=false;
  $scope.phy_email_design=true;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=true;
  $scope.setup_succ=true;
  $scope.templates_fail=true;
  $scope.templates_succ=true;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = true;
  $scope.myClass5.line_bottom5 = false;
}
$scope.phyemaildesignback=function(){
  $scope.pat_email_list=true;
  $scope.phy_email_setup=true;
  $scope.phy_email_template=false;
  $scope.phy_email_design=false;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=false;
  $scope.setup_succ=false;
  $scope.templates_fail=false;
  $scope.templates_succ=false;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = true;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = false;
}
$scope.phyemailreview=function(){
  $scope.pat_email_list=true;
  $scope.phy_email_setup=false;
  $scope.phy_email_template=false;
  $scope.phy_email_design=false;
  $scope.phy_email_confirm=true;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=true;
  $scope.setup_succ=true;
  $scope.templates_fail=true;
  $scope.templates_succ=true;
  $scope.review_fail=true;
  $scope.review_succ=true;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = true;
}
$scope.phyemailreviewback=function(){
  $scope.pat_email_list=true;
  $scope.phy_email_setup=false;
  $scope.phy_email_template=true;
  $scope.phy_email_design=false;
  $scope.phy_email_confirm=false;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=true;
  $scope.setup_succ=true;
  $scope.templates_fail=false;
  $scope.templates_succ=false;
  $scope.review_fail=false;
  $scope.review_succ=false;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = true;
  $scope.myClass4.line_bottom4 = false;
  $scope.myClass5.line_bottom5 = false;
}
$scope.phyconfirmback=function(){
  $scope.pat_email_list=true;
  $scope.phy_email_setup=false;
  $scope.phy_email_template=false;
  $scope.phy_email_design=true;
  $scope.phy_email_confirm=false;
  $scope.recipient_fail=true;
  $scope.recipient_succ=true;
  $scope.setup_fail=true;
  $scope.setup_succ=true;
  $scope.templates_fail=true;
  $scope.templates_succ=true;
  $scope.review_fail=false;
  $scope.review_succ=false;
  $scope.myClass1.line_bottom1 = false;
  $scope.myClass2.line_bottom2 = false;
  $scope.myClass3.line_bottom3 = false;
  $scope.myClass4.line_bottom4 = true;
  $scope.myClass5.line_bottom5 = false;
}
$scope.reviewAselect=function(){
  $scope.review_A=false;
  $scope.review_B=false;
}
$scope.reviewBselect=function(){
  $scope.review_B=true;
  $scope.review_A=true;
}
  
});
