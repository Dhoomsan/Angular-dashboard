import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ScrollEventModule } from 'ngx-scroll-event';
import { CarouselModule } from 'ngx-bootstrap';
import { ChartModule } from 'angular2-chartjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'


import { Home } from './home/home.component';
import { Services } from './services/services.component';
import { Portfolio } from './portfolio/portfolio.component';
import { About } from './about/about.component';
import { Team } from './team/team.component';
import { Contact } from './contact/contact.component';
import { NotFound } from './not-found/not-found.component';
import { Footer } from './footer/footer.component';
import { Admin } from './admin/admin.component';
import { Login } from './login/login.component';
import { TabComponent } from './tab/tab.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AuthGuardService as AuthGuard } from './authentication/authguards/auth-guard.service';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  {  path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home,canActivate: [AuthGuard] },
  { path: 'services', component: Services },
  { path: 'portfolio', component: Portfolio },
  { path: 'about', component: About},
  { path: 'admin', component: Admin },
  { path: 'login', component: Login },
  { path: 'team', component: Team },
  { path: 'contact', component: Contact },
  {path: 'gallery', component:CarouselComponent},
  {path: 'panel', component:PanelComponent},
  { path:'tab', component:TabComponent,
  children: [
    { path: 'admin', component: Admin },
    { path: 'login', component: Login },
  ]
  },
  {path: 'page-not-found', component: NotFound},
  {path: '**', redirectTo: '/page-not-found'}  
];

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Services,
    Portfolio,
    About,
    Team,
    Contact,
    NotFound,
    Footer,
    Admin,
    Login,
    TabComponent,
    CarouselComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollEventModule,
    ChartModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
