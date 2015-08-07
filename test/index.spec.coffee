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
    And   -> @classes.includes "todolist_item"
    And   -> @subject.textContent == 'Foo'

  describe "long titles", ->
    Given -> @item.title = "Foo Bar Baz Foo Bar Baz Bar Bar Baz"
    When  -> @subject  = renderElement @Component, { @item }
    Then  -> @subject.textContent.length == 32

  describe "hover item", ->
    Given  -> 
      @handleHover = sinon.spy()
      @subject     = renderElement @Component, { @item, @handleHover }
    When   -> TestUtils.Simulate.mouseOver(@subject);
    Then   -> expect(@handleHover).to.be.calledWith(@item.id)

  describe "click checkbox", ->
    Given  -> 
      @handleCheckboxClick = sinon.spy()
      @parentId = "1"
      @subject     = renderElement @Component, { @item, @handleCheckboxClick }
      @checkbox = @subject.querySelectorAll('span')[0]
    When   -> TestUtils.Simulate.click(@checkbox)
    Then   -> expect(@handleCheckboxClick).to.be.calledWith(@item.id)

  describe "click title", ->
    Given  -> 
      @handleTitleClick = sinon.spy()
      @subject  = renderElement @Component, { @item, @handleTitleClick }
      @title = @subject.querySelectorAll('span')[1]
    When   -> TestUtils.Simulate.click(@title)
    Then   -> expect(@handleTitleClick).to.be.calledWith(@item.id)
