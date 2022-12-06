<template>
  <table>
    <thead>
      <th>
        {{boutique.nom}}
      </th>
    </thead>
    <tbody>
      <tr>
        <td>
          Stock : {{boutique.itemStock.length}} item(s)
        </td>
        <td>
          Sur commande : {{boutique.itemCommande.length}} item(s)
        </td>
      </tr>
      <tr>
        <td>
          <CheckedList :data="boutique.itemStock"
                       :fields="['nom', 'prix']"
                       :itemCheck="true"
                       :checked="selectedItem"
                       :itemButton="{text: 'achat'}"
                       :listButton="{text: 'Acheter selectionnes'}"
                       @item-button-clicked="commande()"
                       @list-button-clicked="commandeAll()"
          >
          </CheckedList>
        </td>
        <td>
          <CheckedList :data="boutique.itemCommande"
                       :fields="['nom', 'prix']"
                       :itemCheck="false"
                       :checked="[]"
                       :itemButton="{text: 'Commande'}"
                       :listButton="{text: ''}"
                       >
          </CheckedList>
        </td>
      </tr>

    </tbody>

  </table>



</template>

<script>
import CheckedList from "@/components/CheckedList";
export default {
  name: "ShopList",
  components: {CheckedList},
  props: {
    boutique: Array,
  },
  computed: {
    selectedItem(){
      return Array(this.boutique.itemStock.length).fill(true)
    },
  },
  methods:{

    commandeAll(){
      let res = ''
      for (let i=0; i < this.boutique.itemStock.length; i++){
        if (!this.selectedItem[i]){
          res += this.boutique.itemStock[i].nom + ', '
        }
      }
      alert(res)
    },
    commande(item){
      alert(this.boutique.itemStock[item].nom)
    }
  }
}
</script>

<style scoped>

</style>