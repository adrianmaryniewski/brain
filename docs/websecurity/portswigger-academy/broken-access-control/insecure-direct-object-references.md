# Insecure Direct Object References (🇬🇧 ENG | 🇵🇱 PL)

ENG 🇬🇧:
Link: https://portswigger.net/web-security/access-control/lab-insecure-direct-object-references

After clicking "Access the lab," we see the option to go to the chat on the right side of the screen:

![live chat link](https://www.dropbox.com/scl/fi/jd9hek071ieh3fvidiqdz/pb-OvAPJww6WY.png?rlkey=f82thug6kc5y4m5jycprk4ufu&raw=1)



We proceed there and check the functionality. We type anything to see how it works:

![live chat 1](https://www.dropbox.com/scl/fi/z41u4g0fyy10vdylhpao6/pb-wGI9bPWGsM.png?rlkey=bhdojyvptbrqs64q6mruyqvmq&raw=1)



The creators have added a bit of humor:

![live chat response](https://www.dropbox.com/scl/fi/8ai884081ui1cfljhodei/pb-u6Hioe5mhs.png?rlkey=g5hclng7s5ayrze98sad7y2bh&raw=1)




Besides the "**Send**" option, we also have the "**View transcript**" option. We click this button and after a moment, we see that we have downloaded a file named "**2.txt**".

![2.txt file](https://www.dropbox.com/scl/fi/h9ea984s9bk1pizp99a1b/pb-oh85y5g6Wy.png?rlkey=99ycbw1szj3voju3iiqi94jjg&raw=1)

What can we immediately check? We can check if we can access the file named "**1.txt**", for example.



Let's go to Burp Suite. We find the request that allowed us to download the file. Here it is:

![download conversation request](https://www.dropbox.com/scl/fi/to2m96mynrzdvfr1hgt0h/pb-nVJysF2iae.png?rlkey=jaiuuahhshejmcqdew9oama74&raw=1)



To do this, we can right-click and select "Send to Repeater":

![send to repeater](https://www.dropbox.com/scl/fi/gneco8wspi8ov047wss28/pb-2kHzvBP5Tc.png?rlkey=ma84ggbyj64f6ezhknt2pz9li&raw=1)




In the "Repeater" tab, we change "2" to "1":

![change the parameter](https://www.dropbox.com/scl/fi/r4ktlkb79y5t588q1hkto/pb-d5fjt3Vwqp.png?rlkey=ivax9fspvfgyawjv1x66xbbm2&raw=1)

![changed to one](https://www.dropbox.com/scl/fi/joel3t9fr63bo1y1tjl5w/pb-OVrmIzEAbD.png?rlkey=f6nsb9bi72lxvy8om84jrv3u5&raw=1)


Let's click "Send".


It seems that we have received a "200" status and can download the password without any trouble:

![password revealed](https://www.dropbox.com/scl/fi/x0p58juoskdyv74fh406t/pb-iZuUOVRubc.png?rlkey=rwa4ovy35ccxp1k6l9ceugdva&raw=1)


A closer look:

![take a closer look](https://www.dropbox.com/scl/fi/vdqhyhq2guqpx33sdpb8y/pb-EMkOGP8CTU.png?rlkey=ham4ab5gx3f3y6kt8hhsfx646&raw=1)


Text:

```
fn3pdkri3fkexsme2glb
```



We copy it, go to "My Account", log in as **carlos** using the freshly downloaded password:

![carlos and his password](https://www.dropbox.com/scl/fi/9buu4v0i5aeh972q99b97/pb-9lLNE5gorl.png?rlkey=r4r0tqca7jhg3k5nmso7j8smt&raw=1)


Task accomplished:

![lab solved](https://www.dropbox.com/scl/fi/i7ewaii7ahecxq1gdqhyj/pb-KRk4NIIRdv.png?rlkey=rx6xdd7ii4avjg3f4f9xka0kh&raw=1)


---

🇵🇱 PL:
Link: https://portswigger.net/web-security/access-control/lab-insecure-direct-object-references

Po kliknięciu "Access the lab", widzimy możliwość przejścia do chatu po prawej stronie ekranu:

![live chat link](https://www.dropbox.com/scl/fi/jd9hek071ieh3fvidiqdz/pb-OvAPJww6WY.png?rlkey=f82thug6kc5y4m5jycprk4ufu&raw=1)



Przechodzimy tam i sprawdzamy funkcjonalność. Wpisujemy cokolwiek, aby zobaczyć jak to działa:

![live chat 1](https://www.dropbox.com/scl/fi/z41u4g0fyy10vdylhpao6/pb-wGI9bPWGsM.png?rlkey=bhdojyvptbrqs64q6mruyqvmq&raw=1)


Twórcy zadbali o odrobinę humoru:

![live chat response](https://www.dropbox.com/scl/fi/8ai884081ui1cfljhodei/pb-u6Hioe5mhs.png?rlkey=g5hclng7s5ayrze98sad7y2bh&raw=1)


Oprócz opcji "Send", mamy także opcję "View transcript". Klikamy ten przycisk i po chwili widzimy, że pobraliśmy plik o nazwie "**2.txt**".

![2.txt file](https://www.dropbox.com/scl/fi/h9ea984s9bk1pizp99a1b/pb-oh85y5g6Wy.png?rlkey=99ycbw1szj3voju3iiqi94jjg&raw=1)


Co można od razu sprawdzić? Można sprawdzić, czy możemy dostać się do pliku np. "**1.txt**".

Przejdźmy do Burp Suite. Znajdujemy zapytanie, dzięki któremu byliśmy w stanie pobrać plik. Oto one:

![download conversation request](https://www.dropbox.com/scl/fi/to2m96mynrzdvfr1hgt0h/pb-nVJysF2iae.png?rlkey=jaiuuahhshejmcqdew9oama74&raw=1)


Aby to zrobić, możemy kliknąć prawym przyciskiem myszy i wybrać opcję "Send to Repeater":

![send to repeater](https://www.dropbox.com/scl/fi/gneco8wspi8ov047wss28/pb-2kHzvBP5Tc.png?rlkey=ma84ggbyj64f6ezhknt2pz9li&raw=1)


W zakładce "Repeater" zmieniamy "2" na "1":

![change the parameter](https://www.dropbox.com/scl/fi/r4ktlkb79y5t588q1hkto/pb-d5fjt3Vwqp.png?rlkey=ivax9fspvfgyawjv1x66xbbm2&raw=1)


![changed to one](https://www.dropbox.com/scl/fi/joel3t9fr63bo1y1tjl5w/pb-OVrmIzEAbD.png?rlkey=f6nsb9bi72lxvy8om84jrv3u5&raw=1)


Kliknijmy "Send".

Wygląda na to, że otrzymaliśmy status "200" i możemy bez przeszkód pobrać hasło:

![password revealed](https://www.dropbox.com/scl/fi/x0p58juoskdyv74fh406t/pb-iZuUOVRubc.png?rlkey=rwa4ovy35ccxp1k6l9ceugdva&raw=1)


Widok z bliska:

![take a closer look](https://www.dropbox.com/scl/fi/vdqhyhq2guqpx33sdpb8y/pb-EMkOGP8CTU.png?rlkey=ham4ab5gx3f3y6kt8hhsfx646&raw=1)

Tekst:
```
fn3pdkri3fkexsme2glb
```

Kopiujemy, przechodzimy do "My Account", logujemy się jako carlos, używając świeżo pobrane hasło:

![carlos and his password](https://www.dropbox.com/scl/fi/9buu4v0i5aeh972q99b97/pb-9lLNE5gorl.png?rlkey=r4r0tqca7jhg3k5nmso7j8smt&raw=1)

Zadanie zaliczone:

![lab solved](https://www.dropbox.com/scl/fi/i7ewaii7ahecxq1gdqhyj/pb-KRk4NIIRdv.png?rlkey=rx6xdd7ii4avjg3f4f9xka0kh&raw=1)

---
