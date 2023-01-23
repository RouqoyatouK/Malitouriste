import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  env=environment

  constructor(private http: HttpClient) { }
  AjouterCommentaire(message:any, idnomregion: any): Observable<any>{

    const commentaire ={
      "message": message,
    }

    return this.http.post(`${this.env.api}/commentaire/add/${idnomregion}`, commentaire);

  }
}
