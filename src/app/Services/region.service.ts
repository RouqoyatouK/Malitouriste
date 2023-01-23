import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  env= environment

  constructor(private http: HttpClient) { }
  AjouterRegion(habitants: String, nomrg:any):Observable<any>{

    //    const data: FormData = new FormData();
    const region = {
      "habitants": habitants,
    }

    return this.http.post(`${this.env.api}/region/add/${nomrg}`, region)
  }
}

