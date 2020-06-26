import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  // @ViewChild('mapElement') mapElement: any;
  map: google.maps.Map;
  heatmap
  config: SwiperConfigInterface
  produtos = [
    {
      name: "Álcool Gel Coperalcool",
      price: 19.99,
      imgPathProduct: "/assets/imgs/produtos/alcool/americanas1.png",
      imgPathstore: "/assets/imgs/lojas/americanas.png",
      linkStore: "https://www.americanas.com.br/produto/1764471363/alcool-gel-higienizador-de-maos-70-coperalcool-com-valvula-pump-dosador?DCSext.recom=RR_search.1&api=b2wads&chave=b2wads_5ee42dd35fb2bf000f127324_61147120000100_1764471363_c6439b16-9d5a-4ba0-b874-70e0c3d56cd8&nm_origem=rec_search.1&nm_ranking_rec=1&pfm_carac=Publicidade&pfm_index=0&pfm_page=search&pfm_pos=b2wAds&pfm_type=vit_recommendation&pos=1&sellerId=61147120000100&sellerName=Brandcorp"
    },
    {
      name: "ÁLCOOL GEL 70 ANTISSÉPTICO 440g",
      price: 9.50,
      imgPathProduct: "/assets/imgs/produtos/alcool/americanas2.png",
      imgPathstore: "/assets/imgs/lojas/americanas.png",
      linkStore: "https://www.americanas.com.br/produto/1588199591/alcool-gel-70-antisseptico-440g?pfm_carac=%C3%A1lcool%20gel&pfm_index=3&pfm_page=search&pfm_pos=grid&pfm_type=search_page"
    }
    ,
    {
      name: "Alcool Gel Giovanna Baby Blue 500ml",
      price: 16.99,
      imgPathProduct: "/assets/imgs/produtos/alcool/americanas3.png",
      imgPathstore: "/assets/imgs/lojas/americanas.png",
      linkStore: "https://www.americanas.com.br/produto/11894974/alcool-gel-giovanna-baby-blue-500ml?pfm_carac=%C3%A1lcool%20gel&pfm_index=1&pfm_page=search&pfm_pos=grid&pfm_type=search_page"
    },
    {
      name: "Máscaras Descartável TNT - 20 Unidades",
      price: 76.98,
      imgPathProduct: "/assets/imgs/produtos/mascaras/submarino1.png",
      imgPathstore: "/assets/imgs/lojas/submarino.png",
      linkStore: "https://www.submarino.com.br/produto/1708440909/mascaras-descartavel-triplas-tnt-com-elastico-e-clip-nasal-20-unidades?pfm_carac=mascara%20descartavel&pfm_index=1&pfm_page=search&pfm_pos=grid&pfm_type=search_page"
    },
    {
      name: "Kit máscaras N95 descartáveis - 5 Unidades",
      price: 77.90,
      imgPathProduct: "/assets/imgs/produtos/mascaras/submarino2.png",
      imgPathstore: "/assets/imgs/lojas/submarino.png",
      linkStore: "https://www.submarino.com.br/produto/1738810536/kit-mascaras-n95-descartaveis-de-protecao-facial-pff2-com-5-camadas-e-clip-nasal-5-unidades?pfm_carac=mascara%20descartavel&pfm_index=4&pfm_page=search&pfm_pos=grid&pfm_type=search_page"
    },
    {
      name: "Kit com 50 Máscaras Descartáveis de Proteção Facial com 3 Camadas e Elástico",
      price: 109,
      imgPathProduct: "/assets/imgs/produtos/mascaras/submarino3.png",
      imgPathstore: "/assets/imgs/lojas/submarino.png",
      linkStore: "https://www.submarino.com.br/produto/1743293633/kit-com-50-mascaras-descartaveis-de-protecao-facial-com-3-camadas-e-elastico?DCSext.recom=RR_search.2&api=b2wads&chave=b2wads_5ef3ac3087304d000f5adbe1_8584116000470_1743293633_43b352c8-5a1f-4a5c-82ed-436baad54067&nm_origem=rec_search.2&nm_ranking_rec=4&pfm_carac=Publicidade&pfm_index=3&pfm_page=search&pfm_pos=b2wAds&pfm_type=vit_recommendation&pos=4&sellerId=8584116000470&sellerName=Continental%20Center"
    },
    {
      name: "Luvas Vinil COM PÓ 100 unidades tam M Cleanline",
      price: 38,
      imgPathProduct: "/assets/imgs/produtos/luvas/carrefour1.png",
      imgPathstore: "/assets/imgs/lojas/carrefour.png",
      linkStore: "https://www.submarino.com.br/produto/1743293633/kit-com-50-mascaras-descartaveis-de-protecao-facial-com-3-camadas-e-elastico?DCSext.recom=RR_search.2&api=b2wads&chave=b2wads_5ef3ac3087304d000f5adbe1_8584116000470_1743293633_43b352c8-5a1f-4a5c-82ed-436baad54067&nm_origem=rec_search.2&nm_ranking_rec=4&pfm_carac=Publicidade&pfm_index=3&pfm_page=search&pfm_pos=b2wAds&pfm_type=vit_recommendation&pos=4&sellerId=8584116000470&sellerName=Continental%20Center"
    },
    {
      name: "Luva Látex com Pó Talge 100 Unidades",
      price: 45.90,
      imgPathProduct: "/assets/imgs/produtos/luvas/carrefour2.png",
      imgPathstore: "/assets/imgs/lojas/carrefour.png",
      linkStore: "https://www.carrefour.com.br/Luva-Latex-com-Po-Talge-100-Unidades/p/MV19304208"
    },
    {
      name: "Protetor facial - PP 0,5mm 1 UN",
      price: 5.90,
      imgPathProduct: "/assets/imgs/produtos/faceshield/kalunga.png",
      imgPathstore: "/assets/imgs/lojas/kalunga.png",
      linkStore: "https://www.kalunga.com.br/prod/protetor-facial-face-shield-em-pp-0-5mm-plascony-pt-1-un/549744"
    }
  ]
  
  constructor
  (
    private httpClient: HttpClient,
    private usuario: UsuarioService
  ) 
  { 
    this.config = {
      a11y: true,
      direction: 'horizontal',
      slidesPerView: 4,
      slideToClickedSlide: true,
      mousewheel: false,
      scrollbar: false,
      watchSlidesProgress: true,
      navigation: true,
      keyboard: false,
      pagination: false,
      centeredSlides: false,
      loop: true,
      roundLengths: true,
      spaceBetween: 10
    }
  }

  ngOnInit(): void {
    this.initMap()
    this.initHeatmap()
  }

  initHeatmap() {
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

  initMap() {
    const mapEl = document.getElementById('mapElement')

    const mapProperties = {
      center: {lat: -19.8788857, lng: -43.9290164},
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(mapEl, mapProperties);

    this.renderMarkers()
  }

  renderMarkers() {
    var usuario = this.usuario.getUsuario()
    console.log(usuario)
    if (usuario) {
      new google.maps.Marker({
        position: {lat: Number(usuario.lat), lng: Number(usuario.long)},
        map: this.map,
        animation: google.maps.Animation.DROP,
        icon: {
          url: '/assets/imgs/pins/user.svg', 
          scaledSize: new google.maps.Size(20, 20)
        },
      });
    }

    this.httpClient.get(`${environment.url}/places`).subscribe((res: any) => {
      console.log(res)
      res.map(place => {
        new google.maps.Marker({
          position: {lat: Number(place.lat), lng: Number(place.long)},
          map: this.map,
          animation: google.maps.Animation.DROP,
          icon: {
            url: `/assets/imgs/pins/${place.isExamining ? 'drogaria.svg' : 'drogaria_faz_teste.svg'}`, 
            scaledSize: new google.maps.Size(50, 50)
          },
        });
      })
      
    }, err => console.log(err))
  }
  
  renderHeatmap(data) {
    this.heatmap = new google.maps.visualization.HeatmapLayer({
      data: data,
      map: this.map,
      maxIntensity: 5
    })
  }
}
