var _ = require('underscore');
var S = require('string');

var choiceSet = {
  canBeReappliedFor: ['No', 'Yes'],
  eligibleBusinessLocation: [
    'Anywhere In Puerto Rico',
    'Municipality in Puerto Rico',
    'Region in Puerto Rico',
    'Outside of Puerto Rico'
  ],
  benefitType: [
    'Tax Break',
    'Loan',
    'Credit',
    'Grant',
    'Reimbursement',
    'Salary Reimbursement',
    'Exemption',
    'Other'
  ],
  eligibleEntityTypes: [
    'Any',
    'Non-Profit',
    'For-Profit',
    'Sole Proprietor'
  ],
  currentEmployeesRequired: [
    '1-5',
    '6-25',
    '26-50',
    '51-200',
    '200+'
  ],
  annualRevenue: [
    '0–100,000',
    '100,000-499,999',
    '500,000-999,999',
    '1 million-4,9 million',
    '5 million-9,9 million',
    'More than 10 million'
  ],
  eligibleIndustries: [
    'Agriculture',
    'Tourism',
    'Finance and Insurance',
    'Accommodation, Food & Drink services',
    'Art, entertainment',
    'Construction',
    'Pharmaceuticals',
    'Biotechnology',
    'Wholesale Trade',
    'Health care',
    'Information / media / internet',
    'Public administration',
    'Real estate',
    'Transportation',
    'Retail',
    'Manufacture',
    'Auto repair',
    'Education',
    'Utilities',
    'Mining',
    'Professional, Scientific and Technical Services',
    'Management of Companies and Enterprises',
    'Administrative Support, Waste Management and Remediation Services'
  ]

};


exports = module.exports = function(fieldObject) {
  var choices = fieldObject.options.choices || [];
  if (_.isEmpty(choices)) {
    // Give function callback a priority;
    if (_.isFunction(choices))
      choices = choices(fieldObject);

    if (!_.isEmpty(choiceSet[fieldObject.getName('direct')]))
      choices = choiceSet[fieldObject.getName('direct')];
  }

  return choices;
}

