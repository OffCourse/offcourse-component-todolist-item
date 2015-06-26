require './helpers'

describe "Todolist Item Component", ->

  beforeAll ->
    moduleUnderTest = "../src/index.jsx"
    mockModules = []
    { @Component } = mockModule moduleUnderTest, mockModules

  afterAll ->
    disableMocks()

  Given -> 
    testdom "<html><body></body></html>"
    @item = 
      id: 1

  describe "general", ->
    When  -> @subject  = renderElement @Component, { @item }
    Then  -> @classes = @subject.className.split ' '
    And   -> @classes.includes "todolist_item"
    And   -> @checkbox = @subject.querySelector('.checkbox')
    And   -> @checkbox.className.split(' ').includes 'checkbox-is-incomplete'

  describe "item complete", ->
    Given -> @item.complete = true
    When  -> @subject  = renderElement @Component, { @item }
    Then  -> @checkbox = @subject.querySelector('.checkbox')
    And   -> @checkbox.className.split(' ').includes 'checkbox-is-complete'

  describe "item highlight", ->
    Given -> @item.highlight = true
    When  -> @subject  = renderElement @Component, { @item }
    And   -> @subject.className.split(' ').includes 'todolist_item-is-highlighted'

  describe "click checkbox", ->
    Given  -> 
      @onCheckboxClick = sinon.spy()
      @subject  = renderElement @Component, { @item, @onCheckboxClick }
      @checkbox = @subject.querySelector('.checkbox')
    When   -> TestUtils.Simulate.click(@checkbox)
    Then   -> expect(@onCheckboxClick).to.be.calledWith(@item.id)

  describe "click title", ->
    Given  -> 
      @onTitleClick = sinon.spy()
      @subject  = renderElement @Component, { @item, @onTitleClick }
      @title = @subject.querySelector('.title')
    When   -> TestUtils.Simulate.click(@title)
    Then   -> expect(@onTitleClick).to.be.calledWith(@item)

  xdescribe "hover item", ->
    When   -> TestUtils.Simulate.mouseOver(@subject);
    Then   -> expect(handleHover).to.be.calledWith(@item.id)
