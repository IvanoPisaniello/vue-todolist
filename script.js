
const app = Vue.createApp({

    data() {

        return {
            toDoList: [
                {
                    id: 1,
                    text: "target 1",
                    done: false,

                },
                {
                    id: 2,
                    text: "target 2",
                    done: false,

                },
                {
                    id: 3,
                    text: "target 3",
                    done: false,

                }
            ],
            lastId: 3,
            newItem: {
                id: "",
                text: "",
                done: "false",
            },
            barred: "",
        }
    },

    methods: {
        addToDoItem() {
            const itemClone = { ...this.newItem, id: ++this.lastId };


            this.toDoList.push(itemClone);
        },
        onItemClick(targetId) {
            this.barred = "line-through";
            this.newItem.done = "true";
            //trovo l'indice ad ogni ID
            let indexItem = this.toDoList.findIndex((target) => target.id === targetId);
            console.log(indexItem)

        }

    },
})

app.mount("#app")
