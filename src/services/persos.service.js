import LocalSource from "@/datasource/controller";
import {Perso} from './data.service'

async function getAllCharacsFromLocalSource(){
    return LocalSource.getAllCharacs()
}

async function getAllCharacs(){
    let response = null;
    try{
        response = await getAllCharacsFromLocalSource()
        if(response.error === 0){
            let characs = []
            response.data.forEach(t => characs.push(Perso.fromAPI(t)))
            response.data = characs
        }
    }catch (e) {
        response = {error:1, data:'erreur réseau, impossible de récuperer la liste des characs '}
    }
    return response
}

export default {
    getAllCharacs
}