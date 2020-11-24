// Para integrar el decorador @Component es necesario relalizar una importacion

import { Component } from '@angular/core';

// Escribir el decorador @Component
@Component({
    // Definir cómo podremos llamar al componente en angular - Con un selector
    selector : 'app-footer',
    // AltGr + } para comillas de insercion html
    templateUrl : './footer.component.html'

})

// Clase del componente
// La clase debe ser exportada para poder agregarla al app.module.ts
export class FooterComponent {
    Titulo: String = 'Ñenguele';
    //anioActual = new Date().getFullYear();

    anio: number;   // declaramos variable que guardara lo obtenido por Date
    autor: string;

    // creamos constructor para el metodo
    constructor() {
        this.anio = new Date().getFullYear();
        this.autor = 'Ulises Alvirde B.';
    }
}