import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccueilService {
env=environment;
  constructor(private http: HttpClient) { }

   //Afficher toute les region
   getRegion():Observable<any>{
    return this.http.get(`${this.env.api}/nomregion/read`);
   /* const data:FormData=new FormData();
      const user=[{"login":username,"password":email}]
      data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));*/

    /*doTirage(login:String,password:String,libelleliste:number,nombre:number,libelleTirage:String):Observable<any>{
      const data:FormData=new FormData();
      const user=[{"login":login,"password":password}]
      data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));*/
   //this.API_URL+this.ENDPOINT_Liste
    //(`${this.env.api}​/utilisateur​/tirageById​/${id}`,data);

  }

  //Afficher details region

  getUnRegion(idnomregion: any):Observable<any>{
    return this.http.get(`${this.env.api}/nomregion/read/${idnomregion}`)
  }

}
