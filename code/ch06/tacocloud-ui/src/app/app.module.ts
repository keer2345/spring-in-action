import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecentsComponent } from './components/recents/recents.component';
import { HttpClientModule } from '@angular/common/http';
import { CloudTitleComponent } from './components/cloud-title/cloud-title.component';
import { LittleButtonComponent } from './components/little-button/little-button.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecentsComponent,
    CloudTitleComponent,
    LittleButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
