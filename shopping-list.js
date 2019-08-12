// shopping list factory function here
function factoryShoppingList() {
    var myTopicList = [];
    var myList = [];
    var budgetAmount = 0;

    function enterTopic(topicName) {
        var name = topicName.substring(0).toUpperCase('') + topicName.slice(2);

        if (!myTopicList.includes(name)) {
            myTopicList.push(name)

        }
    }

    function getTopic() {
        return myTopicList;
    }

    function enterList(list) {
        var names = list.substring(0).toUpperCase('') + tlist.slice(2);
        if (!myList.includes(names)) {
            myList.push(names)

        }

        }
    

    function getList() {
        return myList;
    }

    function enterBudget(totalBudget) {
          budgetAmount += totalBudget;
    }
    function getBudget() {
        return budgetAmount;
    }

return{
    enterTopic,
    getTopic,
    enterList,
    getList,
    enterBudget,
    getBudget
}
}
