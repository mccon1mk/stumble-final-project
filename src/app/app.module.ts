import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { Interceptor } from './helpers/interceptor';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StumbleHomeComponent } from './stumble-home/stumble-home.component';
import { MusicComponent } from './music/music.component';
import { AuthService } from './auth.service';
import { FamilyComponent } from './family/family.component';

@NgModule({
  declarations: [
    AppComponent,
    StumbleHomeComponent,
    MusicComponent,
    FamilyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
