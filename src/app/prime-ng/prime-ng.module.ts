import { NgModule } from '@angular/core'
import { Menu } from 'primeng/menu'
import { Menubar } from 'primeng/menubar'

@NgModule({
    imports: [Menu, Menubar],
    exports: [Menu, Menubar],
})
export class PrimeNgModule {}
