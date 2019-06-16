import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecentsComponent } from './components/recents/recents.component';
import { HttpClientModule } from '@angular/common/http';
import { CloudTitleComponent } from './components/cloud-title/cloud-title.component';
import { LittleButtonComponent } from './components/little-button/little-button.component';
import { SpecialsComponent } from './components/specials/specials.component';
import { DesignComponent } from './components/design/design.component';
import { HomeComponent } from './components/home/home.component';
import { BigButtonComponent } from './components/big-button/big-button.component';
import { GroupboxComponent } from './components/groupbox/groupbox.component'
import { FormsModule } from '@angular/forms';
import { NonWrapsPipe } from './components/recents/non-wraps.pipe';
import { WrapsPipe } from './components/recents/wraps.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecentsComponent,
    CloudTitleComponent,
    LittleButtonComponent,
    SpecialsComponent,
    DesignComponent,
    HomeComponent,
    BigButtonComponent,
    GroupboxComponent,
    NonWrapsPipe,
    WrapsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
