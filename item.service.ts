import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Items } from '../items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }
  get(){
    return this.http.get<Items[]>(`http://localhost:8000/items`);
  }
  create(playload:Items){
    return this.http.post<Items[]>(`http://localhost:8000/items`,playload);
  }
  getById(id:number){
    return this.http.get<Items[]>(`http://localhost:8000/items/${id}`);
  }
  update(playload:Items){
    return this.http.put<Items[]>(`http://localhost:8000/items/${playload.id}`,playload);
  }
  delete(id:number){
    return this.http.delete<Items[]>(`http://localhost:8000/items/${id}`);
  }
}
