import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButton } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';

@Component({
  selector: 'app-navbar',
  imports: [ ButtonModule, InputTextModule,SplitButton, Toolbar, IconField,InputIcon],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Ingresar',
                icon: 'pi pi-user',
                routerLink: '/login'
            },
            {
                label: 'Registrar',
                icon: 'pi pi-user-plus',
                routerLink: '/register'
            }
        ];
    }
}
