# # User ID controlled by request parameter with data leakage in redirect

Link: https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-data-leakage-in-redirect

![description](https://dsc.cloud/f62499/pb-wIdvvHcqmd.png)

Naszym zadaniem jest uzyskać API key użytkownika carlos. Po kliknięciu "Access the lab", przechodzimy do "My account", logujemy się podanymi w opisie loginem i hasłem, czyli wiener:peter:

![login wiener peter](https://dsc.cloud/f62499/pb-mkR0Mh7YhD.png)

Po zalogowaniu widać kilka interesujących rzeczy.

1. API key jest widoczny dla zalogowanego użytkownika
2. Parametr ID = nazwa użytkownika jest widoczny w pasku URL

![after logging](https://dsc.cloud/f62499/pb-FlycRCpHA3.png)


Sprawdźmy, co się stanie, jeśli zamiast użytkownika wiener będzie carlos i naciśniemy "Enter":

![change of the username](https://dsc.cloud/f62499/pb-QpdD7Otpxc.png)

Z aplikacji zostaliśmy wylogowani, ale "pod spodem" działa Burp Suite.

Mając włączonego "Burpa" w tle, możemy sprawdzić jak wygląda komunikacja:

![wrong user redirection](https://dsc.cloud/f62499/pb-x9dlm43lA4.png)


W zapytaniu z parametrem "carlos" widzimy status "302", czyli przekierowanie. Co prawda w aplikacji zobaczyliśmy ekran logowania, ale zanim to nastąpiło - była wyświetlona strona z danymi danego użytkownika. Prawidłowym zachowaniem byłoby usunięcie z odpowiedzi (response) kodu HTML i pozostawienie samych nagłówków. W tym przypadku możemy przejrzeć zawartość strony i zobaczyć, czy znajdziemy tam interesujące nas API key:



![carlos api key](https://dsc.cloud/f62499/pb-zZksPaRncr.png)


Kopiujemy API key, przechodzimy do strony, klikamy "Submit solution". Gotowe:

![submit solution](https://dsc.cloud/f62499/pb-DTyF8mY7g3.png)





![lab solved](https://dsc.cloud/f62499/pb-zAH7pOCA1z.png)

