import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
const server = require('./dist/rabobank-test-server/main');

enableProdMode();

const app = express();
const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');
const template = readFileSync(
	join(DIST_FOLDER, 'rabobank-test', 'index.html')
).toString();

app.engine('html', (_, options, callback) => {
	renderModuleFactory(server.AppServerModuleNgFactory, {
		document: template,
		url: options.req.url,
		extraProviders: [provideModuleMap(server.LAZY_MODULE_MAP)]
	}).then(html => {
		callback(null, html);
	});
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'rabobank-test'));

app.get('*.*', express.static(join(DIST_FOLDER, 'rabobank-test')));

app.get('*', (req, res) => {
	res.render(join(DIST_FOLDER, 'rabobank-test', 'index.html'), { req });
});

app.listen(PORT, () => {
	console.log(`Node server listening on http://localhost:${PORT}`);
});
