let list = []

const date = new Date();

const addToList = (name) => {
    let object = {
        item: name,
        created_at: date
        }

    list.push(object)
    console.log(list)
}

const displayList = () => {
    console.log(list)
}

const updateList = (old_name, name) => {
    try {
        let value = list.findIndex((obj => obj.item == old_name));
        list[value].item = name;
        list[value].created_at = date;
    }
    catch(err) {
        console.log("Name not found")
    }
}

const deleteList = (name) => {
    try {
        let value = list.findIndex((obj => obj.item == name));
        list.splice(value, 1)
    }
    catch(err) {
        console.log("Name not found")
    }
}

export {addToList, displayList, list, updateList, deleteList}