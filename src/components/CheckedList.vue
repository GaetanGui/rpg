<template>
  <div>
        <ul>
          <li v-for="(data,index) in data" :key="index">
            <input type="checkbox" v-if="itemCheck" :checked="checked[i]" @click="$emit('checked-changed', index)">
            <span v-for="(value, i) in fields" :key="i">
              {{data[value]}}
            </span>
            <button class="test" @click="$emit('item-button-clicked', index)">{{itemButton.text}}</button>
          </li>
        </ul>
        <button class="test" @click="$emit('list-button-clicked')" >{{listButton.text}}</button>
  </div>
</template>

<script>

export default {
  name: 'CheckedList',
  props: {
    data: Array, // les données sources
    fields: Array, // le tableau contenant le nom des champs
    itemCheck: Boolean, // s'il y a des case à cocher
    checked: Array, // le tableau des cases cochées
    itemButton: Object, // l'objet pour les boutons d'items
    listButton: Object, // l'objet pour le bouton de liste
  },
}


</script>

<style scoped>
.test{
  border: 1px solid black;
  background-color: #f1cfab;
}

</style>