import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NomregionService {
 env= environment
 
  constructor(private http: HttpClient) { }


  /*private Long idnomregion;
  private String nom;
  private String superfie;
  private String coderegion;
  private String activite;*/
  AjouterNomRegion(nom: String,superfie: String, coderegion: String, activite: String, pays: any, file: File ): Observable<any>{
    const data: FormData = new FormData();

    const nomregion = [{
      "nom": nom,
      "superfie": superfie,
      "coderegion": coderegion,
      "activite": activite,
      //"imgregion": "",

    }]
    data.append('file', file)
    data.append('nomregion', JSON.stringify(nomregion).slice(1, JSON.stringify(nomregion).lastIndexOf(']')))
    return this.http.post(`${this.env.api}/nomregion/add/${pays}`, data);

  }
}
