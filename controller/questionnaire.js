

myapp.controller('questionnaireCtrl', ['$http', '$mdEditDialog', '$q', '$timeout', '$scope','sessionService','$route','$rootScope', function ($http, $mdEditDialog, $q, $timeout, $scope,sessionService,$route,$rootScope) {
  'use strict';


// layout based on session begins

//console.log('questinnaire page');

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
 

  $http.get('assets/json/questionnaire_list.json').then(function (identifyData) {
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

myapp.controller('outreach_questionCtrl', function($http,$scope,$timeout,$mdDialog,sessionService,$route,$rootScope) {


// layout based on session begins

//console.log('outreach question page');

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

  //console.log('inside outrach');
  var self = this;

      self.hidden = false;
      self.isOpen = false;
      self.hover = false;

      // On opening, add a delayed property which shows tooltips after the speed dial has opened
      // so that they have the proper position; if closing, immediately hide the tooltips
      $scope.$watch('demo.isOpen', function(isOpen) {
        if (isOpen) {
          $timeout(function() {
            $scope.tooltipVisible = self.isOpen;
          }, 600);
        } else {
          $scope.tooltipVisible = self.isOpen;
        }
      });

      self.items = [
        { name: "", icon: "fa fa-question", direction: "bottom" },
        { name: "", icon: "fa fa-th-large", direction: "top" }
      ];

      self.openDialog = function($event, item) {
        // Show the dialog



      
        $mdDialog.show({
          clickOutsideToClose: true,
          controller: function($mdDialog) {
            // Save the clicked item
            this.item = item;

            // Setup some handlers
            this.close = function() {
              $mdDialog.cancel();
            };
            this.submit = function() {
              $mdDialog.hide();
            };
          },
          controllerAs: 'dialog',
          templateUrl: 'dialog.html',
          targetEvent: $event
        });
      }
    $scope.add_question = function(){
      //console.log("inside questionireeee");
      
       $scope.show_qn2 = true;

    }
  $scope.show_radio_func =  function(){

    //console.log('radio ivoked');
    $scope.show_radio_btn = true;
    $scope.show_checkbox = false;
    $scope.show_dropdown = false;
    $scope.show_date =false;
    $scope.show_textbox = false;
    $scope.show_textarea = false;
  }

  $scope.show_radio_func2 =  function(){

    //console.log('radio ivoked');
    $scope.show_radio_btn2 = true;
    $scope.show_checkbox2 = false;
    $scope.show_dropdown2 = false;
    $scope.show_date2 =false;
    $scope.show_textbox2 = false;
    $scope.show_textarea2 = false;
  }

  $scope.show_check_func =  function(){

    //console.log('check ivoked');
    $scope.show_checkbox = true;
    $scope.show_radio_btn = false;
    $scope.show_dropdown = false;
    $scope.show_date2 = false;
    $scope.show_textbox = false;
    $scope.show_textarea = false;
  }

  $scope.show_check_func2 =  function(){

    //console.log('check ivoked');
    $scope.show_checkbox2 = true;
    $scope.show_radio_btn2 = false;
    $scope.show_dropdown2 = false;
    $scope.show_date2 = false;
    $scope.show_textbox2 = false;
    $scope.show_textarea2 = false;
  }


  $scope.show_drop_func =  function(){

    //console.log('dropdown ivoked');
    $scope.show_checkbox = false;
    $scope.show_radio_btn = false;
    $scope.show_dropdown = true;
    $scope.show_date = false;
    $scope.show_textbox = false;
    $scope.show_textarea = false;
  }

  $scope.show_drop_func2 =  function(){

    //console.log('dropdown ivoked');
    $scope.show_checkbox2 = false;
    $scope.show_radio_btn2 = false;
    $scope.show_dropdown2 = true;
    $scope.show_date2 = false;
    $scope.show_textbox2 = false;
    $scope.show_textarea2 = false;
  }

  $scope.show_date_func =  function(){

    //console.log('date ivoked');
    $scope.show_checkbox = false;
    $scope.show_radio_btn = false;
    $scope.show_dropdown = false;
    $scope.show_date = true;
    $scope.show_textbox = false;
    $scope.show_textarea = false;
  }

  $scope.show_date_func2 =  function(){

    //console.log('date ivoked');
    $scope.show_checkbox2 = false;
    $scope.show_radio_btn2 = false;
    $scope.show_dropdown2 = false;
    $scope.show_date2 = true;
    $scope.show_textbox2 = false;
    $scope.show_textarea2 = false;
  }


    $scope.show_textbox_func =  function(){

    //console.log('textbox ivoked');
    $scope.show_checkbox = false;
    $scope.show_radio_btn = false;
    $scope.show_dropdown = false;
    $scope.show_date = false;
    $scope.show_textbox = true;
    $scope.show_textarea = false;
  }


    $scope.show_textbox_func2 =  function(){

    //console.log('textbox ivoked');
    $scope.show_checkbox2 = false;
    $scope.show_radio_btn2 = false;
    $scope.show_dropdown2 = false;
    $scope.show_date2 = false;
    $scope.show_textbox2 = true;
    $scope.show_textarea2 = false;
  }

    $scope.show_textarea_func2 =  function(){

    //console.log('textarea ivoked');
    $scope.show_checkbox2 = false;
    $scope.show_radio_btn2 = false;
    $scope.show_dropdown2 = false;
    $scope.show_date2 = false;
    $scope.show_textbox2 = false;
    $scope.show_textarea2 = true;
  }
$scope.form_title = "STRENGTH Screening Questionnaire";
$scope.quest_des = "The STRENGTH Trial is looking at an investigational medication to help reduce the risk of serious heart problems in people who have high levels of triglycerides (a type of fat found in the blood that can raise your risk of heart disease), low levels of high-density lipoprotein-cholesterol (HDL-C; the 'good' cholesterol), and other risk factors for heart disease."
  $scope.show_sec_qn = function(){
    $scope.show_qn2 = true;

  }

  $scope.showpredefinedqust = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true, 
                  templateUrl: 'pages/pre_def_qst.html',          
                 
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };

$scope.newquestion = function(){

  $scope.new_qstn = true;
}


});
myapp.directive('slideable', function () {
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
})
.directive('slideToggle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var target = document.querySelector(attrs.slideToggle);
            attrs.expanded = false;
            element.bind('click', function() {
                var content = target.querySelector('.slideable_content');
                if(!attrs.expanded) {
                    content.style.border = '1px solid rgba(0,0,0,0)';
                    var y = content.clientHeight;
                    content.style.border = 0;
                    target.style.height = y + 'px';
                } else {
                    target.style.height = '0px';
                }
                attrs.expanded = !attrs.expanded;
            });
        }
    }
});