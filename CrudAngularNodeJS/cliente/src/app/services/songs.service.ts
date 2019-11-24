import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cancion } from '../models/Cancion';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SongsService {

  API_URI = 'http://172.26.10.226:3000/api/v1/canciones'
  constructor(private http: HttpClient) { }

  getSongs() {
    return this.http.get(`${this.API_URI}/`);
  }

  getSong(id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  deleteSong(id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  saveSong(song: any) {
    return this.http.post('http://192.168.56.102:3000/api/v1/canciones/', song);
  }

  updateGame(id: string, updatedSong: any): Observable<Cancion> {
    return this.http.put<any>(`${this.API_URI}/${id}`, updatedSong);
  }
}
