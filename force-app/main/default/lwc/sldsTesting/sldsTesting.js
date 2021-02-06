import { LightningElement, track } from 'lwc';

export default class SldsTesting extends LightningElement { 

    @track isSection1 =false;
    @track isSection2 =false;
    @track isSection3 =false;
    @track isSection4 =false;
    @track isSection5 =false;
    @track changeArrow = "/_slds/icons/utility-sprite/svg/symbols.svg#chevronright";
    @track changeSection1Arrow = "/_slds/icons/utility-sprite/svg/symbols.svg#chevrondown";
    @track changeSection2Arrow = "/_slds/icons/utility-sprite/svg/symbols.svg#chevrondown";
    @track changeSection3Arrow = "/_slds/icons/utility-sprite/svg/symbols.svg#chevrondown";
    @track changeSection4Arrow = "/_slds/icons/utility-sprite/svg/symbols.svg#chevrondown";
    @track changeSection5Arrow = "/_slds/icons/utility-sprite/svg/symbols.svg#chevrondown";
    handleSection1(){ 

        if(!this.isSection1){
            this.isSection1 = true;
            this.changeSection1Arrow = "/_slds/icons/utility-sprite/svg/symbols.svg#chevronleft";
        }
        else{
            this.isSection1 = false;
            this.changeSection1Arrow = "/_slds/icons/utility-sprite/svg/symbols.svg#chevrondown";
        }      
    }
    handleSection2(){
        if(!this.isSection2){
            this.isSection2 = true;
            this.changeSection2Arrow = "/_slds/icons/utility-sprite/svg/symbols.svg#chevronleft";
        }
        else{
            this.isSection2 = false;
            this.changeSection2Arrow = "/_slds/icons/utility-sprite/svg/symbols.svg#chevrondown";
        }
    }
    handleSection3(){
        if(!this.isSection3){
            this.isSection3 = true;
            this.changeSection3Arrow = "/_slds/icons/utility-sprite/svg/symbols.svg#chevronleft";
        }
        else{
            this.isSection3 = false;
            this.changeSection3Arrow = "/_slds/icons/utility-sprite/svg/symbols.svg#chevrondown";
        }
    }
    handleSection4(){
        if(!this.isSection4){
            this.isSection4 = true;
            this.changeSection4Arrow = "/_slds/icons/utility-sprite/svg/symbols.svg#chevronleft";
        }
        else{
            this.isSection4 = false;
            this.changeSection4Arrow = "/_slds/icons/utility-sprite/svg/symbols.svg#chevrondown";
        }
    }
    handleSection5(){
        if(!this.isSection5){
            this.isSection5 = true;
            this.changeSection5Arrow = "/_slds/icons/utility-sprite/svg/symbols.svg#chevronleft";
        }
        else{
            this.isSection5 = false;
            this.changeSection5Arrow = "/_slds/icons/utility-sprite/svg/symbols.svg#chevrondown";
        }
    }
    handleChangeArrow(){
        this.changeArrow = "/_slds/icons/utility-sprite/svg/symbols.svg#chevrondown";
    }
}