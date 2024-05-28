import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { ContactComponent } from './common/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { PrtfolioComponent } from './pages/prtfolio/prtfolio.component';
import { ArchitectureComponent } from './services/architecture/architecture.component';
import { InteriordesignComponent } from './services/interiordesign/interiordesign.component';
import { ResidentialComponent } from './services/residential/residential.component';
import { CommercialComponent } from './services/commercial/commercial.component';
import { HospitalityComponent } from './services/hospitality/hospitality.component';
import { CivilComponent } from './services/civil/civil.component';
import { TextdataComponent } from './pages/textdata/textdata.component';
import { ModularkitchenComponent } from './gallery/modularkitchen/modularkitchen.component';
import { LivingroomComponent } from './gallery/livingroom/livingroom.component';
import { KidsroomComponent } from './gallery/kidsroom/kidsroom.component';
import { WardrobeComponent } from './gallery/wardrobe/wardrobe.component';
import { HomeofficeComponent } from './gallery/homeoffice/homeoffice.component';
import { GardenComponent } from './gallery/garden/garden.component';
import { BardesignComponent } from './gallery/bardesign/bardesign.component';
import { OfficespaceComponent } from './gallery/officespace/officespace.component';
import { CafeteriaComponent } from './gallery/cafeteria/cafeteria.component';
import { BathroomdesignComponent } from './gallery/bathroomdesign/bathroomdesign.component';
import { RestaurantComponent } from './gallery/restaurant/restaurant.component';
import { ReceptionComponent } from './gallery/reception/reception.component';
import { ServiceComponent } from './pages/service/service.component';
import { LobbydesignComponent } from './gallery/lobbydesign/lobbydesign.component';
import { MeetingroomComponent } from './gallery/meetingroom/meetingroom.component';
import { Client1Component } from './pages/client1/client1.component';
import { Client2Component } from './pages/client2/client2.component';
import { Client3Component } from './pages/client3/client3.component';
import { Client4Component } from './pages/client4/client4.component';
import { Client5Component } from './pages/client5/client5.component';
import { Client6Component } from './pages/client6/client6.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'app', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Portfolio', component: PrtfolioComponent },

  { path: 'Architectservice', component: ArchitectureComponent },
  { path: 'Interiordesign', component: InteriordesignComponent },
  { path: 'Residentialdesign', component: ResidentialComponent },
  { path: 'CommercialDesign', component: CommercialComponent },
  { path: 'Hospitality', component: HospitalityComponent },
  { path: 'Civilservice', component: CivilComponent },
  // { path: 'Client', component: ClientdataComponent },
  { path: 'Textdata', component: TextdataComponent },
  { path: 'modularkitchen', component: ModularkitchenComponent },
  { path: 'livingroom', component: LivingroomComponent },
  { path: 'Kidsroomdesign', component: KidsroomComponent },
  { path: 'wordebaledesign', component: WardrobeComponent },
  { path: 'homeoffice', component: HomeofficeComponent },
  { path: 'gardendesign', component: GardenComponent },
  { path: 'bardesign', component: BardesignComponent },
  { path: 'officespace', component: OfficespaceComponent },
  { path: 'cafeteria', component: CafeteriaComponent },
  { path: 'bathroom', component:BathroomdesignComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'reception', component: ReceptionComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'lobby', component: LobbydesignComponent },
  { path: 'meetingroom', component: MeetingroomComponent },

  { path: 'Client1', component: Client1Component },
  { path: 'Client2', component: Client2Component },
  { path: 'Client3', component: Client3Component },
  { path: 'Client4', component: Client4Component },
  { path: 'Client5', component: Client5Component },
  { path: 'Client6', component: Client6Component },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
