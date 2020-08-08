Feature: Calculator Online Feature Addition

@clear @quit @positive @addition @addition1
Scenario: Simulate Addition Feature between 3 and 1
  Given I try to access calculator online address
  When Calculator online is Ready
  Then I will try to calculate number "3" using operator "+" with number "1"
      And I will hit button "=" succesfully and see result equal "4"

@clear @quit @positive @addition @addition2
Scenario: Simulate Addition Feature between 132.97 and 0.001
  Given I try to access calculator online address
  When Calculator online is Ready
  Then I will try to calculate number "132.97" using operator "+" with number "0.001"
      And I will hit button "=" succesfully and see result equal "132.971"

@clear @quit @negative @addition @addition3
Scenario: Simulate Addition Feature between 965132.97 and 0.001
  Given I try to access calculator online address
  When Calculator online is Ready
  Then I will try to calculate number "965132.97" using operator "+" with number "0.001"
      And I will hit button "=" succesfully and see result equal "965132.971"