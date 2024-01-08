# User ID controlled by request parameter

Link: https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter

![user id controlled by request parameter description](https://www.dropbox.com/scl/fi/0hdgp80nbey7k832dfh2d/pb-FYrk03hdlL.png?rlkey=wf4qdeda7xcnfdj0jmb85oj68&raw=1)

Zgodnie z opisem, będziemy mieli tutaj przykład horizontal privilege escalation, czyli przejścia między użytkownikami na tym samym poziomie - w tym przypadku między wienerem, a carlosem.

Po wejściu do zakładki "My Account", logujemy się (mamy "pod spodem załączonego" Burpa). Po zalogowaniu widzimy, że API key jest dostępny:

![my account wiener](https://www.dropbox.com/scl/fi/vukarfosegu58v52wp2fl/pb-FqFEB8R7KK.png?rlkey=vbzju8pyfqheutt86cu6betxr&raw=1)


Warto nie tylko śledzić to, co jest wyświetlane w Burpie, ale także co jest wyświetlane w pasku adresu. W naszym przypadku widoczne jest to:

```
https://0a6f00a304aa21f280ec94b70053003d.web-security-academy.net/my-account?id=wiener
```

Widzimy, że przekazywane jest ID, którym jest użyty przez nas "username".


Oczywiście w samym Burp Suite również jest to widoczne:

![burp get id wiener](https://www.dropbox.com/scl/fi/pea1h9jsy7y6nukropops/pb-QOxb2bRA83.png?rlkey=owcnsabfefkq8o4t8rqzmncyr&raw=1)


Chcemy przejść na konto carlosa, więc warto sprawdzić co się stanie jeśli zamiast "wiener", wpiszemy "carlos". Klikamy prawym przyciskiem myszy i wysyłamy request do Repeatera:

![send wiener to repeater](https://www.dropbox.com/scl/fi/ha2z829la1b6wyw8vnmw5/pb-JTXsKVQSlj.png?rlkey=391d10arpdn14x98gx6om0ao4&raw=1)



W Repeaterze zmieniamy "wiener" na "carlos":

```
GET /my-account?id=carlos HTTP/2
```


W odpowiedzi dostajemy status 200, czyli poprawna odpowiedź. Sprawdzamy co jeszcze możemy znaleźć i okazuje się, że całkiem sporo:

```
Your username is: carlos</p>
<div>Your API Key is: CCzo99zTYW2p6JepKYSFEX0IMOfDegrx</div>
```

Kopiujemy API Key, na stronie PortSwiggera klikamy "Submit solution", wklejamy, wysyłamy i gotowe:

![user id controlled by request parameter solved lab](https://www.dropbox.com/scl/fi/r65ykkvmjtozv67otg02t/pb-rm61A8pZsv.png?rlkey=l35tu8u7ylpgy1y7q89s8343d&raw=1)
