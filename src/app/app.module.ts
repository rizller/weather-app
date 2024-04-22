import { NgModule } from '@angular/core';  // Importa o decorador NgModule, necessário para definir um módulo.
import { BrowserModule } from '@angular/platform-browser';  // Importa o módulo que é necessário para aplicações que rodam no navegador.

import { AppRoutingModule } from './app-routing.module';  // Importa o módulo de roteamento, definido para gerenciar as rotas da aplicação.
import { AppComponent } from './app.component';  // Importa o componente raiz da aplicação.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Importa o módulo necessário para funcionalidades de animação no navegador.
import { FormsModule } from '@angular/forms';  // Importa o módulo que permite o uso de funcionalidades relacionadas a formulários.
import { HttpClientModule } from '@angular/common/http';  // Importa o módulo para realizar operações HTTP, essencial para comunicação com APIs externas.
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherHomeComponent } from './modules/weather/page/weather-home/weather-home.component';  // Importa o módulo FontAwesome para utilizar ícones vetoriais e ícones de fonte em seus componentes Angular.


@NgModule({  // Decorador que define uma classe como um módulo Angular.
  declarations: [  // Declara componentes, diretivas, etc., que pertencem a este módulo.
    AppComponent, WeatherHomeComponent
  ],
  imports: [  // Importa outros módulos cujas exportações são necessárias para os componentes deste módulo.
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],  // Injeta serviços que podem ser utilizados por qualquer parte da aplicação.
  bootstrap: [AppComponent]  // Define o componente raiz que será instanciado no índice HTML.
})
export class AppModule { }  // Exporta AppModule para que possa ser usado em outros lugares da aplicação.
