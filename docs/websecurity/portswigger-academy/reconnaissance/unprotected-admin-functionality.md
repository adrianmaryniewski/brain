# Unprotected admin functionality

Link: https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality

![Lab: Unprotected admin functionality](https://dsc.cloud/f62499/pb-M0f84B976T.png)

Po kliknięciu "Access the lab", widzimy sklep internetowy. Naszym zadaniem jest dostać się do panelu administratora i skasować użytkownika ***carlos***. Nie znamy loginu czy hasła.

Podczas rekonesansu warto sprawdzić plik ***robots.txt***.

W pasku adresu wpisujemy /robots.txt. W moim przypadku adres pod który zajrzymy wygląda tak:

https://0ab900f404772d3a8570680d00b100e8.web-security-academy.net/robots.txt

Ukazuje nam się taki widok:
![Disallow: /administrator-panel](https://dsc.cloud/f62499/pb-4CC2GSKb4C.png)

Przechodzimy zatem pod taki adres:
https://0ab900f404772d3a8570680d00b100e8.web-security-academy.net/administrator-panel

Bingo. Dostaliśmy się do panelu:
![administrator-panel](https://dsc.cloud/f62499/pb-uYznNG0eCd.png)

Klikamy "Delete" przy użytkowniku carlos.

Zadanie wykonane:
![unprotected admin functionality solved](https://dsc.cloud/f62499/pb-2kiqLgbSzt.png)
