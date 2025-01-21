import { LOCALE_ID, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { providePrimeNG } from 'primeng/config'
import Aura from '@primeng/themes/aura'
import { SharedModule } from './shared/shared.module'

// Configuración del locale de la app
import localEsPE from '@angular/common/locales/es-PE'
import { registerLocaleData } from '@angular/common'

registerLocaleData(localEsPE)

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, SharedModule],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'es-PE',
        },
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: 'system',
                    cssLayer: false,
                },
            },
        }),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
