# User ID controlled by request parameter

Link: https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter

![user id controlled by request parameter description](https://dsc.cloud/f62499/pb-vol47fg4Ug.png)

Zgodnie z opisem, będziemy mieli tutaj przykład horizontal privilege escalation, czyli przejścia między użytkownikami na tym samym poziomie - w tym przypadku między wienerem, a carlosem.

Po wejściu do zakładki "My Account", logujemy się (mamy "pod spodem załączonego" Burpa). Po zalogowaniu widzimy, że API key jest dostępny:

![my account wiener](https://dsc.cloud/f62499/pb-Ogv4xgJFsL.png)


Warto nie tylko śledzić to, co jest wyświetlane w Burpie, ale także co jest wyświetlane w pasku adresu. W naszym przypadku widoczne jest to:

```
https://0a6f00a304aa21f280ec94b70053003d.web-security-academy.net/my-account?id=wiener
```

Widzimy, że przekazywane jest ID, którym jest użyty przez nas "username".


Oczywiście w samym Burp Suite również jest to widoczne:

![burp get id wiener](https://dsc.cloud/f62499/pb-vqErEVkvaP.png)


Chcemy przejść na konto carlosa, więc warto sprawdzić co się stanie jeśli zamiast "wiener", wpiszemy "carlos". Klikamy prawym przyciskiem myszy i wysyłamy request do Repeatera:

![send wiener to repeater](https://dsc.cloud/f62499/pb-rCE9NVBZmH.png)



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

![user id controlled by request parameter solved lab](https://dsc.cloud/f62499/pb-yN9wjns4aR.png)
