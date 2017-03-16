// angular.
//   module('phonecatApp').
//   component('phoneList', {
//       templateUrl: 'phone-list/phone-list.template.html', 
//     // template:
//     //     '<ul>' +
//     //       '<li ng-repeat="phone in $ctrl.phones">' +
//     //         '<span>{{phone.name}}</span>' +
//     //         '<p>{{phone.snippet}}</p>' +
//     //       '</li>' +
//     //     '</ul>',
//     controller: function PhoneListController() {
//       this.phones = [
//         {
//           name: 'Nexus S',
//           snippet: 'Fast just got faster with Nexus S.'
//         }, {
//           name: 'Motorola XOOM™ with Wi-Fi',
//           snippet: 'The Next, Next Generation tablet.'
//         }, {
//           name: 'MOTOROLA XOOM™',
//           snippet: 'The Next, Next Generation tablet.'
//         }
//       ];
//     }
//   });
  angular.
  module('phoneList').
  component('phoneList', {
    
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.',
          age: 1
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.',
          age: 2
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.',
          age: 3
        }
      ];

      this.orderProp = 'age';
    }
  });