import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpParams } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
 //Routes
import { AppRoutingModule } from './app.routes'

//Services
import { HotelService } from './services/hotel.service'

//Pipes
import { FilterStarsPipe } from './pipes/filter-stars.pipe';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { HotelsSearchComponent } from './components/hotels-search/hotels-search.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    HotelsSearchComponent,
    FilterStarsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
