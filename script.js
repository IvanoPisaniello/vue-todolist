
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
            lastId: 3,
            newItem: {
                id: "",
                text: "",
                done: "false",
            },
            barred: "line-through",
        }
    },

    methods: {
        addToDoItem() {
            const itemClone = { ...this.newItem, id: ++this.lastId };


            this.toDoList.push(itemClone);
        },
        // onItemClick(i) {
        //     this.newItem.done = "true";

        //     // console.log(indexItem)

        // },
        onDeleteClick(targetId) {
            // trovo l'indice ad ogni ID
            let indexItem = this.toDoList.findIndex((target) => target.id === targetId);
            this.toDoList.splice(indexItem, 1);
        },
        onBarrClick() {
            this.newItem.done = "true";
        }



    },
})

app.mount("#app")
