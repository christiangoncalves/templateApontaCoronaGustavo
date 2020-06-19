import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    private httpClient: HttpClient
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

  Submit() {
    let lat = 0, long = 0, weight = 0
    let formVal = this.form.value

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude
        long = position.coords.longitude    
      })
    }

    weight += 
      parseFloat(formVal.infectado) + 
      parseFloat(formVal.qtd_sai_casa) + 
      parseFloat(formVal.contato) + 
      parseFloat(formVal.risco)
    
    this.httpClient.post(`${environment.url}/users`, {
      lat: lat,
      long: long,
      weight: weight
    }).subscribe(res => {
      console.log(res)
      alert('Parabéns, a próxima tela é só amanhã.')
    }, err => {
      alert('Deu erro Kris...')
      console.log(err)
    })
  }
}
