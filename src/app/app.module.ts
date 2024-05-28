import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArchitectureComponent } from './services/architecture/architecture.component';
import { CivilComponent } from './services/civil/civil.component';
import { CommercialComponent } from './services/commercial/commercial.component';
import { HospitalityComponent } from './services/hospitality/hospitality.component';
import { InteriordesignComponent } from './services/interiordesign/interiordesign.component';
import { ResidentialComponent } from './services/residential/residential.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ContactComponent } from './common/contact/contact.component';
import { HomeComponent } from './common/home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { Client1Component } from './pages/client1/client1.component';
import { Client2Component } from './pages/client2/client2.component';
import { Client3Component } from './pages/client3/client3.component';
import { Client4Component } from './pages/client4/client4.component';
import { Client5Component } from './pages/client5/client5.component';
import { Client6Component } from './pages/client6/client6.component';
import { ServiceComponent } from './pages/service/service.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PrtfolioComponent } from './pages/prtfolio/prtfolio.component';
import { TextdataComponent } from './pages/textdata/textdata.component';
import { CompletedprojectComponent } from './homess/completedproject/completedproject.component';
import { BardesignComponent } from './gallery/bardesign/bardesign.component';
import { BathroomdesignComponent } from './gallery/bathroomdesign/bathroomdesign.component';
import { CafeteriaComponent } from './gallery/cafeteria/cafeteria.component';
import { GardenComponent } from './gallery/garden/garden.component';
import { HomeofficeComponent } from './gallery/homeoffice/homeoffice.component';
import { KidsroomComponent } from './gallery/kidsroom/kidsroom.component';
import { LivingroomComponent } from './gallery/livingroom/livingroom.component';
import { LobbydesignComponent } from './gallery/lobbydesign/lobbydesign.component';
import { MeetingroomComponent } from './gallery/meetingroom/meetingroom.component';
import { ModularkitchenComponent } from './gallery/modularkitchen/modularkitchen.component';
import { OfficespaceComponent } from './gallery/officespace/officespace.component';
import { ReceptionComponent } from './gallery/reception/reception.component';
import { RestaurantComponent } from './gallery/restaurant/restaurant.component';
import { WardrobeComponent } from './gallery/wardrobe/wardrobe.component';



@NgModule({
  declarations: [
    AppComponent,
    ArchitectureComponent,
    CivilComponent,
    CommercialComponent,
    HospitalityComponent,
    InteriordesignComponent,
    ResidentialComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    Client1Component,
    Client2Component,
    Client3Component,
    Client4Component,
    Client5Component,
    Client6Component,
    ServiceComponent,
    GalleryComponent,
    PrtfolioComponent,
    TextdataComponent,
    CompletedprojectComponent,
    BardesignComponent,
    BathroomdesignComponent,
    CafeteriaComponent,
    GardenComponent,
    HomeofficeComponent,
    KidsroomComponent,
    LivingroomComponent,
    LobbydesignComponent,
    MeetingroomComponent,
    ModularkitchenComponent,
    OfficespaceComponent,
    ReceptionComponent,
    RestaurantComponent,
    WardrobeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
