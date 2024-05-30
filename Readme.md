
## Kártya:

constructor(kep, szuloElem)- megjeleniti a képet és, ha a képre kaptintunk megfordul és vissza is tud fordulni, illetve el tud rejtőzni

***adattagok:***
    #kep - privát String;
    #allapot - True - látható a kép, False - a háttér látható, bool típusú, privát
    #szuloElem - privát
    #kepElem - privát

***metódusok:***
    #megjelenit() - megjeleniti az oldalon a kártyákat, privát
    #felfordit() - felfordítja a kártyákat. Az #allapot-tól függöen vagy a háttérképet vagy a képet tölti be a kép src-jébe, akkor hívodik meg, ha rá
    kattintunk a képre, privát
    setAllapot(ertek) - megváltoztatja az állapotott
    #trigger(esemenynev)

## Játék:

constructor(KEPLISTA)

***adattagok:***
    #KEPLISTA=[] - privát tömb;
    #kivalasztottak=[];

***metódusok:***
    jatekterOsszeAllit() - Összeállítja a képeket a játéktérben.
    #ellenoriz() - megnézi a #kivalasztottak-nak hány eleme van, privát