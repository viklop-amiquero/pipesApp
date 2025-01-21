import { Component } from '@angular/core'

@Component({
    selector: 'app-uncommon-page',
    templateUrl: './uncommon-page.component.html',
    styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
    public name: string = 'viktor'
    public gender: 'male' | 'female' = 'male'
    public clients: string[] = [
        'carol',
        'briyith',
        'maria',
        'daniela',
        'fiorella',
        'lucero',
        'almendra',
        'leydi',
        'kelly',
        'any',
    ]
    public invitationMap = {
        male: 'invitarlo',
        female: 'invitarla',
    }

    public clientsMap = {
        '=0': 'no tenemos ningún cliente esperando',
        '=1': 'tenemos un cliente esperando',
        '=2': 'tenemos 2 clientes esperando',
        other: 'tenemos # clientes esperando',
    }

    public person = {
        name: 'kelly',
        age: 29,
        address: 'avenida ejército 106',
    }

    changeCliente(): void {
        this.name = 'ruth'
        this.gender = 'female'
    }

    deleteClient(): void {
        this.clients.shift()
    }
}
