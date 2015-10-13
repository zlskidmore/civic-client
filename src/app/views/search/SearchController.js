(function() {
  'use strict';
  angular.module('civic.search')
    .controller('SearchController', SearchController);

  // @ngInject
  function SearchController($scope, $log, formlyVersion) {
    var vm = $scope.vm = {};

    // funcation assignment
    vm.onSubmit = onSubmit;

    // variable assignment
    vm.author = { // optionally fill in your info below :-)
      name: 'Joe Zhou',
      url: 'https://plus.google.com/u/0/111062476999618400219/posts' // a link to your twitter/github/blog/whatever
    };
    vm.exampleTitle = 'Repeating Section'; // add this
    vm.env = {
      angularVersion: angular.version.full,
      formlyVersion: formlyVersion
    };
    vm.options = {};

    init();

    vm.originalFields = angular.copy(vm.fields);

    // function definition
    function onSubmit() {
      alert(JSON.stringify(vm.model), null, 2);
    }


    function init() {
      vm.model = {
        queries: [
          {
            field: 'description',
            condition: {
              name: 'contains',
              string: 'abcdef'
            }
          },
          {
            field: 'rating',
            condition: {
              name: 'is_greater_than',
              rating: 3
            }
          }
        ]
      };

      vm.fields = [
        {
          type: 'queryRow',
          key: 'queries',
          templateOptions: {
            btnText: 'Add another investment',
            rowFields: [
              {
                key: 'field',
                type: 'select',
                templateOptions: {
                  label: 'Field:',
                  required: true,
                  options: [
                    {value: '', name: 'Please select a Field'},
                    {value: 'description', name: 'Description'},
                    {value: 'rating', name: 'Rating'}
                  ]
                }
              }
            ],
            conditionFields: {
              rating: [
                {
                  key: 'name',
                  type: 'select',
                  className: 'col-xs-6',
                  templateOptions: {
                    label: 'Condition:',
                    required: true,
                    options: [
                      {value: '', name: 'Please select a Condition'},
                      {value: 'is_greater_than', name: 'is greater than'},
                      {value: 'is_less_than', name: 'is less than'},
                      {value: 'is_equal_to', name: 'is equal to'}
                    ]
                  }
                },
                {
                  key: 'rating',
                  type: 'input',
                  className: 'col-xs-6',
                  templateOptions: {
                    label: 'Rating:',
                    required: true
                  }
                }
              ],
              description: [
                {
                  key: 'name',
                  type: 'select',
                  className: 'col-xs-6',
                  templateOptions: {
                    label: 'Condition:',
                    required: true,
                    options: [
                      {value: '', name: 'Please select a Condition'},
                      {value: 'contains', name: 'contains'},
                      {value: 'begins_with', name: 'begins with'},
                      {value: 'does_not_contain', name: 'does not contain'}
                    ]
                  }
                },
                {
                  key: 'string',
                  type: 'input',
                  className: 'col-xs-6',
                  templateOptions: {
                    label: 'String:',
                    required: true
                  }
                }
              ]

            }
          }
        }
      ];
    }
  }
})();