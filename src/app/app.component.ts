import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { ModprimengModule } from './modprimeng.module';
import { MessageService } from 'primeng/api';


@Component({
  
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, NavbarComponent, ModprimengModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]

})
export class AppComponent {
  title = 'shoponline_ahg';
 constructor(private messageService: MessageService) {}

    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'El mensaje de toast AHG' });
    }

    showInfo() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Botón de información AHG' });
    }

    showWarn() {
      this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
  }
  showTopLeft() {
    this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Información AHG', key: 'tl', life: 3000 });
}

showBottomLeft() {
    this.messageService.add({ severity: 'warn', summary: 'Warn Message', detail: 'Advertencia: su equipo ha sido infectado', key: 'bl', life: 3000 });
}

showBottomRight() {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Guardado con éxito', key: 'br', life: 3000 });
}
}
