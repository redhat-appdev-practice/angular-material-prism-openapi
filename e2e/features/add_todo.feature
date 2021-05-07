Feature: Add, Complete, Edit, Delete Todos from the list

  Background: Ensure browser is sufficiently sized
    Given the browser has width of 1920 pixels and height of 1080 pixels

  Scenario: Add a new Todo
    Given I have loaded the site
    When I click on the "New Todo" menu entry
    And I type in "This is a test title" for the "title" input
    And I type in "This is a test description" for the "description" input
    And I click on the "add" button
    Then I expect that the todo will be added
