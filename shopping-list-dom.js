// shopping-list dom code here
var addTopicElement = document.querySelector(".addTopic");
var addDescriptionElement = document.querySelector(".addDescription")
var addBudgetElement = document.querySelector(".addBudget");

var shopItems = factoryShoppingList()

function addingTopic() {

    // var item = shopItems.getTopic(addTopicElement.value);
    
    var itemDoc = document.createTextNode(addTopicElement.value); //converting above to textnode for it to work
    var list = document.createElement("li");
    list.appendChild(itemDoc);
    document.getElementById("listitems").appendChild(list);

    var  descr= document.createTextNode(addDescriptionElement.value);
    var list2 = document.createElement("li");
    list2.appendChild(descr);
    document.getElementById("listitems").appendChild(list2)

    // var descr = shopItems.getList(addBudgetElement.value);
    var budget = document.createTextNode(addBudgetElement.value);
    var list3 = document.createElement("li");
    list3.appendChild(budget);
    document.getElementById("listitems").appendChild(list3)


}
