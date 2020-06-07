import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario={
    nombre:'',
    apellido:'',
    email:'',
  }

  constructor() { }

  ngOnInit() {
  }
  guardar(formulario:NgForm){
    
    if(formulario.invalid){
      Object.values(formulario.controls).forEach(control =>{
        control.markAsTouched();
      })
      return 
    }
    console.log("estoy envienado",formulario.value);
  }

}
