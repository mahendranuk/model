myapp.controller('homeCtrl', function ( $http, $scope, $mdDialog, $window,$route,$rootScope,sessionService,$sce,$anchorScroll,$location,$location,$timeout) {
  //     var page_type = $route.current.$$route.page_type;

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


$scope.recruiting_results= $sce.trustAsResourceUrl("pages/result_chart.html");
$scope.outreach_physician= $sce.trustAsResourceUrl("pages/outreach_phy.html");
$scope.outreach_channel= $sce.trustAsResourceUrl("pages/outreach_channel.html");

// layout based on session begins

//console.log('home page');

var page_type = $route.current.$$route.page_type;

//console.log('service page_type'+page_type);

if(page_type == 'admin')
{
  angular.element('md-sidenav').removeClass('close');
   angular.element('md-sidenav').addClass('md-locked-open');
   angular.element('md-sidenav').addClass('open');
  $rootScope.admin_menu = false;
  $rootScope.patient_menu = true;
  angular.element('md-toolbar').removeClass('display_none');
   angular.element('section').removeClass('active');
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


$rootScope.$on("$routeChangeSuccess", function(){
  //console.log("scroll on");
     //window.scrollTo(0,0);
     document.body.scrollTop = document.documentElement.scrollTop = 0;
});

 $http.get('assets/json/patients_list.json')
       .then(function(res1){
          $scope.patients_list = res1.data;      
           
        });

$http.get('assets/json/trial_list_new.json')
       .then(function(res){
          $scope.trial_list = res.data;      
          //console.log($scope.trial_list);
        });
$http.get('assets/json/identify_data.json')
       .then(function(res2){
          $scope.patient_analytic = res2.data.data;    
          //console.log("my") ;
          //console.log($scope.patient_analytic);
        });

  
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

  /*menu*/
 var originatorEv;

    $scope.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };


 function DialogController($scope, $mdDialog) {

  $scope.patient_count = '34,895';
  $scope.candidate_set2_count = '53,749';
  $scope.candidate_set3_count = '18,656';
  $scope.candidate_set4_count = '18,656';
  $scope.Alabama_loc = '10,516';
  $scope.Alaska_loc = '8,962';
  $scope.Athens_loc = '8,555';
  $scope.Illinois_loc = '4,862';
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
  $scope.data_ret = '34,100';
  $scope.myquest_ret = '15,194';
  $scope.external_ret = '1,192';
  $scope.outreach_ret = '3,263';
  $scope.Alabama_ret = '20,154';
  $scope.Alaska_ret = '18,954';
  $scope.Athens_ret = '7,316';
  $scope.Illinois_ret = '5,325';
  $scope.age1_ret = '4,789';
  $scope.age2_ret = '8,592';
  $scope.age3_ret = '9,735';
  $scope.age4_ret = '30,633';
  $scope.male_ret = '30,615';
  $scope.female_ret = '23,134';


  $scope.map_view_15 = true;

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

$http.get('assets/json/identify_data.json')
       .then(function(res2){
          $scope.patient_analytic = res2.data.data;    
          //console.log("my") ;
          //console.log($scope.patient_analytic);
        });
  }


/*pieChart*/
 $scope.options = {
            chart: {
                type: 'pieChart',
                height: 450,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                showLegend: false,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        $scope.data = [
            {
                key: "Interested",
                y: 5
            },
            {
                key: "Registered",
                y: 2
            },
            {
                key: "Pre-Screened",
                y: 9
            },
            {
                key: "Qualified",
                y: 7
            },
            {
                key: "Enrolled",
                y: 4
            }
        ];

/*multiBarChart*/
         $scope.options_line = {
           chart: {
                type: 'multiBarChart',
                height: 450,
                margin : {
                    top: 80,
                    right: 20,
                    bottom: 45,
                    left: 45
                },
                clipEdge: true,
                //staggerLabels: true,
                duration: 500,
                stacked: true,
                xAxis: {
                    axisLabel: 'Time (ms)',
                    showMaxMin: false,
                    tickFormat: function(d){
                        return d3.format(',f')(d);
                    }
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -20,
                    tickFormat: function(d){
                        return d3.format(',.1f')(d);
                    }
                }
            }
        };

    

         $scope.data_line = generateData();

        /* Random Data Generator (took from nvd3.org) */
        function generateData() {
            return stream_layers(3,50+Math.random()*50,.1).map(function(data, i) {
                return {
                    key: 'Stream' + i,
                    values: data
                };
            });
        }

        /* Inspired by Lee Byron's test data generator. */
        function stream_layers(n, m, o) {
            if (arguments.length < 3) o = 0;
            function bump(a) {
                var x = 1 / (.1 + Math.random()),
                    y = 2 * Math.random() - .5,
                    z = 10 / (.1 + Math.random());
                for (var i = 0; i < m; i++) {
                    var w = (i / m - y) * z;
                    a[i] += x * Math.exp(-w * w);
                }
            }
            return d3.range(n).map(function() {
                var a = [], i;
                for (i = 0; i < m; i++) a[i] = o + o * Math.random();
                for (i = 0; i < 5; i++) bump(a);
                return a.map(stream_index);
            });
        }

        /* Another layer generator using gamma distributions. */
        function stream_waves(n, m) {
            return d3.range(n).map(function(i) {
                return d3.range(m).map(function(j) {
                    var x = 20 * j / m - i / 3;
                    return 2 * x * Math.exp(-.5 * x);
                }).map(stream_index);
            });
        }

        function stream_index(d, i) {
            return {x: i, y: Math.max(0, d)};
        }



/*pieChart*/

        $scope.options_donut = {
            chart: {
                type: 'pieChart',
                height: 450,
                donut: true,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                showLegend: false,

                pie: {
                    startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
                    endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
                },
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 140,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        $scope.data_donut = [
            {
                key: "One",
                y: 5
            },
            {
                key: "Two",
                y: 2
            },
            {
                key: "Three",
                y: 9
            },
            {
                key: "Four",
                y: 7
            },
            {
                key: "Five",
                y: 4
            },
            {
                key: "Six",
                y: 3
            },
            {
                key: "Seven",
                y: .5
            }
        ];


/*bulletChart*/

      $scope.options_bullet = {
            chart: {
                type: 'bulletChart',
                duration: 500
            }
        };

        $scope.data_bullet = {
            "title": "Revenue",
            "subtitle": "US$, in thousands",
            "ranges": [150,225,300],
            "measures": [220],
            "markers": [250]
        }
//$timeout( function(){gotoElement('top'); }, 10000);

$rootScope.selectedTab = 0;

});

myapp.controller('searchCtrl', [function searchCtrl($scope,$timeout, $q, $log,sessionService) {

      //console.log('inside search  control');

   var self = this;

    self.simulateQuery = false;
    self.isDisabled    = false;

    // list of `state` value/display objects
    self.states        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    self.newState = newState;

    function newState(state) {
      alert("Sorry! You'll need to create a Constitution for " + state + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }

    function searchTextChange(text) {
      //$log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
      //$log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var allStates = 'Outcomes Study to Assess STatin Residual Risk Reduction With EpaNova in HiGh CV Risk PatienTs With Hypertriglyceridemia (STRENGTH),\
      Olaparib as Adjuvant Treatment in Patients With Germline BRCA Mutated High Risk HER2 Negative Primary Breast Cancer,\
              Clinical Trial on the Efficacy and Safety of Sirolimus-Eluting Stent (MiStent® System),\
              AZD9291 Versus Gefitinib or Erlotinib in Patients With Locally Advanced or Metastatic Non-small Cell Lung Cancer';

      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };

    }
    
  

}]);
