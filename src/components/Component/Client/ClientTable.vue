<template>
    <div>
        <b-table
                hover
                fixed
                stripped
                selectable
                selectedVariant=""
                :items="clientList"
                :fields="fields"
                :per-page="perPage"
                :current-page="currentPage"
                :busy="isBusy"
                select-mode="single"
                @row-selected="rowSelected"
                primary-key="No"
                class="text-center"
            >
                <div slot="table-busy" class="text-center text-secondary my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                </div>
            </b-table>
            <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                align="center"
            />
    </div>
</template>

<script>
    export default {
       name: "ClientTable",
       props: ["clientList", "rows", "fields"],
       data() {
           return {
                currentPage: 1,
                perPage: 10,
                isBusy: false,
           }
       },
       methods: {
           rowSelected(items){
               this.$emit("rowSelected", items);
           }
       },
       watch: {
           clientList(){
               this.isBusy = true;
               setTimeout(() => {
                   this.isBusy = false;
               }, 1000);
           }
       },
    }
</script>

<style scoped>

</style>