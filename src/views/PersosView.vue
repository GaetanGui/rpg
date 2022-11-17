<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <label for="filteractive"> filtrage possible : </label><input type="checkbox" v-model="filterActive" id="filteractive">
        <div v-if="filterActive">
          <label for="filerCharac">filtre : </label><input class="filter" v-model="filter" id="filterCharacs">
        </div>
        <ul>
          <li v-for="(perso, index) in persosFiltre" :key="index">{{perso.nom}}</li>
        </ul>
      </v-col>

      <v-col>
        <table v-if="persosFiltre.length === 1">
          <thead>
            <tr>
              <th>
                Attributs
              </th>
              <th>
                Emplacements
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <ul>
                  <li>Niveau: {{persosFiltre[0].niveau}}</li>
                  <li>Vie: {{persosFiltre[0].attributs.vie}}</li>
                  <li>Vitalité: {{persosFiltre[0].attributs.vitalite}}</li>
                  <li>Force: {{persosFiltre[0].attributs.force}}</li>
                  <li>Armure: {{persosFiltre[0].attributs.protection}}</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>tete
                    <span v-if="getLengthItemByNom('head')> 0">
                        [{{getLengthItemByNom("head")}}]: {{getItemByNom('head')}}
                    </span>
                  </li>
                  <li>corps
                    <span v-if="getLengthItemByNom('body')> 0">
                        [{{getLengthItemByNom("body")}}]: {{getItemByNom('body')}}
                    </span>
                  </li>
                  <li>main
                    <span v-if="getLengthItemByNom('hands')> 0">
                        [{{getLengthItemByNom("hands")}}]: {{getItemByNom('hands')}}
                    </span>
                  </li>
                  <li>ceinture
                    <span v-if="getLengthItemByNom('belt')> 0">
                        [{{getLengthItemByNom("belt")}}]: {{getItemByNom('belt')}}
                    </span>
                  </li>
                  <li>sac à dos
                    <span v-if="getLengthItemByNom('bag')> 0">
                        [{{getLengthItemByNom("bag")}}]: {{getItemByNom('bag')}}
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                or: {{persosFiltre[0].or}}
              </td>
              <td>
                items achetés
                <span v-if="getLengthItemAchete() > 0">[{{getLengthItemAchete()}}]: {{getItemAchetes()}}</span>

              </td>
            </tr>
          </tbody>
        </table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: 'PersosView',
  data: () => ({
    filter: '',
    filterActive : false
  }),
  computed: {
    ...mapState(['persos']),
    persosFiltre() {
      if(this.filterActive)
        return this.persos.filter(p => p.nom.includes(this.filter))
      return this.persos
    }
  },
  methods: {
    getLengthItemByNom(nom){
      return this.persosFiltre[0].emplacements.filter(e => e.nom === nom)[0].items.length
    },
    getItemByNom(nom) {
      return this.persosFiltre[0].emplacements.filter(e => e.nom === nom)[0].items.map(i => i.nom).join(',')
    },
    getLengthItemAchete(){
      return this.persosFiltre[0].itemsAchetes.length
    },
    getItemAchetes(){
      return this.persosFiltre[0].itemsAchetes.map(j => j.nom).join(',')
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