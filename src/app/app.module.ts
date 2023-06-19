import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HelpComponentComponent } from './help-component/help-component.component';
import { ConverterApiService } from './services/converterApi.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    HomeComponent,
    NavComponent,
    HelpComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ConverterApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
