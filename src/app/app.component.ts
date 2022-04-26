/*Importações necessárias*/
import { Component, OnInit } from '@angular/core';
import {dados} from './arquivo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  /*Variável recebendo Array dados contida em arquivo.ts*/
  lista = dados;
    
    ngOnInit() {
      
    }
}

