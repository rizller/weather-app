import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ //o injectable diz que essa classe pode ser injetada em um componente
  providedIn: 'root' //o provideIn, diz aonde será provida. Como está como root, qualquer componente independente do módulo tem acesso à esse serviço.
  //Mas caso queria que esteja disponivel somente em um módulo específico, colocar na aba de providers, segmentando em apenas um módulo.
})
export class WeatherService {
  private apiKey = "93987142748b67853f19bb9905f10d11";
  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: string): Observable<any>{

  return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=matric&mode=json&appid=${this.apiKey}", {})
  }

}
