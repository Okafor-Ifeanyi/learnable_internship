import {addToList, displayList, updateList, deleteList} from "./store.js";

console.log("Welcome to Prog-bios Automated TO Do List")

while (true) {
    let request = prompt("Pick a function \nAdd, Update, Delete, Display, Exit")

    if (request === "Exit" || request === "exit"){
        break
    }
    if (request === "Add" || request === "add") {
        while (true) {
            let name = prompt("Add Items, click Exit to go back");
            if (name === "Exit" || name === "exit") {
                break
            }
            else{ addToList(name) }
        }
    }
    else if (request === "Update" || request === "update") {
        let old_text = prompt("What's the Name of the item stored")
        let value = prompt("Enter new Item")
        updateList(old_text, value);
    }
    else if (request === "Delete" || request === "delete") {
        let name = prompt("What's the name of the item stored ? ")
        deleteList(name)
    }
    else if (request === "Display" || request === "display") {
        displayList()
    }
    else { console.log("Please crosscheck input and select again") }
}