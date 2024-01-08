# Unprotected admin functionality

Link: https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality

![Lab: Unprotected admin functionality](https://www.dropbox.com/scl/fi/0i3b1xd251ian2e0nstha/pb-263ehJclRA.png?rlkey=chovszu6dopl0uahl34b2bhcu&raw=1)

Po kliknięciu "Access the lab", widzimy sklep internetowy. Naszym zadaniem jest dostać się do panelu administratora i skasować użytkownika ***carlos***. Nie znamy loginu czy hasła.

Podczas rekonesansu warto sprawdzić plik ***robots.txt***.

W pasku adresu wpisujemy /robots.txt. W moim przypadku adres pod który zajrzymy wygląda tak:

https://0ab900f404772d3a8570680d00b100e8.web-security-academy.net/robots.txt

Ukazuje nam się taki widok:
![Disallow: /administrator-panel](https://www.dropbox.com/scl/fi/ke72mkcup9ygv0utfwo4k/pb-wIVPg9YzXO.png?rlkey=6nb6vt4ewnhpi46pi25y902sw&raw=1)

Przechodzimy zatem pod taki adres:
https://0ab900f404772d3a8570680d00b100e8.web-security-academy.net/administrator-panel

Bingo. Dostaliśmy się do panelu:
![administrator-panel](https://www.dropbox.com/scl/fi/i7f2nhrix3jz9b1kbjfhp/pb-Iv67JLD815.png?rlkey=1ydd0nkm4l0cj25iqvovu4o9z&raw=1)

Klikamy "Delete" przy użytkowniku carlos.

Zadanie wykonane:
![unprotected admin functionality solved](https://www.dropbox.com/scl/fi/rnvo5fxho0fhms6683jq5/pb-l3yXFJGn05.png?rlkey=vqo8jacyw5t4e2kjkhnlyqftq&raw=1)
