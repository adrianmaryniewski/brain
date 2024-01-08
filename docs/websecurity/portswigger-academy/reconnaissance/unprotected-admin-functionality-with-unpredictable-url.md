# # Unprotected admin functionality with unpredictable URL

Link: https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality-with-unpredictable-url

Drugą rzeczą jaką możemy zrobić zaraz po sprawdzeniu pliku robots.txt, jest sprawdzenie źródła strony. Po kliknięciu "Access the lab", możemy przejść np. do "My Account", kliknąć na wolnym polu prawym przyciskiem myszy i wybrać "View Page Source":

![view page source](https://www.dropbox.com/scl/fi/17u2zwvei1puzydi5979a/pb-q71Rq2HElQ.png?rlkey=zuiwd91gv6ama1mocrqpqv8za&raw=1)


Naszym oczom ukaże się statyczny kod strony (jeśli wybralibyśmy "Inspect", moglibyśmy zmieniać stronę - opcja dynamiczna).

Widzimy, że widnieje tam kod JavaScript, który ma w sobie ścieżkę o niecodziennej nazwie:

```
/admin-cty0yq
```

![js code with weird path name](https://www.dropbox.com/scl/fi/r9jpggsiz4uej8xcan12l/pb-beJ8fVmna2.png?rlkey=s317kdz6wd7t2bcndjy0aygxo&raw=1)



Przechodzimy zatem na taką stronę:

```
https://0ad700bd0406d4bc82256f5a00c3008c.web-security-academy.net/admin-cty0yq
```

Oczywiście początek adresu może się różnić.


Przeszliśmy do panelu administratora:

![admin panel](https://www.dropbox.com/scl/fi/a6trt3xclrve00t4gf8tr/pb-UHUeB3xTg6.png?rlkey=2htu6xq2zdyyl4xpa7vxmy9rv&raw=1)



Usuwamy użytkownika carlos:

![carlos deleted](https://www.dropbox.com/scl/fi/24bdj7j7ttj0cdjzdq5ae/pb-6LrjdxU3F7.png?rlkey=enteyqegutf280ohn6agizmf4&raw=1)

