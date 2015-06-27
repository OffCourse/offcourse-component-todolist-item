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
      title: 'Foo'

  describe "general", ->
    When  -> @subject  = renderElement @Component, { @item }
    Then  -> @classes = @subject.className.split ' '
    And   -> @subject.textContent == 'Foo'
    And   -> @classes.includes "todolist_item"
    And   -> !@classes.includes "todolist_item-is-highlighted"
    And   -> @checkbox = @subject.querySelector('.checkbox')
    And   -> @checkbox.className.split(' ').includes 'checkbox-is-incomplete'

  describe "long titles", ->
    Given -> @item.title = "Foo Bar Baz Foo Bar Baz Bar Bar Baz"
    When  -> @subject  = renderElement @Component, { @item }
    Then  -> @subject.textContent.length == 32

  describe "item complete", ->
    Given -> @item.complete = true
    When  -> @subject  = renderElement @Component, { @item }
    Then  -> @checkbox = @subject.querySelector('.checkbox')
    And   -> @checkbox.className.split(' ').includes 'checkbox-is-complete'

  describe "item highlight", ->
    Given -> @item.highlight = true
    When  -> @subject  = renderElement @Component, { @item }
    And   -> @subject.className.split(' ').includes 'todolist_item-is-highlighted'

  describe "hover item", ->
    Given  -> 
      @handleHover = sinon.spy()
      @subject     = renderElement @Component, { @item, @handleHover }
    When   -> TestUtils.Simulate.mouseOver(@subject);
    Then   -> expect(@handleHover).to.be.calledWith(@item.id)

  describe "click checkbox", ->
    Given  -> 
      @handleCheckboxClick = sinon.spy()
      @subject  = renderElement @Component, { @item, @handleCheckboxClick }
      @checkbox = @subject.querySelector('.checkbox')
    When   -> TestUtils.Simulate.click(@checkbox)
    Then   -> expect(@handleCheckboxClick).to.be.calledWith(@item.id)

  describe "click title", ->
    Given  -> 
      @handleTitleClick = sinon.spy()
      @subject  = renderElement @Component, { @item, @handleTitleClick }
      @title = @subject.querySelector('.title')
    When   -> TestUtils.Simulate.click(@title)
    Then   -> expect(@handleTitleClick).to.be.calledWith(@item)

