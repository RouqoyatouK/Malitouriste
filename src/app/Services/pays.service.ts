import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaysService {
  env= environment


  constructor(private http: HttpClient) { }

   //Pour pays ajouter pays
   AjouterPays(nompays: String, superficie: String):Observable<any>{


    const data: FormData = new FormData();
    console.log(nompays);
    
   const pays = {
     "nompays": nompays,
     "superficie": superficie,

   }

    return this.http.post(`${this.env.api}/pays/add/`, pays);
   }


   //Afficher pays

   AfficherPays(): Observable<any>{
    return this.http.get(`${this.env.api}/pays/read`);
   }

}
