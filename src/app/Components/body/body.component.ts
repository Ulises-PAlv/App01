// Para integrar el decorador @Component es necesario relalizar una importacion

import { Component } from '@angular/core';

// Escribir el decorador @Component
@Component({
    // Definir cómo podremos llamar al componente en angular - Con un selector
    selector : 'app-body',
    // AltGr + } para comillas de insercion html
    templateUrl : './body.component.html'

})

// Clase del componente
// La clase debe ser exportada para poder agregarla al app.module.ts
export class BodyComponent {
    visible = true;
    personajes: string[] = ['SpiderMan', 'SuperMan', 'Felipe Dios', 'Dr. Manhattan'];

    frase: any = {
        autor: 'Isai, 2020.',
        mensaje: 'Quitate pinche perro.'
    };

    hideme: any = {};

    onClick(item) {
        Object.keys(this.hideme).forEach(h => {
            this.hideme[h] = false;
        });
        this.hideme[item.id] = true;
    }
}