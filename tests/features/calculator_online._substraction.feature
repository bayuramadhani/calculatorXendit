Feature: Calculator Online Feature Substraction

@clear @quit @positive @substraction @substraction1
Scenario: Simulate Substraction Feature between 3 and 1
  Given I try to access calculator online address
  When Calculator online is Ready
  Then I will try to calculate number "3" using operator "-" with number "1"
      And I will hit button "=" succesfully and see result equal "2"

@clear @quit @positive @substraction @substraction2
Scenario: Simulate Substraction Feature between -3 and 1
  Given I try to access calculator online address
  When Calculator online is Ready
  Then I will try to calculate number "-3" using operator "-" with number "1"
      And I will hit button "=" succesfully and see result equal "-4"

@clear @quit @negative @substraction @substraction3
Scenario: Simulate Substraction Feature between -965132.97 and 0.001
  Given I try to access calculator online address
  When Calculator online is Ready
  Then I will try to calculate number "-965132.97" using operator "-" with number "0.001"
      And I will hit button "=" succesfully and see result equal "-965132.971"