import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { Ripple } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { Component, OnInit } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { SplitButton } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { MenubarModule } from 'primeng/menubar';
import { Menubar } from 'primeng/menubar';

const mismodulos: any = [
  ButtonModule,
  Ripple,
  ToastModule,
  ToolbarModule,
  Toolbar,
  SplitButton,
  InputTextModule,
  IconField,
  InputIcon,
  MenubarModule,
  Menubar,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    mismodulos
  ],
  exports: [
    mismodulos
  ]
})
export class ModprimengModule { }
