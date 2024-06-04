import { Component, OnDestroy, OnInit } from '@angular/core'; // Importa os decoradores Component e OnInit do Angular.
import { WeatherService } from '../../services/weather.service'; // Importa o serviço WeatherService para uso neste componente.
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home', // Define o seletor do componente, usado em templates HTML para instanciar o componente (nome da TAG HTML que será usada para inserir o componente nos templates).
  templateUrl: './weather-home.component.html', // Especifica o caminho para o template HTML do componente.
  styleUrls: [], // Especifica o caminho para os arquivos de estilo do componente
})
export class WeatherHomeComponent implements OnInit, OnDestroy { // Declaração da classe do componente, implementando OnInit para o ciclo de vida do Angular.
  private readonly destroy$: Subject <void> = new Subject();
  initialCityName = 'Belo Horizonte'; // Define o nome inicial da cidade para a busca de dados meteorológicos.
  weatherDatas!: WeatherDatas;
  searchIcon = faMagnifyingGlass; //icone que será utilizado no layout.
  constructor(private weatherService: WeatherService) {} // Injeta o serviço WeatherService no construtor do componente.
  ngOnInit(): void { // Método do ciclo de vida do Angular, chamado uma vez que o componente é inicializado. Oninit executa quando acaba de ser renderizado o componente
    this.getWeatherDatas(this.initialCityName); // Chama o método para obter dados meteorológicos da cidade inicial.
  }

  getWeatherDatas(cityName: string): void { // Método para obter dados meteorológicos, aceitando o nome da cidade como parâmetro.
    this.weatherService.getWeatherDatas(cityName)
    .pipe(
      takeUntil(this.destroy$) //passamos a assinatura que queremos posteriormente nos desinscrever, evitando o memory leak.
    )
    .subscribe({ // Chama o método do serviço e se inscreve no Observable retornado. Quando nos inscrevemos num observable, é como se estivessemos escutando esse observable "para sempre", ou seja, quando fecharmos o componente Weather Home e irmos para outra rota, continuaremos escutando esse componente. Nesse caso pode causar o Memory Leak, então precisamos no desinscrever de um observable.
      next: (response) => { // Callback para o caso de sucesso da requisição.
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas)
      },
      error: (error) => console.log(error), // Callback para o caso de erro na requisição.
    });
  }

  onSubmit(): void{
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

  /**
   *
    quando o componennte for desmontado,
    ou seja, sairmos da tela, esse componennte será desmontado e entrará dentro desse bloco ngOnDestroy.
    Boa prática sempre se desinscrever dos observable.
   */

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
