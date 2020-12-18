import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from '@uirouter/angular';

import { AppRouting } from './app.routing';

/* Pipes */
import { RangePipe } from './pipes';

/* Components */
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';

import { BgComponent } from './components/bg/bg.component';
import { BgSunComponent } from './components/bg/components/bg-sun/bg-sun.component';
import { BgCosmosComponent } from './components/bg/components/bg-cosmos/bg-cosmos.component';
import { StarComponent } from './components/bg/components/star/star.component';
import { CloudsComponent } from './components/bg/components/clouds/clouds.component';

@NgModule({
	declarations: [
		/* Pipes */
		RangePipe,

		/* Components */
		AppComponent,
		MainComponent,
		HeaderComponent,
		BgComponent,
		BgCosmosComponent,
		BgSunComponent,
		StarComponent,
		CloudsComponent,
	],
	imports: [BrowserModule, CommonModule, UIRouterModule.forRoot(AppRouting)],
	providers: [RangePipe],
	bootstrap: [AppComponent],
})
export class AppModule {}
