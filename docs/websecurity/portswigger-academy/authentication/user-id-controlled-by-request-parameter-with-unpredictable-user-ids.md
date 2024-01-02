# User ID controlled by request parameter, with unpredictable user IDs

Link: https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-unpredictable-user-ids

![user id controlled by request parameter with unpredictable user ids description](https://dsc.cloud/f62499/pb-hKq3zSSFRz.png)

To kolejny przykład "***horizontal privilege escalation***", tym razem za pomocą GUID, czyli Globally Unique Identifier.

Po kliknięciu "**Access the lab**", widzimy bloga. Widać, że w pasku URL widnieją różne identyfikatory podczas wyświetlania profili poszczególnych użytkowników. Już podaję zrzuty ekranu, żeby było wiadomo o co chodzi.

Klikam na przycisk "**View post**" pod pierwszym postem:

![view post first post](https://dsc.cloud/f62499/pb-YwGFxAPu2D.png)



Następnie nazwę użytkownika:

![admin screenshot](https://dsc.cloud/f62499/pb-pBTGR5e1GN.png)


Teraz widać identyfikator tego użytkownika w pasku URL:

Link: https://0ab8000f0424435382b0ba4600890061.web-security-academy.net/blogs?userId=90b0df73-318f-4308-9810-753cb157aec1

```
userId=reszta_to_guid
```


Skoro możemy uzyskać GUID administratora, powinniśmy mieć też możliwość uzyskać identyfikator użytkownika carlos. Po kilku sekundach szukania, znalazłem post o ID 6, który należy do carlosa:

![carlos post](https://dsc.cloud/f62499/pb-oOECYH9Vgw.png)



Klikając na jego nazwę, uzyskujemy GUID w pasku adresu:
```
userId=640f2c14-8f0e-44f3-aa69-df3376e7c5eb
```


Naszym zadaniem jest uzyskać API Key użytkownika carlos. Dostęp jednak mamy tylko do użytkownika wiener.

Logujemy się podanymi w zadaniu danymi: 
```
wiener:peter
```

![wiener account](https://dsc.cloud/f62499/pb-6WzUMzhYnl.png)

Sprawdzamy w Burpie requesty.

Sprawdźmy, czy po zmianie ID w requeście - dostaniemy się na konto użytkownika carlos:

![get request wiener](https://dsc.cloud/f62499/pb-bF3DIyBm8F.png)


Klikamy prawym przyciskiem myszy na zaznaczonym requeście i wybieramy "***Send to Repeater***".

Podmieniamy userId na ID carlosa. Wysyłamy request. W odpowiedzi dostajemy status 200:

![carlos api key](https://dsc.cloud/f62499/pb-hxP310DaeF.png)


Kopiujemy API Key, klikamy "Submit solution" i wysyłamy odpowiedź. Gotowe:

![user id controlled by request parameter with unpredictable user ids lab solved](https://dsc.cloud/f62499/pb-fnCEDAZIWm.png)

