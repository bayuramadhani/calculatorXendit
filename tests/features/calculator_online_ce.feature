Feature: Calculator Online Feature Cancelled

@clear @quit @positive @cancelled1
Scenario: Simulate Cancelled Feature on Online Calculator
  Given I try to access calculator online address
  When Calculator online is Ready
  Then I will try to calculate number "6" using operator "/" with number "3"
      And I will hit button "C" succesfully and see result equal "0"