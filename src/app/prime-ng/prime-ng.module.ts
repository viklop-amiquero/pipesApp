import { NgModule } from '@angular/core'
import { Menubar } from 'primeng/menubar'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { FieldsetModule } from 'primeng/fieldset'
import { PanelModule } from 'primeng/panel'
@NgModule({
    imports: [Menubar],
    exports: [Menubar, ButtonModule, CardModule, FieldsetModule, PanelModule],
})
export class PrimeNgModule {}
