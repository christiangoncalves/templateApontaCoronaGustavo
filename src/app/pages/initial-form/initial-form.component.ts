import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-form',
  templateUrl: './initial-form.component.html',
  styleUrls: ['./initial-form.component.scss']
})
export class InitialFormComponent implements OnInit {

  form: FormGroup

  constructor
  (
    private _fb: FormBuilder,
    private httpClient: HttpClient,
    private usuario: UsuarioService,
    private router: Router
  ) 
  { 
    this.form = _fb.group({
      infectado: ['', Validators.required],
      qtd_sai_casa: ['', Validators.required],
      contato: ['', Validators.required],
      risco: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  EntrarSemDados() {
    this.router.navigate(['home'])
  }

  async Submit() {
    let weight = 0
    let formVal = this.form.value

    weight += 
      parseFloat(formVal.infectado) + 
      parseFloat(formVal.qtd_sai_casa) + 
      parseFloat(formVal.contato) + 
      parseFloat(formVal.risco)

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async position => {
        
        await this.PostUser(position.coords, weight).subscribe()

        this.usuario.setUsuario({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          weight: weight
        })
        
        this.router.navigate(['home'])
      })
    }
    else {
      alert('Não conseguimos encontrar seu local.')
    }
  }

  PostUser(cords, weight) {
    return this.httpClient.post(`${environment.url}/users`, {
      lat: cords.latitude,
      long: cords.longitude,
      weight: weight
    })
  }
}
