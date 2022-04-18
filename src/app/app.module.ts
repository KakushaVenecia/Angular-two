import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './user.service';
import { HomeComponent } from './home/home.component';
import { UserTheme } from './directives/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FormComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    UserTheme,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
