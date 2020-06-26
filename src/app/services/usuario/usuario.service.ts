import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario;

  constructor() { }

  setUsuario(usuario) {
    this.usuario = usuario
  }

  getUsuario() {
    return this.usuario
  }
}
