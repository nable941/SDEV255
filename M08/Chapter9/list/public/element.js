const Element = {
    data() {
        return {
            input : false
        }
        },
    template : `
        <li>
            <span v-if="!input"> {{element.text}} </span>
            <input v-else type="text" :value="element.text" @blur="modify($event)" ref="refInput" />
            <button @click="remove()"> Remove </button>
            <button @click="input=true"> Modify </button>
         </li>
        `,
    props : ["element"],
    methods : {
    remove() {
        this.$emit("remove", { id : this.element._id });
        },
        modify(event) {
            var value = event.target.value;
            this.input = false;
            this.$emit("modify", { id : this.element._id, value : value });
            }
        },
    // check that refInput exists, and if so, give focus to
    // the input field
    emits : ["remove", "modify"], updated() {
    if (this.$refs.refInput) this.$refs.refInput.focus();
        }
    }
    export default Element;

