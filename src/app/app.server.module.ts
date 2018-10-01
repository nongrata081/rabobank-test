import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
	imports: [
		AppModule,
		ServerModule,
		ModuleMapLoaderModule,
		RouterModule.forRoot(routes)
	],
	bootstrap: [AppComponent]
})
export class AppServerModule {}
