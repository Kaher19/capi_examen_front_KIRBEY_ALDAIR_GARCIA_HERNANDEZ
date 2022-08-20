import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Model/usuarios.model';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss']
})
export class TablaUsuariosComponent implements OnInit {
  private url:string = environment.apiUrl
  usuarios:Usuario[] = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Usuario[]>(`${this.url}/api/usuarios`)
      .subscribe({
        next:respuesta=>{
          this.usuarios = respuesta
        },
        error: error=>{
          alert(`Ha ocurrido un error: ${error.message}`)
        }
      })
  }

}
