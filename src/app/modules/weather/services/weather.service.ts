import { Injectable } from '@angular/core'; // Importa o decorador Injectable do Angular, usado para declarar um serviço.
import { HttpClient } from '@angular/common/http'; // Importa o serviço HttpClient para fazer requisições HTTP.
import { Observable } from 'rxjs'; // Importa a classe Observable do RxJS, usada para trabalhar com dados assíncronos.

@Injectable({
  providedIn: 'root' // O serviço é fornecido no nível raiz, disponível para toda a aplicação.
})
export class WeatherService { // Declaração da classe WeatherService, que será um serviço Angular.
  private apiKey = '93987142748b67853f19bb9905f10d11'; // Chave de API privada para autenticação com o serviço de clima.

  constructor(private http: HttpClient) { } // O construtor injeta o serviço HttpClient, necessário para fazer requisições HTTP.

  getWeatherDatas(cityName: string): Observable<any>{ // Método para obter dados do clima, retorna um Observable.
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, {}); // Faz uma requisição GET para a API de clima, usando o nome da cidade e a chave da API.
  }
}
