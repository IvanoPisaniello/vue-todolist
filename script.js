
const app = Vue.createApp({

    data() {

        return {
            toDoList: [
                // {
                //     id: 1,
                //     text: "target 1",
                //     done: "false",

                // },
                // {
                //     id: 2,
                //     text: "target 2",
                //     done: "false",

                // },
                // {
                //     id: 3,
                //     text: "target 3",
                //     done: "false",

                // }
            ],
            lastId: 0,
            newItem: {
                id: "",
                text: "",
                done: false,
            },
            doneId: "null",


        }
    },

    methods: {
        addToDoItem() {
            const itemClone = { ...this.newItem, id: ++this.lastId };

            console.log(itemClone)
            this.toDoList.push(itemClone);
            this.newItem.text = "";

        },
        // onItemClick(i) {
        //     this.newItem.done = "true";

        //     

        // },
        onDeleteClick(targetId) {
            // trovo l'indice ad ogni ID
            let indexItem = this.toDoList.findIndex((target) => target.id === targetId);
            this.toDoList.splice(indexItem, 1);
            console.log(indexItem)
        },
        onDoneClick(target) {
            for (let i = 0; i < this.toDoList.length; i++) {


                if (this.toDoList[i] === target) {
                    this.toDoList[i].done = true;
                }

            }



            console.log(this.doneId);
        },

        onItemClick() {
            // this.newItem.done = "false";

        },

    },
})

app.mount("#app")
