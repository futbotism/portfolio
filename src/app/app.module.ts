import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { BlogComponent } from './blog/blog.component';
import { ControlsComponent } from './controls/controls.component';
import { DynamicStyleDirective } from './dynamic-style/dynamic-style.directive';
import { IntroComponent } from './intro/intro.component';
import { FeatureState } from './store';
import { ColorState } from './store/color/color.state';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    DynamicStyleDirective,
    ControlsComponent,
    BackgroundComponent,
    BlogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule,
    FontAwesomeModule,
    HttpClientJsonpModule,
    HttpClientModule,
    NgxsModule.forRoot([FeatureState, ColorState], { developmentMode: !environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
