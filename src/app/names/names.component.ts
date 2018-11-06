import { NamesService } from './../_services/names.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Names } from './../_models/names';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'names-detail',
  templateUrl: 'names.component.html'
})

export class NamesComponent implements OnInit {
  public names = [];
  public errorMsg;

//   private _url: string = "./../../assets/data/names.json";

  constructor(private _namesService:NamesService, private http:HttpClient) { }

  ngOnInit() {
    this.loadAllNames();
  }

  deleteName(id: number) {
    this._namesService.delete(id).pipe(first()).subscribe(() => { 
        this.loadAllNames() 
    });
  }

  private loadAllNames() {
    this._namesService.getNames().pipe(first()).subscribe(names => { 
        this.names = names; 
    });
  }

}