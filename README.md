Title: Carousel Autoplay
===
Riprendendo il carousel realizzato in passato  e con le Timeng Function rendete lo scroll automatico ogni 3 secondi.
Attenzione: dopo l’ultima slide deve riapparire la prima e così via
BONUS
Per evitare conflitti con lo scroll manuale, quando il mouse si trova sopra lo slider lo scroll automatico si interrompe per poi ripartire all’uscita del mouse

## Svolgimento:
1. creare una timing function (setinterval) per creare il loop infinito delle immagini che verranno cambiate ogni 3 sec


##BONUS
1. richiamare l'elemento su cui lavorare
2. con un addeventlistener con un evento del mouse in entrata blocco la timing funcion con clearinterval
3. sempre con un addeventlistener con un evento diverso del mouse richiamo la timing funcion e la faccio ripartire 