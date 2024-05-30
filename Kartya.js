export default class Kartya {
  #kep = "";
  #allapot = true; //True - látható a kép, False - a háttér látható
  #szuloElem;
  #kepElem;
  #kattinthato=false;
  constructor(kep, szuloElem) {
    this.#kep = kep;
    this.#szuloElem = szuloElem;
    this.#allapot = false;
    this.#kepElem = this.#szuloElem.children("div:last-child").children("img");
    this.#megjelenit();
    console.log(this.#kepElem);
    this.#kepElem.on("click", () => {
      this.setAllapot(true);
      this.#trigger("kapcsol");
    });
  }

  #trigger(esemenynev) {
    const e = new CustomEvent(esemenynev, { detail: this.#kep });
    window.dispatchEvent(e);
  }

  #megjelenit() {
    let txt = `
        <div class="card col-sm-3">
            <img src="kepek/hatter.jpg" alt="memoria játék">
        </div>
        `;
    this.#szuloElem.append(txt);
  }

  setAllapot(ertek) {
    if (ertek == true || ertek == false) {
      this.#allapot = ertek;
      this.#felfordit();
    }
  }

  #felfordit() {
    if (this.#allapot) {
      this.#kepElem.attr("src", this.#kep);
    } else {
      this.#kepElem.attr("src", "kepek/hatter.jpg");
    }
  }
}
