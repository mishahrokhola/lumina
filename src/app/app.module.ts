import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from '@uirouter/angular';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';

import { BgComponent } from './components/bg/bg.component';
import { BgSunComponent } from './components/bg/components/bg-sun/bg-sun.component';
import { BgCosmosComponent } from './components/bg/components/bg-cosmos/bg-cosmos.component';

@NgModule({
	declarations: [AppComponent, MainComponent, HeaderComponent, BgComponent, BgCosmosComponent, BgSunComponent],
	imports: [BrowserModule, UIRouterModule.forRoot(AppRouting)],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
