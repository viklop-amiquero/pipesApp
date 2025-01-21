import { Component } from '@angular/core'

@Component({
    selector: 'app-basics-page',
    templateUrl: './basics-page.component.html',
    styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
    public nameLower: string = 'viktor'
    public nameUpper: string = 'VIKTOR'
    public fullName: string = 'ViKtOR LÓpEZ'

    public customDate: Date = new Date()
}
