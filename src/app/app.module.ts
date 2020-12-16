import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from '@uirouter/angular';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
	declarations: [AppComponent, MainComponent, HeaderComponent],
	imports: [BrowserModule, UIRouterModule.forRoot(AppRouting)],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
