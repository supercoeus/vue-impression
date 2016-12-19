export default {
    props: {
        eventKey: {},
        disabled: Boolean,
    },
    data() {
        return {
            currentEventKey: this.eventKey,
            index: 0,
        };
    },
    mounted() {
        this.index = this.$parent.$children.indexOf(this);
        this.eventKey === undefined && (this.currentEventKey = this.index);
    },
    methods: {
        clickHandle() {
            !this.disabled && (this.$parent.$emit('itemClick', this.currentEventKey, this.index));
        },
    },
};
