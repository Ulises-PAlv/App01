// Para integrar el decorador @Component es necesario relalizar una importacion

import { Component } from '@angular/core';

// Escribir el decorador @Component
@Component({
    // Definir cómo podremos llamar al componente en angular - Con un selector
    selector : 'app-header',
    // AltGr + } para comillas de insercion html
    templateUrl : './header.component.html'

})

// Clase del componente
// La clase debe ser exportada para poder agregarla al app.module.ts
export class HeaderComponent {
    Titulo: String = "Bases Angular";
}