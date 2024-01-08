# Username enumeration via different responses

Link: https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-different-responses

W tym "labie" sprawdzamy jak wygląda proces logowania i informowania użytkownika o wykorzystaniu błędnych danych.

Korzystać w tym ćwiczeniu będziemy z dwóch list, które widzimy jeszcze przed kliknięciem "Access the lab":
- Candidate usernames - https://portswigger.net/web-security/authentication/auth-lab-usernames
- Candidate passwords - https://portswigger.net/web-security/authentication/auth-lab-passwords

Po wejściu do laba ukazuje nam się taka strona:

![Username enumeration via different responses main page](https://dsc.cloud/f62499/pb-bvNDaCNyYx.png)



Klikamy "**My Account**", bo chcemy się dostać do sekcji związanej z "autentykacją", a raczej **uwierzytelnieniem** - trzymając się polskiej nazwy.

Widzimy panel logowania:

![Username enumeration via diferent responses login panel](https://dsc.cloud/f62499/pb-IP6CYnxKTa.png)

Spróbujmy wpisać wymyślone login i hasło, np. adrian:password.

Widzimy informację: "Invalid username":

![invalid username](https://dsc.cloud/f62499/pb-I7U9QnhJ3s.png)

Czyli najprawdopodobniej nie ma w systemie użytkownika o takim loginie.

Już tutaj warto zaznaczyć, że komunikat o błędzie nie powinien zdradzać takich informacji. 

Co zamiast tego? Lepszą praktyką jest podanie informacji w stylu: "**Invalid username or password**", czyli nie dajemy bezpośrednio informacji o tym co zostało źle wpisane.

Przejdźmy do Burp Suite, aby zobaczyć jak wyglądała komunikacja HTTP:

![burp suite http communication](https://dsc.cloud/f62499/pb-Y9bnSSVvrT.png)


To jest zapytanie POST, które służyło nam do zalogowania.

Wykorzystam narzędzie ***Intruder*** do tego, aby sprawdzić, czy jestem w stanie dowiedzieć się, który z tych list użytkowników to poprawny użytkownik.

Klikam na requeście, wybierając "***Send to Intruder***":

![send to intruder](https://dsc.cloud/f62499/pb-Vvxpr2bL72.png)

Przechodzę do zakładki "**Intruder**". W niej zaznaczam mój "username" (23. linia):

![username in intruder](https://dsc.cloud/f62499/pb-3eejOrEhYB.png)


Klikam po prawej stronie na "**Add §**" - po to, aby "Intruder" brał pod uwagę tę właśnie wartość i pod nią podmieniał wartości z listy, które zaraz wgramy.

Przechodzimy do zakładki "**Payloads**":

![payloads tab](https://dsc.cloud/f62499/pb-yJqZnfe6Xl.png)

Ze strony z nazwami użytkowników ( https://portswigger.net/web-security/authentication/auth-lab-usernames ), kopiuję wszystkie loginy i wklejam, klikając przycisk "**Paste**":

![paste the usernames](https://dsc.cloud/f62499/pb-t3l0fsRjmx.png)



Po kliknięciu "**Paste**":

![after paste clicking](https://dsc.cloud/f62499/pb-nf6h11EprV.png)



Klikamy po prawej stronie "**Start attack**", a następnie "**OK**" na nowo powstałym oknie.



