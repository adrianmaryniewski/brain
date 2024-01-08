# # Unprotected admin functionality with unpredictable URL

Link: https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality-with-unpredictable-url

Drugą rzeczą jaką możemy zrobić zaraz po sprawdzeniu pliku robots.txt, jest sprawdzenie źródła strony. Po kliknięciu "Access the lab", możemy przejść np. do "My Account", kliknąć na wolnym polu prawym przyciskiem myszy i wybrać "View Page Source":

![view page source](https://dsc.cloud/f62499/pb-f3nBKbyIQq.png)


Naszym oczom ukaże się statyczny kod strony (jeśli wybralibyśmy "Inspect", moglibyśmy zmieniać stronę - opcja dynamiczna).

Widzimy, że widnieje tam kod JavaScript, który ma w sobie ścieżkę o niecodziennej nazwie:

```
/admin-cty0yq
```

![js code with weird path name](https://dsc.cloud/f62499/pb-3MOfnw4ty8.png)



Przechodzimy zatem na taką stronę:

```
https://0ad700bd0406d4bc82256f5a00c3008c.web-security-academy.net/admin-cty0yq
```

Oczywiście początek adresu może się różnić.


Przeszliśmy do panelu administratora:

![admin panel](https://dsc.cloud/f62499/pb-PvEwLLLgvu.png)



Usuwamy użytkownika carlos:

![carlos deleted](https://dsc.cloud/f62499/pb-0037bYNCYB.png)

