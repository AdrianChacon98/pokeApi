import { Component, DoCheck, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from './models/pokemon';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , DoCheck{

  //Variables componente
  public pokemones : Array<Pokemon>;

  public nombre:string;

  public peso:string;

  public search:string;



  constructor(private _http:HttpClient){
    this.pokemones=[];
    this.nombre="";
    this.peso="";
    this.search="";
  }

  ngOnInit(): void {

    //Traer los pokemones y asignarlos la lista
    var index=1;
    while(index<=310){
      let i=index;
      this.getPokemones(index).subscribe(
        response=>{
          let {forms,weight}=response;

          this.pokemones.push({id:i,nombre:forms[0].name,peso:weight})
        },
        error=>{
          console.log(error);
        }
      )
      index+=1;
    }



  }

  ngDoCheck(): void {

  }
  //Traer los pokemones
  getPokemones(id:number):Observable<any>{
    return this._http.get(" https://pokeapi.co/api/v2/pokemon/"+id);
  }

  //Metodos para asignar variables de componentes hijos a variables de padre
  searchPokemon(event:string)
  {
    this.search=event;
  }

  setNombreOrder(event:string)
  {

    this.nombre=event;
    this.peso="choose";
  }

  setPesoOrder(event:string){
    this.peso=event;
    this.nombre="choose";
  }







}
