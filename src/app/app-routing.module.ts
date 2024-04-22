import { WeatherHomeComponent } from './modules/weather/page/weather-home/weather-home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', //quando o caminho estiver vazio, ele redireciona
    redirectTo: 'weather', //será direcionado para esse componente
    pathMatch: 'full',
  },
  {
      path: 'weather',
      component: WeatherHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
