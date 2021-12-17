import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, DoCheck {

  //variables Input
  @Input() public listOfPokemones: Array<Pokemon> ;

  @Input()
  public searchPokemon:string;

  @Input()
  public setNombre:string;

  @Input()
  public setPeso:string;

  //variables componente
  public list:Array<Pokemon>;
  public page:number=1;
  public pageSize:number=10;



  constructor() {
    this.listOfPokemones=[];
    this.searchPokemon="";
    this.list=[];
    this.setNombre="";
    this.setPeso="";
  }

  ngOnInit(): void {
    this.list=this.listOfPokemones;

  }


  ngDoCheck():void{

    //Buscar el pokemon en la lista
    if(this.searchPokemon){
      this.listOfPokemones=this.listOfPokemones.filter(pokemon=>!pokemon.nombre.search(this.searchPokemon));
    }else{
      this.listOfPokemones=this.list;
    }


    //Ordenar por nombre
    if(this.setNombre==="ASC" && this.listOfPokemones.length>1){
      console.log("Nombre->"+this.setNombre)
      this.listOfPokemones=this.listOfPokemones.sort((pokemon1,pokemon2)=>{
        if(pokemon1.nombre>pokemon2.nombre){
          return 1;
        }if(pokemon1.nombre<pokemon2.nombre){
          return -1;
        }
        return 0;
      });
    }else if(this.setNombre==="DES" && this.listOfPokemones.length>1){

      this.listOfPokemones=this.listOfPokemones.sort((pokemon1,pokemon2)=>{
        if(pokemon1.nombre>pokemon2.nombre){
          return 1;
        }if(pokemon1.nombre<pokemon2.nombre){
          return -1;
        }
        return 0;
      }).reverse();
    }else if(this.setNombre==="choose" && !this.searchPokemon){
      this.listOfPokemones=this.list;
    }

    //Ordenar por peso
    if(this.setPeso==="ASC" && this.listOfPokemones.length>1){

      this.listOfPokemones=this.listOfPokemones.sort((pokemon1,pokemon2)=>{

        if(pokemon1.peso>pokemon2.peso){
          return 1;
        }if(pokemon1.peso<pokemon2.peso){
          return -1;
        }
        return 0;
      })
    }else if(this.setPeso==="DES" && this.listOfPokemones.length>1){

      this.listOfPokemones=this.listOfPokemones.sort((pokemon1,pokemon2)=>{
        if(pokemon1.peso>pokemon2.peso){
          return 1;
        }if(pokemon1.peso<pokemon2.peso){
          return -1;
        }
        return 0;
      }).reverse();
    }else if(this.setPeso==="choose" && !this.searchPokemon){

      this.listOfPokemones=this.list;
    }




  }

}
