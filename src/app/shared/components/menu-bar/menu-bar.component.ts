import { Component } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
    selector: 'shared-menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrl: './menu-bar.component.css',
})
export class MenuBarComponent {
    items: MenuItem[] | undefined

    ngOnInit() {
        this.items = [
            {
                label: 'Pipes angular',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Textos y Fechas',
                        icon: 'pi pi-align-left',
                    },
                    {
                        label: 'Números',
                        icon: 'pi pi-dollar',
                    },
                    {
                        label: 'No comunes',
                        icon: 'pi pi-globe',
                    },
                ],
            },
            {
                label: 'Pipes personalizados',
                icon: 'pi pi-cog',
            },
        ]
    }
}
