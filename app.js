'use strict';

// Declare app level module which depends on views, and components

var myapp = angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'ngMessages',
  'ngAnimate',
  'md.data.table',
  'nvd3',
  'blockUI',
  'rzModule',
  'isteven-omni-bar'
]);
myapp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/home', {
    templateUrl: 'pages/home.html',
    controller: 'homeCtrl',
    page_type: 'admin'
  });



  $routeProvider.when('/datadashboard', {
    templateUrl: 'pages/data_dashboard.html',
    controller: 'analyticlandingCtrl',
    page_type: 'admin'
  });



  $routeProvider.when('/trial', {
    templateUrl: 'pages/trial.html',
    controller: 'trialCtrl',
    page_type: 'admin'
  });


  $routeProvider.when('/trialdetail', {
    templateUrl: 'pages/trialdetail.html',
    controller: 'trialdetailCtrl',
    page_type: 'admin'
  });


    $routeProvider.when('/patients', {
    templateUrl: 'pages/patients.html',
    controller: 'analyticlandingCtrl',
    page_type: 'admin'
  });


  $routeProvider.when('/physicians', {
    templateUrl: 'pages/physicians.html',
    controller: 'analyticlandingCtrl',
    page_type: 'admin'
  });


    $routeProvider.when('/identitydetail', {
    templateUrl: 'pages/identitydetail.html',
    controller: 'patientsCtrl',
    page_type: 'admin'
  });

 $routeProvider.when('/physiciandetail', {
    templateUrl: 'pages/physiciandetail.html',
    controller: 'physiciandetailCtrl',
    page_type: 'admin'
  });



    $routeProvider.when('/campaign_email', {
    templateUrl: 'pages/campaign_email.html',
    controller: 'campaign_emailCtrl',
    page_type: 'external'
  });

    $routeProvider.when('/patient_email', {
    templateUrl: 'pages/patient_email.html',
    controller: 'patient_emailCtrl',
    page_type: 'external'
  });    

    $routeProvider.when('/physician_email', {
    templateUrl: 'pages/physician_email.html',
    controller: 'physician_emailCtrl',
    page_type: 'external'
  });

     $routeProvider.when('/community_page', {
    templateUrl: 'pages/community_page.html',
    controller: 'community_pageController',
    page_type: 'external_page'
  });




  $routeProvider.when('/outreach', {
    templateUrl: 'pages/outreach.html',
    controller: 'outreachCtrl',
    page_type: 'admin'
  });

  $routeProvider.when('/emailoutreach', {
    templateUrl: 'pages/emailoutreach.html',
    controller: 'emailoutreachCtrl',
    page_type: 'admin'
  });

  $routeProvider.when('/emailoutreachdetail', {
    templateUrl: 'pages/emailoutreachdetail.html',
    controller: 'emailoutreachdetailCtrl',
    page_type: 'admin'
  });

  

   $routeProvider.when('/createtrial', {
    templateUrl: 'pages/createtrial.html',
    controller: 'createtrialCtrl',
    page_type: 'admin'
  });

    $routeProvider.when('/edittrial', {
    templateUrl: 'pages/edittrial.html',
    controller: 'edittrialCtrl',
    page_type: 'admin'
  });

     $routeProvider.when('/analytic', {
    templateUrl: 'pages/analytic.html',
    controller: 'analyticCtrl',
    page_type: 'admin'
  });

    $routeProvider.when('/analytic_landing', {
    templateUrl: 'pages/analytic_landing.html',
    controller: 'analyticlandingCtrl',
    page_type: 'admin'
  });

   $routeProvider.when('/analytic_detail', {
    templateUrl: 'pages/analytic_detail.html',
    controller: 'analyticdetailCtrl',
    page_type: 'admin'
  });



    $routeProvider.when('/community_question', {
    templateUrl: 'pages/patient_landing.html',
    controller: 'patient_landingCtrl',
    page_type: 'patient_no_session'
  });

    $routeProvider.when('/outreach_question', {
    templateUrl: 'pages/outreach_question.html',
    controller: 'outreach_questionCtrl',
    page_type: 'admin'
  });
  
    $routeProvider.when('/social_outreach', {
    templateUrl: 'pages/social_outreach.html',
    controller: 'social_outreachCtrl',
    page_type: 'admin'
  });

     $routeProvider.when('/createtemplate', {
    templateUrl: 'pages/createtemplate.html',
    controller: 'createtemplateCtrl',
    page_type: 'admin'
  });

      $routeProvider.when('/edittemplate', {
    templateUrl: 'pages/edittemplate.html',
    controller: 'edittemplateCtrl',
    page_type: 'admin'
  });
     $routeProvider.when('/template', {
    templateUrl: 'pages/template.html',
    controller: 'templateCtrl',
    page_type: 'admin'
  });
      $routeProvider.when('/addemailcampaign', {
    templateUrl: 'pages/addemailcampaign.html',
    controller: 'addemailcampaignCtrl',
    page_type: 'admin'
  });

      $routeProvider.when('/patientlanding', {
    templateUrl: 'pages/patientlanding.html',
    controller: 'patientlandingCtrl',
    page_type: 'patient_session'
  });
    $routeProvider.when('/patientregistration', {
    templateUrl: 'pages/patientregistration.html',
    controller: 'patientregistrationCtrl',
    page_type: 'patient_no_session'
  });
    $routeProvider.when('/my_trials', {
    templateUrl: 'pages/my_trials.html',
    controller: 'my_trialsCtrl',
    page_type: 'patient_session'
  });
    $routeProvider.when('/login', {
    templateUrl: 'pages/login.html',
    controller: 'loginCtrl',
    page_type: 'patient_no_session'
  });
    $routeProvider.when('/saved_trials', {
    templateUrl: 'pages/saved_trials.html',
    controller: 'saved_trialsCtrl',
    page_type: 'patient_session'
  });
    $routeProvider.when('/trial_activity', {
    templateUrl: 'pages/trial_activity.html',
    controller: 'trial_activityCtrl',
    page_type: 'patient_session'
  });

    $routeProvider.when('/emaillandingpage', {
    templateUrl: 'pages/emaillandingpage.html',
    controller: 'emaillandingpageCtrl'
  });

    $routeProvider.when('/landingpage', {
    templateUrl: 'pages/landingpage.html',
    controller: 'landingpageCtrl',
    page_type: 'admin'
  });

    $routeProvider.when('/questionnaire', {
    templateUrl: 'pages/questionnaire.html',
    controller: 'questionnaireCtrl',
    page_type: 'admin'
  });


    $routeProvider.when('/patient_campaign_landing', {
    templateUrl: 'pages/patient_campaign_landing.html',
    controller: 'patient_campaign_landingController',
    page_type: 'patient_no_session'
  });

   $routeProvider.when('/physician_campaign_landing', {
    templateUrl: 'pages/physician_campaign_landing.html',
    controller: 'physician_campaign_landingController',
    page_type: 'patient_no_session'
  });


 

    $routeProvider.when('/addsocialoutreach', {
    templateUrl: 'pages/addsocialoutreach.html',
    controller: 'addsocialoutreachCtrl',
    page_type: 'admin'
  });

    $routeProvider.when('/trial_detail', {
    templateUrl: 'pages/trial_detail_search.html',
    controller: 'trial_detail_searchCtrl',
    page_type: 'admin'
  });

    $routeProvider.when('/community_landing', {
    templateUrl: 'pages/community_landing.html',
    controller: 'community_landingCtrl',
    page_type: 'patient_no_session'
  });

 $routeProvider.when('/account_settings', {
    templateUrl: 'pages/account_setting.html',
    controller: 'account_settingCtrl',
    page_type: 'patient_session'
  });


  $routeProvider.when('/custom_template', {
    templateUrl: 'pages/custom_template.html',
    controller: 'custom_templateCtrl',
    page_type: 'admin'
  });
  $routeProvider.when('/strength_template', {
    templateUrl: 'pages/strength_landing_template.html',
    controller: 'custom_templateCtrl',
    page_type: 'admin'
  });
  $routeProvider.when('/campaignab_testing', {
    templateUrl: 'pages/campaignab_testing.html',
    controller: 'campaignab_testingCtrl',
    page_type: 'admin'
  });



    $routeProvider.when('/patientemail_landing', {
    templateUrl: 'pages/patientemail_landing.html',
    controller: 'patientemail_landingCtrl',
    page_type: 'patient_no_session'
  });



  $routeProvider.otherwise({redirectTo: '/home'});

}])

 myapp.config(($mdIconProvider, $mdThemingProvider) => {
    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24)
      .icon("google_plus", "./assets/svg/google_plus.svg", 24)
      .icon("hangouts", "./assets/svg/hangouts.svg", 24)
      .icon("twitter", "./assets/svg/twitter.svg", 24)
      .icon("phone", "./assets/svg/phone.svg", 24);


   var customPrimary = {
        '50': '#6bc65c',
        '100': '#5ac049',
        '200': '#4eb23e',
        '300': '#469f37',
        '400': '#3d8c31',
        '500': '#35792A',
        '600': '#2d6623',
        '700': '#24531d',
        '800': '#1c4016',
        '900': '#22672A',
        'A100': '#19551F',
        'A200': '#8dd482',
        'A400': '#9eda95',
        'A700': '#0c1a09'
    };
    $mdThemingProvider
        .definePalette('customPrimary', 
                        customPrimary);

    var customAccent = {
        '50': '#3f4503',
        '100': '#555e04',
        '200': '#6b7605',
        '300': '#818f06',
        '400': '#98a707',
        '500': '#aebf08',
        '600': '#daf00a',
        '700': '#f8f8f8',
        '800': '#e4f737',
        '900': '#e7f84f',
        'A100': '#daf00a',
        'A200': '#C4D809',
        'A400': '#B4C700',
        'A700': '#ebf968'
    };
    $mdThemingProvider
        .definePalette('customAccent', 
                        customAccent);

    var customWarn = {
        '50': '#e99898',
        '100': '#e58383',
        '200': '#e06e6e',
        '300': '#dc5959',
        '400': '#d74444',
        '500': '#D32F2F',
        '600': '#c02929',
        '700': '#ab2424',
        '800': '#962020',
        '900': '#811b1b',
        'A100': '#eeadad',
        'A200': '#f2c2c2',
        'A400': '#f7d7d7',
        'A700': '#F8F8F8'
    };
    $mdThemingProvider
        .definePalette('customWarn', 
                        customWarn);

    var customBackground = {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#ffffff',
        '400': '#ffffff',
        '500': '#FFFFFF',
        '600': '#ececec',
        '700': '#f8f8f8',
        '800': '#d9d9d9',
        '900': '#cccccc',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#bfbfbf'
    };
    $mdThemingProvider
        .definePalette('customBackground', 
                        customBackground);

   $mdThemingProvider.theme('default')
       .primaryPalette('customPrimary',{
        'default':'500',
        'hue-1': '900', 
        'hue-2': 'A100',
        'hue-3': 'A200'


      })
       .accentPalette('customAccent',{
        'hue-1': 'A200', 
        'hue-2': 'A400',
        'hue-3': '700'


      })
       .warnPalette('customWarn',{
        'default':'500'
        


      })

       .backgroundPalette('customBackground',{
        'default':'500',
        'hue-1': '600', 
        'hue-2': '700'


      })


  })

 myapp.directive('isActiveNav', [ '$location', function($location) {
return {
 restrict: 'A',
 link: function(scope, element) {
   scope.location = $location;
   scope.$watch('location.path()', function(currentPath) {
     if('#!' + currentPath === element[0].attributes['href'].nodeValue) {
       element.parent().addClass('active');
     } else {
       element.parent().removeClass('active');
     }
   });
 }
 };
}]);

myapp.directive("backButton", ["$window", function ($window) {
    return {
        restrict: "A",
        link: function (scope, elem, attrs) {
            elem.bind("click", function () {
                $window.history.back();
            });
        }
    };
}]);
myapp.config(function($mdAriaProvider) {
   // Globally disables all ARIA warnings.
   $mdAriaProvider.disableWarnings();
});
myapp.service("sessionService", ['$route','$rootScope', function ($route,$rootScope) {
  //console.log('inside 1');
//   var page_type = $route.current.$$route.page_type;

//   console.log('service page_type'+page_type);


// if(page_type == 'admin')
// {
//   angular.element('md-sidenav').removeClass('close');
//    angular.element('md-sidenav').addClass('md-locked-open');
//    angular.element('md-sidenav').addClass('open');
//   $rootScope.admin_menu = false;
//   $rootScope.patient_menu = true;
// }else if (page_type == 'patient_session')
// {
//   $rootScope.admin_menu = true;
//   $rootScope.patient_menu = false;
// }else
// {
//    angular.element('md-sidenav').removeClass('md-locked-open');
//    angular.element('md-sidenav').addClass('close');
// }

}]);

myapp.service('anchorSmoothScroll', function(){
    
    this.scrollTo = function(eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };
    
});

myapp.run(function($rootScope, $anchorScroll){

  //console.log("inside scroll on function")
  $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
    $anchorScroll();
  });
});