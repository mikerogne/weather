<template>
    <div>
        <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#locModal"
        >
            Set Location
        </button>

        <!-- Modal -->
        <div
            class="modal fade"
            id="locModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="locModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="locModalLabel">
                            Choose Location
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="w-form" @submit.prevent="update">
                            <div class="form-group">
                                <label for="zip">Zip</label>
                                <input type="text" v-model="zip" id="zip" class="form-control"/>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button id="w-change-btn" @click="update" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                zip: '',
            };
        },
        methods: {
            update() {
                window.$('#locModal').modal('hide');
                this.$emit('update', this.zip);
            }
        },
        mounted() {
            window.$('#locModal').on('shown.bs.modal', () => {
                window.$('#zip').focus();
            });
        },
    }
</script>
