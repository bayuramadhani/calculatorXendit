Feature: Calculator Online Feature Division

@clear @quit @positive @division @division1
Scenario: Simulate Division Feature between 6 and 3
  Given I try to access calculator online address
  When Calculator online is Ready
  Then I will try to calculate number "6" using operator "/" with number "3"
      And I will hit button "=" succesfully and see result equal "2"

@clear @quit @positive @division @division2
Scenario: Simulate Division Feature between -7 and 2
  Given I try to access calculator online address
  When Calculator online is Ready
  Then I will try to calculate number "-7" using operator "/" with number "2"
      And I will hit button "=" succesfully and see result equal "-3.5"

@clear @quit @positive @division @division3
Scenario: Simulate Division Feature between 100 and 3
  Given I try to access calculator online address
  When Calculator online is Ready
  Then I will try to calculate number "100" using operator "/" with number "3"
      And I will hit button "=" succesfully and see result equal "33.3333333"