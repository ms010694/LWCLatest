import { LightningElement, track } from 'lwc';

export default class SldsTesting extends LightningElement { 

    @track isSection1 =false;
    @track isSection2 =false;
    @track isSection3 =false;
    @track isSection4 =false;
    @track isSection5 =false;
    handleSection1(){ 

        if(!this.isSection1){
            this.isSection1 = true;
        }
        else{
            this.isSection1 = false;
        }      
    }
    handleSection2(){
        if(!this.isSection2){
            this.isSection2 = true;
        }
        else{
            this.isSection2 = false;
        }
    }
    handleSection3(){
        if(!this.isSection3){
            this.isSection3 = true;
        }
        else{
            this.isSection3 = false;
        }
    }
    handleSection4(){
        if(!this.isSection4){
            this.isSection4 = true;
        }
        else{
            this.isSection4 = false;
        }
    }
    handleSection5(){
        if(!this.isSection5){
            this.isSection5 = true;
        }
        else{
            this.isSection5 = false;
        }
    }
}