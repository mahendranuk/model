

myapp.controller('trialdetailCtrl', function ($scope,$location,$anchorScroll, $mdDialog, $window, $http,$timeout,blockUI,$mdSidenav,$mdPainLessToast,sessionService,$route,$rootScope,$sce,$filter) {


 var id = $location.hash();
$location.hash('div1');
$anchorScroll();
$location.hash(id);

$rootScope.padding_hotfix = '55px';

$scope.recruiting_results= $sce.trustAsResourceUrl("pages/result_chart.html");
$scope.outreach_physician= $sce.trustAsResourceUrl("pages/outreach_phy.html");

$scope.outreach_line= $sce.trustAsResourceUrl("pages/outreach_summary.html");
$scope.outreach_location= $sce.trustAsResourceUrl("pages/geo.html");
$scope.outreach_channel= $sce.trustAsResourceUrl("pages/outreach_channel.html");
$scope.minimum_age = 18;
// layout based on session begins

//console.log('trial detail page');

var page_type = $route.current.$$route.page_type;

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


  $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }


 $scope.show = function() {
    $mdPainLessToast.show(' Your post has been published sucessfully')
  };
$scope.outreach_summary  =true;
$scope.hide_newcampaign =true;

$scope.camp_back_btn = function()
{
  $scope.camp_back = false;
  $scope.new_campaign = false;
  $scope.emailnav = false;
  $scope.outreach_summary = true;
  $scope.hide_newcampaign =true;
  $scope.email_campaign=false;
  $scope.pat_email_list=true;
  $scope.pat_email_setup=false;
  $scope.pat_email_template=false;
  $scope.pat_email_design=false;
  $scope.pat_email_confirm=false;
  $scope.phy_email_setup=false;
  $scope.phy_email_template=false;
  $scope.phy_email_design=false;
  $scope.phy_email_confirm=false;
  $scope.social_outreach=false;
}

$scope.schedule_new_camp = function()
{
  $scope.camp_back = true;
  $scope.new_campaign = true;
  $scope.outreach_summary = false; 
  $scope.hide_newcampaign = false;
  $scope.email_campaign = true;
  $scope.pat_email_list=false;

  $scope.pat_email_setup=false;
  $scope.pat_email_template=false;
  $scope.pat_email_design=false;
  $scope.pat_email_confirm=false;

  $scope.pat_email_setup_AB=false;
  $scope.pat_email_template_AB=false;
  $scope.pat_email_design_AB=false;
  $scope.pat_email_confirm_AB=false;

  $scope.phy_email_setup=false;
  $scope.phy_email_template=false;
  $scope.phy_email_design=false;
  $scope.phy_email_confirm=false;

  $scope.recipient_fail=false;
  $scope.recipient_succ=false;
  $scope.setup_fail=false;
  $scope.setup_succ=false;
  $scope.templates_fail=false;
  $scope.templates_succ=false;
  $scope.review_fail=false;
  $scope.review_succ=false;
  $scope.myClass1.line_bottom1=true;
  $scope.myClass2.line_bottom2=false;
  $scope.myClass3.line_bottom3=false;
  $scope.myClass4.line_bottom4=false;
  $scope.myClass5.line_bottom5=false;


  
}

  $scope.add_analytic = function(ev) {
    //console.log('inside add analtic');
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'pages/add_analytic_modal.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

$scope.showreference = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true, 
                  templateUrl: 'pages/reference_list.html',          
                 
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };

 $scope.showreference_trigly = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true, 
                  templateUrl: 'pages/reference_list_tri.html',          
                 
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };
$scope.showreference_ldl = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true, 
                  templateUrl: 'pages/reference_list_ldl.html',          
                 
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };
$scope.showreference_hdl = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true, 
                  templateUrl: 'pages/reference_list_hdl.html',          
                 
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };

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
            };

$scope.showTabDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'pages/dashboard_dialog.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
  };

function DialogController($scope, $mdDialog,$filter) {
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

  $scope.Alabama_loc = '1,516';
  $scope.Alaska_loc = '22';
  $scope.Athens_loc = '1,555';
  $scope.Illinois_loc = '862';
  $scope.data_loc = '11,532';
  $scope.myquest_loc = '8,853';
  $scope.external_loc = '7,937';
  $scope.outreach_loc = '6,573';
  $scope.age1_loc = '10,198';
  $scope.age2_loc = '9,872';
  $scope.age3_loc = '10,762';
  $scope.age4_loc = '4,063';
  $scope.male_loc = '20,542';
  $scope.female_loc = '14,353';

  $scope.modify_radius = function(){
  blockUI.start();
  //$mdDialog.hide();
  $scope.show_filter = false;

  $timeout(function() {
  // Stop the block after some async operation.
  $scope.patient_count = '53,749';
  $scope.data_loc = '34,100';
  $scope.myquest_loc = '15,194';
  $scope.external_loc = '1,192';
  $scope.outreach_loc = '3,263';
  $scope.Alabama_loc = '2,154';
  $scope.Alaska_loc = '54';
  $scope.Athens_loc = '3,316';
  $scope.Illinois_loc = '1,325';
  $scope.age1_loc = '4,789';
  $scope.age2_loc = '8,592';
  $scope.age3_loc = '9,735';
  $scope.age4_loc = '30,633';
  $scope.male_loc = '30,615';
  $scope.female_loc = '23,134';
  $scope.map_view_25 = true;
  $scope.map_view_15 = false;
  blockUI.stop();
}, 3000);

}

$scope.candidate_set2_count = '53,749';
$scope.data_ret = '34,100';
$scope.myquest_ret = '15,194';
$scope.external_ret = '1,192';
$scope.outreach_ret = '3,263';
$scope.Alabama_ret = '2,154';
$scope.Alaska_ret = '54';
$scope.Athens_ret = '3,316';
$scope.Illinois_ret = '1,325';
$scope.age1_ret = '4,789';
$scope.age2_ret = '8,592';
$scope.age3_ret = '9,735';
$scope.age4_ret = '30,633';
$scope.male_ret = '30,615';
$scope.female_ret = '23,134';

$scope.modify_age = function()
{
  blockUI.start();
  //$mdDialog.hide();
  $scope.tg_range = false;
  $timeout(function() {
  // Stop the block after some async operation.
  $scope.candidate_set2_count = '23,116';
  $scope.data_ret = '12,552';
  $scope.myquest_ret = '6,945';
  $scope.external_ret = '954';
  $scope.outreach_ret = '2,665';
  $scope.Alabama_ret = '1,218';
  $scope.Alaska_ret = '33';
  $scope.Athens_ret = '2,282';
  $scope.Illinois_ret = '937';
  $scope.age4_ret = '0';
  $scope.male_ret = '12,799';
  $scope.female_ret = '10,317';

  blockUI.stop();

}, 3000);

}

$scope.candidate_set4_count = '18,656';


$scope.modify_tgl = function()
{
  blockUI.start();
  //$mdDialog.hide();
  $scope.tg_range = false;
  $timeout(function() {
  // Stop the block after some async operation.
  $scope.candidate_set2_count = '18,656';
  $scope.data_ret = '11,192';
  $scope.myquest_ret = '4,492';
  $scope.external_ret = '553';
  $scope.outreach_ret = '2,419';
  $scope.Alabama_ret = '1,105';
  $scope.Alaska_ret = '12';
  $scope.Athens_ret = '1,919';
  $scope.Illinois_ret = '720';
  $scope.age1_ret = '3,152';
  $scope.age2_ret = '6,945';
  $scope.age3_ret = '8,559';
  $scope.age4_ret = '0';
  $scope.male_ret = '10,852';
  $scope.female_ret = '7,804';
  blockUI.stop();

}, 3000);

}

$scope.Alabama_phy = '152';
$scope.Alaska_phy = '21';
$scope.Athens_phy = '95';
$scope.Illinois_phy = '91';
$scope.order = function (order) {
  blockUI.start();
  $timeout(function() {
    if (order == '0') {
      
        $scope.physician_analytics = $filter('orderBy')($scope.physician_analytics, 'pat_count', 'reverse');
    } 
    $scope.Alabama_phy = '115';
    $scope.Alaska_phy = '12';
    $scope.Athens_phy = '80';
    $scope.Illinois_phy = '63';
    blockUI.stop();
  }, 1500);
}
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

    //console.log('inside dialog controller');
$scope.abcampaign_graphh= $sce.trustAsResourceUrl("pages/abcampaign_graph.html");
$scope.patient_count = '34,895';

  $scope.map_view_15 = true;






$scope.candidate_set3_count = '456';



// layout based on session begins
 $http.get('assets/json/patients_list.json')
       .then(function(res1){
          $scope.patients_list = res1.data;      
           //console.log('inside patients list');
        });

$scope.width = 80;
$scope.width1 = 80;
$scope.clickPatientdetail = function()
{
  $scope.patient_list = true;
  $scope.patient_detail_view = true;
  $scope.patient_analytic_back = true;
  $scope.filter_sec = true;
   $scope.width = 100;
}
$scope.clickPhysiciandetail = function(){

 $scope.patient_list = true;
  $scope.patient_detail_view = true;
  $scope.patient_analytic_back = true;
  $scope.filter_sec1 = true;
   $scope.width1 = 100;
}
$scope.clickBackPatient = function()
{
  $scope.patient_list = false;
  $scope.patient_detail_view = false;
  $scope.patient_analytic_back = false;
   $scope.filter_sec = false;
    $scope.filter_sec1 = false;
   $scope.width = 80;
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
 $scope.closeDialog = function(){
//console.log("inside pop");
 $mdDialog.hide();
 


 };
$http.get('assets/json/identify_data.json')
       .then(function(res2){
          $scope.patient_analytic = res2.data.data;    
          //console.log("my") ;
          //console.log($scope.patient_analytic);
        });

        $http.get('assets/json/identify_data_physician.json')
       .then(function(res3){
          $scope.physician_analytics = res3.data.data;   

          //console.log("my physician_analytics") ;
          //console.log($scope.physician_analytics);
        });
  }
$scope.showRetention = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'pages/retention_dialogue.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
  };
$scope.healthstatus_dialog = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true, 
                  templateUrl: 'pages/healthstatus_dialog.html',          
                 
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };

  $scope.showPatientanalytics = function(ev){

 $mdDialog.show({
      controller: DialogController,
      templateUrl: 'pages/patient_analytics.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });



  };

  $scope.showPhysiciananalytics = function(ev){

 $mdDialog.show({
      controller: DialogController,
      templateUrl: 'pages/physician_analytics.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });



  };

  $http.get('assets/json/identify_data_physician.json')
       .then(function(res3){
         /* $scope.physician_analytics = res3.data.data;    */
          $scope.physician_analytics = $filter('orderBy')(res3.data.data, 'name');
          //console.log("my physician_analytics") ;
          //console.log($scope.physician_analytics);
        });
  
  $scope.showabcampaign = function(ev){

 $mdDialog.show({
      controller: DialogController,
      templateUrl: 'pages/ABcampaign.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });



  };

   $scope.showlocation = function(ev){

 $mdDialog.show({
      controller: DialogController,
      templateUrl: 'pages/patient_location.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
 };




                       
  $scope.userintervention = "Drug: Epanova® (omega-3 carboxylic acids)";
  $scope.usercondition = "Eligible Men or Women Considered High Risk for Atherosclerotic Cardiovascular Disease (CVD)";
  $scope.value1 = 42;
  $scope.value = 500;
  $scope.value111 = 47;
  $scope.value11 = 100;
  $scope.value114 = 180;
  $scope.value134 = 500;
  $scope.male5 = true;
  $scope.male321 = true;
  $scope.male13 = true;
  $scope.male2 = true;

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
$scope.showCustom = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true, 
                  templateUrl: 'pages/dialog8.tmpl.html',          
                 
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };
       $scope.hideDialog = function(value){
// console.log('hellow');
   $mdDialog.hide(value);
   
};  

  $scope.health_incl = true;
  $scope.diagnostic_incl = true;
  $scope.demo_incl = true;

  $scope.health_excl = false;
  $scope.treatment_excl = false;

   $http.get('assets/json/identify_data.json').then(function (identifyData) {
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



//console.log('analyticlandingCtrl');

$scope.mapsection = false;

$scope.loadMapView = function(abc)
{
      //console.log('open html 1 page'+abc);

      if(abc == 'tues')
      {
        $scope.tuesdayvalue = true;
//        console.log('open html 1 with'+abc+'content');
      }else
      {
  //      console.log('open html 1 with'+abc+'content');
      }

  //$scope.timecheck();
}

$scope.someclick = function()
{
  //checkbox clicked
}


$scope.showAlert = showAlert;
function showAlert() {
      alert = $mdDialog.alert()
        .title('Conditions' )
        .content('The disease, disorder, syndrome, illness, or injury that is being studied. On ClinicalTrials.gov, conditions may also include other health-related issues, such as lifespan, quality of life, and health risks. (See also Conditions or Focus of Study data element on ClinicalTrials.gov.)')
        .ok('Close');

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



$scope.patient_count = '3,458';

$scope.modify_radius = function()
{
  blockUI.start();
  //$mdDialog.hide();
  $scope.show_filter = false;
  $timeout(function() {
  // Stop the block after some async operation.
  $scope.patient_count = '5,752';
  blockUI.stop();

}, 3000);

}




$scope.close_searchsec1 = function(){

$scope.myVar1 = false;
$scope.myVar2 = false;
$scope.myVar3 = false;
$scope.myVar4 = false;
$scope.disease_sear = true;

var id = $location.hash();
$location.hash('searc');
$anchorScroll();
$location.hash(id);
    };

$scope.close_searchsec3 = function(){

$scope.myVar1 = false;
$scope.myVar2 = false;
$scope.myVar3 = false;
$scope.myVar4 = false;
$scope.triglycerides_result = true;
$scope.allergy_ele = true;
var id = $location.hash();
$location.hash('searc_1');
$anchorScroll();
$location.hash(id);
 //$location.hash('lipid_ser');

   //  $anchorScroll();
    };



  $scope.disease_search = function(){
    $scope.myVar1 = true;
   
  };

  $scope.disease_search1 = function(){
   
    $scope.myVar2= true;
    
  };

  $scope.disease_search2 = function(){
   
    $scope.myVar3= true;
    
  }

  $scope.disease_search4 = function(){
    $scope.myVar4= true;
  }
  $scope.close_exclusionsec = function(){

    $scope.allergy_ele = true;
    $scope.myVar4 = false;
    $allergy_list = true;
    var id = $location.hash();
$location.hash('searc_2');
$anchorScroll();
$location.hash(id);
     
  }







$scope.hdl = {
  min: 42,
  max: 47,
  options: {
    floor: 0,
    ceil: 120
  }
};

$scope.hdl1 = {
  min: 180,
  max: 500,
  options: {
    floor: 0,
    ceil: 700
  }
};

$scope.ldl = {
  min: 18,
  max: 100,
  options: {
    floor: 0,
    ceil: 160
  }
};
$scope.trigl = {
  min: 0,
  max: 180,
  options: {
    floor: 0,
    ceil: 180
  }
}
$scope.agefrom = 40;
$scope.ageto = 50;

$scope.agefrom1 = 18;
$scope.ageto1 = 99;

$scope.agefrom2 = 33;
$scope.ageto2 = 60;
$scope.yes = false;
$scope.no = true;
$scope.femal13 = true;
$scope.male = true;
$scope.female3 = true;
$scope.female = false;
$scope.female2 = true;
$scope.female7 = true;
   
 $scope.nodes = [
    { id:2, name:'Lacosamide, LC/MS/MS', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],},
    { id:11, name:'Lactic Acid, CSF', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],},
    { id:13, name:'Lactoferrin, Qualitative, Stool', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],
    },
    { id:25, name:'Lipid panel', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],
    
    children:[
      { id:26, name:'Total Cholesterol', checked:false},
      { id:27, name:'HDL Cholesterol', checked:false},
       { id:28, name:'Triglycerides', checked:false},
      { id:29, name:'LDL-Cholesterol  ', checked:false},
      { id:30, name:'Non-HDL Cholesterol  ', checked:false}
     
    ]},
    { id:13, name:'Lead Exposure Panel', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],
    },
    { id:13, name:'Lipid Panel with Ratios', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],
    },
    { id:13, name:'Lipoprotein', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],
    }
  ];




/*disease*/

 $scope.nodes_disease = [
    { id:2, name:'Diabetes insipidus', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],},
    { id:11, name:'Diabetes mellitus', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],},
    { id:13, name:'Diabetes persistent mullerian ducts', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],
    },
    { id:19, name:'Diabetes, insulin dependent', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],},
       { id:31, name:'Diabetic angiopathy', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],},
      { id:32, name:'Diabetic embryopathy', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],},
       { id:33, name:'Diabetic nephropathy', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],},
       { id:34, name:'Diamond–Blackfan anemia', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],},
       { id:35, name:'Dibasic aminoaciduria 2', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],}
  ];



  /*disease*/

 $scope.nodes_disease1 = [
    { id:2, name:'Carrot', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],},
    { id:11, name:'Cephalosporium', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],},
    { id:13, name:'Cocklebur', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],
    },
   
    { id:19, name:'Corn oil', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],},
   
    { id:19, name:'Cottonwood', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],},
   
    { id:19, name:'Couch', checked:false ,
    entity:[
        { 
          entidade:{
            img: 'http://placehold.it/500',
            obrigatorio: true
          }
        }
      ],}
  ];



$scope.edit_trial_sec = function(){

$scope.health_incl_edit = true;
$scope.health_incl = false;
$scope.lab_test = true;
$scope.lab_test_edit = true;
$scope.diag_sec = true;
$scope.diag_edit = true;
$scope.demo_incl = true;
$scope.demo_incl_edit = true;
$scope.submit_sec = true;
$scope.svesec = true;
$scope.treatment_incl_1 = true;
$scope.treatment_inclu_edit = true;
$scope.demo_incl_edit = true;
$scope.demo_incl1 = true;

}
$scope.save_edit = function(){

$scope.health_incl_edit = false;
$scope.lab_test_edit = false;
$scope.diag_edit = true;
$scope.lab_test_edit = false;
$scope.demo_incl_edit = false;

$scope.lab_test = false;
$scope.diag_sec = false;
$scope.triglycerides = true;
$scope.svesec = false;
$scope.disease_sear = true;
$scope.Diabetes_mellitus = true;
$scope.treatment_incl_1 = false;
$scope.treatment_inclu_edit = false;
$scope.demo_incl_edit = false;
$scope.demo_incl1 = false;
$scope.health_incl = true;
$scope.minimum_age = 18;


 var id = $location.hash();
$location.hash('incl_hash');
$anchorScroll();
$location.hash(id);

    };

$scope.edit_exclusion = function(){

//$scope.health_excl = false;
$scope.health_excl_edit = true;
$scope.submit_sec1 = true;
$scope.treatment_excl_edit = true;
$scope.treatment_excl_1 = true;
$scope.health_excl_1 = true;



}

$scope.submit_sec1_click = function()
{
  //$scope.health_excl = true;
  $scope.health_excl_edit = false;
  $scope.submit_sec1 = false;
  $scope.allergy_list = true;
  $scope.treatment_excl_edit = false;
  $scope.treatment_excl_1 = false;
  $scope.health_excl_1 = false;

var id = $location.hash();
$location.hash('excl_hash');
$anchorScroll();
$location.hash(id);

}
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
$scope.emailsetup=function(){
  $scope.email_setup=true;
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
/* End of Email Campaign Physician Control*/

$scope.emailcampaign=function(){ 
  $scope.email_campaign=true;
  $scope.pat_email_list=false;
  $scope.emailnav=false;
  $scope.social_outreach=false;
  $scope.Questionnaire_sec=false;
  $scope.Landing_Page=false;
}
$scope.socialoutreach=function(){
  $scope.pat_email_list=true;
  $scope.emailnav=true;
  $scope.social_outreach=true;
  $scope.Questionnaire_sec=false;
  $scope.Landing_Page=false;
}
$scope.Questionnaire=function(){
  $scope.pat_email_list=true;
  $scope.emailnav=true;
  $scope.social_outreach=false;
  $scope.Questionnaire_sec=true;
  $scope.Landing_Page=false;
}
$scope.LandingPage=function(){
  $scope.pat_email_list=true;
  $scope.emailnav=true;
  $scope.social_outreach=false;
  $scope.Questionnaire_sec=false;
  $scope.Landing_Page=true;
}

/*Social Outreach Control*/
$scope.display_facebook=function(){
  $scope.fb_section=false;
  $scope.twitter_section=false;
  $scope.googlep_section=false;
  $scope.instagram_section=false;
  $scope.trend_section=false;
}
$scope.display_twitter=function(){
  $scope.fb_section=true;
  $scope.twitter_section=true;
  $scope.googlep_section=false;
  $scope.instagram_section=false;
  $scope.trend_section=false;
}
$scope.display_googlep=function(){
  $scope.fb_section=true;
  $scope.twitter_section=false;
  $scope.googlep_section=true;
  $scope.instagram_section=false;
  $scope.trend_section=false;
}
$scope.display_instagram=function(){
  $scope.fb_section=true;
  $scope.twitter_section=false;
  $scope.googlep_section=false;
  $scope.instagram_section=true;
  $scope.trend_section=false;
}
$scope.display_trend=function(){
  $scope.fb_section=true;
  $scope.twitter_section=false;
  $scope.googlep_section=false;
  $scope.instagram_section=false;
  $scope.trend_section=true;
}

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
/*menu*/
 var originatorEv;

    $scope.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
  
});

myapp.directive('treeEdit', function($compile) {
  return {
    restrict : 'E',
    scope : {
      localNodes : '=model',
      localClick : '&click'
    },
    link : function (scope, tElement, tAttrs, transclude) {
      
      var maxLevels = (angular.isUndefined(tAttrs.maxlevels)) ? 10 : tAttrs.maxlevels; 
      var hasCheckBox = (angular.isUndefined(tAttrs.checkbox)) ? false : true;
      scope.showItems = [];
      
      scope.showHide = function(ulId) {
        var hideThis = document.getElementById(ulId);
        var showHide = angular.element(hideThis).attr('class');
        angular.element(hideThis).attr('class', (showHide === 'show' ? 'hide' : 'show'));
      }
      
      scope.showIcon = function(node) {
        if (!angular.isUndefined(node.children)) return true;
      }
      
      scope.checkIfChildren = function(node) {
        if (!angular.isUndefined(node.children)) return true;
      }

      /////////////////////////////////////////////////
      /// SELECT ALL CHILDRENS
      // as seen at: http://jsfiddle.net/incutonez/D8vhb/5/
      function parentCheckChange(item) {
        for (var i in item.children) {
          item.children[i].checked = item.checked;
          if (item.children[i].children) {
            parentCheckChange(item.children[i]);
          }
        }
      }
     
      scope.checkChange = function(node) {
        if (node.children) {
          parentCheckChange(node);
        }
      }
      /////////////////////////////////////////////////

      function renderTreeView(collection, level, max) {
        var text = '';
        text += '<li ng-repeat="n in ' + collection + '" >';
        text += '<span ng-show=showIcon(n) class="show-hide expand" ng-click=showHide(n.id)><i class="fa fa-plus" aria-hidden="true"></i></span>';
        text += '<span ng-show=!showIcon(n) style="padding-right: 44px"></span>';
       
        if (hasCheckBox) {
          text += '<md-checkbox  class="md-primary tree-checkbox" ng-model=n.checked ng-change=checkChange(n) ></md-checkbox>';
        }
        

        

        
        text += '<label>{{n.name}}</label>';
       
        if (level < max) {
          text += '<ul id="{{n.id}}" class="hide" ng-if=checkIfChildren(n)>'+renderTreeView('n.children', level + 1, max)+'</ul></li>';
        } else {
          text += '</li>';
        }
        
        return text;
      }// end renderTreeView();
      
      try {
        var text = '<ul class="tree-view-wrapper">';
        text += renderTreeView('localNodes', 1, maxLevels);
        text += '</ul>';
        tElement.html(text);
        $compile(tElement.contents())(scope);
      }
      catch(err) {
        tElement.html('<b>ERROR!!!</b> - ' + err);
        $compile(tElement.contents())(scope);
      }
    }
  };
});
myapp.service('$mdPainLessToast', function($mdToast) {
  return { 
    show: function(content) {
    return $mdToast.show(
      $mdToast.simple()
        .content(content)
        .position('bottom')
        .hideDelay(6000)
    )}
  };
}) 

