# User ID controlled by request parameter, with unpredictable user IDs

Link: https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-unpredictable-user-ids

![user id controlled by request parameter with unpredictable user ids description](https://www.dropbox.com/scl/fi/vfc35k8zfxftwvvdgywci/pb-CFOJElshCD.png?rlkey=r0f84ipnxs21nw5maoriiqvhw&raw=1)

To kolejny przykład "***horizontal privilege escalation***", tym razem za pomocą GUID, czyli Globally Unique Identifier.

Po kliknięciu "**Access the lab**", widzimy bloga. Widać, że w pasku URL widnieją różne identyfikatory podczas wyświetlania profili poszczególnych użytkowników. Już podaję zrzuty ekranu, żeby było wiadomo o co chodzi.

Klikam na przycisk "**View post**" pod pierwszym postem:

![view post first post](https://www.dropbox.com/scl/fi/iu46dfk55muvwyd14y7yc/pb-SVvCOLE0iB.png?rlkey=do1o444ica7dynhe4uhdpllw7&raw=1)



Następnie nazwę użytkownika:

![admin screenshot](https://www.dropbox.com/scl/fi/ojhvk1ox2wp5iwceeyqlq/pb-RhcWVo84UT.png?rlkey=p55gmtsapkhn6p1l03o7hfvia&raw=1)


Teraz widać identyfikator tego użytkownika w pasku URL:

Link: https://0ab8000f0424435382b0ba4600890061.web-security-academy.net/blogs?userId=90b0df73-318f-4308-9810-753cb157aec1

```
userId=reszta_to_guid
```


Skoro możemy uzyskać GUID administratora, powinniśmy mieć też możliwość uzyskać identyfikator użytkownika carlos. Po kilku sekundach szukania, znalazłem post o ID 6, który należy do carlosa:

![carlos post](https://www.dropbox.com/scl/fi/2i5zzsj0cl44bgebiqtov/pb-TIgSNupn4h.png?rlkey=ks7mayagfjypsr7nmrngmh92p&raw=1)



Klikając na jego nazwę, uzyskujemy GUID w pasku adresu:
```
userId=640f2c14-8f0e-44f3-aa69-df3376e7c5eb
```


Naszym zadaniem jest uzyskać API Key użytkownika carlos. Dostęp jednak mamy tylko do użytkownika wiener.

Logujemy się podanymi w zadaniu danymi: 
```
wiener:peter
```

![wiener account](https://www.dropbox.com/scl/fi/2z3jx3wyd0iu634wnfzex/pb-guTJ9Ex4io.png?rlkey=syfyrl22obffetgbtw3s3jdg7&raw=1)

Sprawdzamy w Burpie requesty.

Sprawdźmy, czy po zmianie ID w requeście - dostaniemy się na konto użytkownika carlos:

![get request wiener](https://www.dropbox.com/scl/fi/ddfw2xag0mfw4xw2aminc/pb-dNeQXu7IfA.png?rlkey=6ovb92fzrn60b7quq02dmnpmy&raw=1)


Klikamy prawym przyciskiem myszy na zaznaczonym requeście i wybieramy "***Send to Repeater***".

Podmieniamy userId na ID carlosa. Wysyłamy request. W odpowiedzi dostajemy status 200:

![carlos api key](https://www.dropbox.com/scl/fi/gh4gb6mjdwwrrefgylium/pb-Iio5TQ6li9.png?rlkey=5kapj8fl0gvduujyz0h4m36es&raw=1)


Kopiujemy API Key, klikamy "Submit solution" i wysyłamy odpowiedź. Gotowe:

![user id controlled by request parameter with unpredictable user ids lab solved](https://www.dropbox.com/scl/fi/qfy51txr3cx8qogqn4gv1/pb-5jnlH1q3hb.png?rlkey=adprw73574yfezbujlo6zrqmm&raw=1)

