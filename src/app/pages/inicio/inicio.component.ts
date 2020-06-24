import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  // @ViewChild('mapElement') mapElement: any;
  map: google.maps.Map;
  heatmap
  
  constructor
  (
    private httpClient: HttpClient
  ) 
  { 
    this.httpClient.get(`${environment.url}/heatmap`).subscribe((res: any) => {
      let points = []

      res.map(r => {
        points.push(
          { location : new google.maps.LatLng(r.lat, r.long),
            weight: r.weight 
          })
      })

      this.renderHeatmap(points)
    })
  }

  ngOnInit(): void {
    this.initMap()
  }

  initMap() {
    const mapEl = document.getElementById('mapElement')

    const mapProperties = {
      center: {lat: -19.868811, lng: -43.946564},
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(mapEl, mapProperties);

    var marker = new google.maps.Marker({
      position: {lat: -19.868811, lng: -43.946564},
      map: this.map,
      animation: google.maps.Animation.DROP,
      icon: {url:'https://cdn.iconscout.com/icon/free/png-256/injection-medical-syringe-vaccine-dopping-test-5-25583.png', scaledSize: new google.maps.Size(50, 50)},
      title: 'Casa do Chapéu'
    });
  }
  
  renderHeatmap(data) {
    this.heatmap = new google.maps.visualization.HeatmapLayer({
      data: data,
      map: this.map,
      maxIntensity: 5
    })
  }
}
