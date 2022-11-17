<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <div>
          <label class="col" for="filteractive">filtrage possible : </label><input type="checkbox" v-model="filterActive" id="filteractive">
          <div class="col" v-if="filterActive">
            <label for="filtertown">filtre : </label><input class="filter" v-model="filter" id="filtertown">
          </div>
          <ul>
            <li v-for="(ville, index) in villesFiltre" :key="index">{{ville.nom}}</li>
          </ul>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <table v-if="villesFiltre.length === 1">
           <thead>
            <tr>
              <th>
                  rues: {{villesFiltre[0].rues.length}}
              </th>
              <th>
                  boutiques
              </th>
            </tr>
           </thead>
           <tbody>
              <tr v-for="(rue, index) in villesFiltre[0].rues" :key="index">
                <td>{{rue.nom}} : {{rue.boutiques.length}}</td>
                <td>
                  <ul>
                    <li v-for="(boutique, index) in rue.boutiques" :key="index">
                      {{boutique.nom}} : {{boutique.itemStock.length}} articles en stock, {{boutique.itemCommande.length}} sur commande
                    </li>
                  </ul>
                </td>
              </tr>
           </tbody>
        </table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {mapState} from 'vuex'
export default {
  name: 'TownsView',
  data: () => ({
    filter: '',
    filterActive : false
  }),
  computed: {
    ...mapState(['villes']),
    villesFiltre() {
      if(this.filterActive)
        return this.villes.filter(v => v.nom.includes(this.filter))
      return this.villes
    }
  }

}
</script>

<style>
  .filter{
    border: 1px solid black;
  }
  table{
    border-collapse: collapse;
  }
  td,th{
    border:1px solid black
  }
</style>