import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formulario:FormGroup

  constructor(private fb:FormBuilder) { 
    this.crearFormulario();
  }

  ngOnInit() {
  }
  //validaciones
validaciones(input:any){
  // console.log(valor);
  return this.formulario.get(input).invalid && this.formulario.get(input).touched;
}

  crearFormulario(){
    this.formulario = this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(7)]],
      apellido:['',[Validators.required,Validators.minLength(10)]],
      correo:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    })
  }
  guardar(){
    
    if(this.formulario.invalid){
      Object.values(this.formulario.controls).forEach(control =>{
         control.markAsTouched();
      })
      return 
    }
    console.log(this.formulario)

  }

}
