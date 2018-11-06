import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Names } from './../_models/names';

@Injectable()
export class NamesService {

  private _url: string = "./../../assets/data/names.json";

    constructor(private http: HttpClient) { }

    getNames() {
        return this.http.get<Names[]>(this._url);
    }

    getById(id: number) {
        return this.http.get(this._url + id);
    }

    update(name: Names) {
        return this.http.put(this._url + name.id, name);
    }

    delete(id: number) {
      return this.http.delete(this._url + id);
    }
}