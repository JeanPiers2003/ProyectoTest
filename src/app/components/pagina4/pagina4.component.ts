import { Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.component.html',
  styleUrls: ['./pagina4.component.css']
})
export class Pagina4Component implements OnInit{
  carreras: any[] = [];
  nuevaCarrera: any = {};
  carreraEditada: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerCarreras();
  }

  obtenerCarreras() {
    this.http.get<any[]>('/api/carreras').subscribe(data => {
      this.carreras = data;
    });
  }

  agregarCarrera() {
    this.http.post<any>('/api/carreras', this.nuevaCarrera).subscribe(data => {
      this.nuevaCarrera = {};
      this.obtenerCarreras();
    });
  }

  eliminarCarrera(carrera: any) {
    this.http.delete(`/api/carreras/${carrera.id}`).subscribe(() => {
      this.obtenerCarreras();
    });
  }

  editarCarrera(carrera: any) {
    this.carreraEditada = { ...carrera };
  }

  guardarCambios() {
    this.http.put(`/api/carreras/${this.carreraEditada.id}`, this.carreraEditada).subscribe(() => {
      this.carreraEditada = {};
      this.obtenerCarreras();
    });
  }
}
