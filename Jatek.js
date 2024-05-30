import Kartya from "./Kartya.js";

export default class Jatek {
  #KEPLISTA = [];
  #kivalasztottak=[];
  constructor(KEPLISTA) {
    this.#KEPLISTA = KEPLISTA;
    this.jatekterOsszeAllit();

    $(window).on("kapcsol", (event) => {
      console.log(event.detail);
      this.#kivalasztottak.push(event.detail)
      this.#ellenoriz()
    });
  }
  #ellenoriz(){
    if(this.#kivalasztottak.length===2){
        if(this.#kivalasztottak[0]===this.#kivalasztottak[1]){
            //vissza forditja a két elemet és ki kell üriteni a  listát
            
        }
    }
  }
  jatekterOsszeAllit() {
    this.#KEPLISTA.forEach((elem) => {
      new Kartya(elem, $(".jatekter"));
    });
  }
}