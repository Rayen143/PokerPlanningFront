<<<<<<< HEAD
export { AppServerModule as default } from './app/app.module.server';
=======
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
>>>>>>> 6caf25979ace09fda2b625cc85bb5fe55e0ed2c9
