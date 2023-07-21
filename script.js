
const app = Vue.createApp({

    data() {

        return {
            toDoList: [
                {
                    id: 1,
                    text: "target 1",
                    done: true,

                },
                {
                    id: 2,
                    text: "target 2",
                    done: true,

                },
                {
                    id: 3,
                    text: "target 3",
                    done: true,

                }
            ],
            lastId: 3,
            newItem: {
                id: "",
                text: "",
                done: "",
            },
            barred: "",
        }
    },

    methods: {
        addToDoItem() {
            const itemClone = { ...this.newItem, id: ++this.lastId };


            this.toDoList.push(itemClone);
        },
        onItemClick() {
            this.barred = "line-through";
        }

    },
})

app.mount("#app")
