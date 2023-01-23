import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnneesService {
  env=environment

  constructor(private http: HttpClient) { }

  AjouterAnnee(date: Date):Observable<any>{

    const data: FormData = new FormData();


    const annees = {
      "date": date,
    }
    return this.http.post(`${this.env.api}/annee/add`, annees)
  }

}
