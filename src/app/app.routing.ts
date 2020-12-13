import { RootModule } from '@uirouter/angular/uiRouterNgModule';
import { MainComponent } from './components/main/main.component';

export const AppRouting: RootModule = {
	states: [
		{
			name: 'app',
			url: '/',
			views: {
				content: { component: MainComponent },
			},
		},
	],
};
