let list = [ 
    {id: 0, Name: 'garri', Date: "Sun Jan 22 2023 11:14:02 GMT+0100 (West Africa Standard Time"},
    {id: 1, Name: 'beans', Date: "Sun Jan 22 2023 11:14:02 GMT+0100 (West Africa Standard Time"}
]


const updateList = (id, name) => {
    let value = list.findIndex((obj => obj.id == id));

    list[value].Name = name;
    list[value].Date = "today";
}

const deleteList = (name) => {
    let value = list.findIndex((obj => obj.item == name));
    list.splice(value, 1)
}


updateList(0, "Chika")
deleteList("beans")
deleteList("Chika")

console.log(list)