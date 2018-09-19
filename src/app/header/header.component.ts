import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // select dom items
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const menuBranding = document.querySelector('.menu-branding');
/*
    const home = document.querySelector('.home');
    const about = document.querySelector('.about');
    const work = document.querySelector('.work');

    const contact = document.querySelector('.contact');
*/


    const navItems = Array.from(document.querySelectorAll('.nav-item'));


    // initial state of the menu

    let showMenu = false;



    menuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {

      if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));

        // set menu state
        showMenu = true;

      } else {

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        navItems.forEach(item => item.classList.remove('show'));

        //  set menu state

        showMenu = false;

      }
    }
/*
    function toggleCurrentHome() {
      home.classList.add('current');
      about.classList.remove('current');
      work.classList.remove('current');

      contact.classList.remove('current');



    }
*/
/*
    function toggleCurrentAbout() {
      about.classList.add('current');
      home.classList.remove('current');

      work.classList.remove('current');
      contact.classList.remove('current');


    }
*/

/*
    function toggleCurrentMyWork() {
      work.classList.add('current');
      about.classList.remove('current');
      home.classList.remove('current');
      contact.classList.remove('current');


    }

    function toggleCurrentContactMe() {
      contact.classList.add('current');
      home.classList.remove('current');
      about.classList.remove('current');
      work.classList.remove('current');


    }
*/
  }
  public toggleMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const menuNav = document.querySelector('.menu-nav');
    const menuBranding = document.querySelector('.menu-branding');


  const navItems = Array.from(document.querySelectorAll('.nav-item'));
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');

    navItems.forEach(item => item.classList.remove('show'));


  }




}
