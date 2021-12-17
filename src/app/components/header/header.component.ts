import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public options:Array<any>;

  @Output()
  SearchPokemon = new EventEmitter();

  @Output()
  nombreOrder = new EventEmitter();

  @Output()
  pesoOrder = new EventEmitter();



  public search:string;


  constructor() {
    this.options=[
      {tipo:"Reset"},
      {tipo:"ASC"},
      {tipo:"DES"}
    ]

    this.search="";
  }

  ngOnInit(): void {
  }

  searchPokemon(event:Event)
  {
    const element = event.target as HTMLInputElement;

    this.search=element.value;



    this.SearchPokemon.emit(this.search);

  }

  nombreSelectOrder(event:Event){

    const data = event.target as HTMLSelectElement;

    this.nombreOrder.emit(data.value);

  }

  pesoSelectOrder(event:Event){
    const data = event.target as HTMLSelectElement;


    this.pesoOrder.emit(data.value);
  }
}
