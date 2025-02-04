import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ModprimengModule} from './modprimeng.module';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule,NavbarComponent,ModprimengModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'shoponline_jaar';

  constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'contenido de mensaje JAAR', life: 3000 });
    }
    showWarn() {
      this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'advertencia JAAR' });
    }
    showError() {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'error JAAR' });
    }
    showTopLeft() {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Información JAAR', key: 'tl', life: 3000 });
  }

  showBottomLeft() {
      this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'tienes una advertencia', key: 'bl', life: 3000 });
  }

  showBottomRight() {
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Operacion Exitosa', key: 'br', life: 3000 });
  }


}
