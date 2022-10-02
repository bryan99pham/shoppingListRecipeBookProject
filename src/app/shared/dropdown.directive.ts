import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    //places listener on the dropdown
    // @HostListener('click') toggleOpen() {
    //     this.isOpen = !this.isOpen;
    // }

    //places listener on the document
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    } 

    constructor(private elRef: ElementRef) {}
}