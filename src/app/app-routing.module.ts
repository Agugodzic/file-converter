import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';
import { HomeComponent } from './home/home.component';
import { HelpComponentComponent } from './help-component/help-component.component';

const routes: Routes = [
  { path: 'convertir', component: ConverterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'help', component: HelpComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
