import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

interface Estudiante {
  id:number;
  nombre:string;
  nota:number;
  observacion:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonBadge,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonTextarea,
    IonTitle,
    IonToolbar,
  ],
})
export class HomePage {
  estudiantes: Estudiante[] = [
    { id: 1, nombre: 'David Julián Gutiérrez', nota: 4.6, observacion: '' },
    { id: 2, nombre: 'Santiago Angel', nota: 2.8, observacion: '' },
    { id: 3, nombre: 'Isabella Gutiérrez', nota: 3.9, observacion: '' },
    { id: 4, nombre: 'Samuel Fernandez', nota: 2.5, observacion: '' },
    { id: 5, nombre: 'Mariana Arce', nota: 4.2, observacion: '' },
    { id: 6, nombre: 'Natlia Cardozo', nota: 3.0, observacion: '' },
    { id: 7, nombre: 'Daniela Alarcon', nota: 4.8, observacion: '' },
    { id: 8, nombre: 'Mateus Hincapie', nota: 3.4, observacion: '' },
    { id: 9, nombre: 'Ryan Spencer', nota: 2.9, observacion: '' },
    { id: 10, nombre: 'Salma Mojica', nota: 3.7, observacion: '' },
  ];

  notaMinima = 0;
  notaMaxima = 5;
  modalabierto = false;
  estudianteselec: Estudiante | null = null;
  observacionBorrador = '';

  get estudiantesFiltrados(): Estudiante[] {
    return this.estudiantes.filter(
      (estudiante) => estudiante.nota >= this.notaMinima && estudiante.nota <= this.notaMaxima,
    );
  }

  get promedioGeneral(): number {
    if (this.estudiantes.length === 0) {
      return 0;
    }

    const suma = this.estudiantes.reduce((total, estudiante) => total + estudiante.nota, 0);

    return suma / this.estudiantes.length;
  }

  abrirmodal(estudiante: Estudiante): void {
    this.estudianteselec = estudiante;
    this.observacionBorrador = estudiante.observacion;
    this.modalabierto = true;
  }

  guardarObservacion(): void {
    if (!this.estudianteselec) {
      return;
    }

    this.estudianteselec.observacion = this.observacionBorrador.trim();
    this.cerrarmodal();
  }

  cerrarmodal(): void {
    this.modalabierto = false;
    this.estudianteselec = null;
    this.observacionBorrador = '';
  }
}
