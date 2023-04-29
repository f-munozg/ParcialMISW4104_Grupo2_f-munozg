import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planta } from './plant';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PlantsService {
  private apiURL = environment.baseUrl + "202212_MISW4104_Grupo2.json";

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiURL);
  }

}
