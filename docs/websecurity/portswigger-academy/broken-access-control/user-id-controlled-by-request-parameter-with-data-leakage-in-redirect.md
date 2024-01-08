# # User ID controlled by request parameter with data leakage in redirect

Link: https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-data-leakage-in-redirect

![description](https://www.dropbox.com/scl/fi/wvrk1bpunjupmn4g2yr0e/pb-AZ5yQQyIsZ.png?rlkey=9br6a8v7dppwy65caq4n8j3ew&raw=1)

Naszym zadaniem jest uzyskać API key użytkownika carlos. Po kliknięciu "Access the lab", przechodzimy do "My account", logujemy się podanymi w opisie loginem i hasłem, czyli wiener:peter:

![login wiener peter](https://www.dropbox.com/scl/fi/zmrdpi1azrs3cpltm6fnl/pb-u9RB9PYHxR.png?rlkey=ec9idc1b0j4q2fpu27gv0c4xw&raw=1)

Po zalogowaniu widać kilka interesujących rzeczy.

1. API key jest widoczny dla zalogowanego użytkownika
2. Parametr ID = nazwa użytkownika jest widoczny w pasku URL

![after logging](https://www.dropbox.com/scl/fi/syg8lcwrtcmz6d1dthti8/pb-klMD0Z5yNs.png?rlkey=h9j9m5hivikyvw6htnfrbvoam&raw=1)


Sprawdźmy, co się stanie, jeśli zamiast użytkownika wiener będzie carlos i naciśniemy "Enter":

![change of the username](https://www.dropbox.com/scl/fi/xy6w7rfk2h92wsby69el0/pb-nCe8zPa8F6.png?rlkey=vuad58c1lu5b9b1g28mos6n67&raw=1)

Z aplikacji zostaliśmy wylogowani, ale "pod spodem" działa Burp Suite.

Mając włączonego "Burpa" w tle, możemy sprawdzić jak wygląda komunikacja:

![wrong user redirection](https://www.dropbox.com/scl/fi/982djtnsabc0c93ql5kuy/pb-QRaKEtgAFA.png?rlkey=4jk764lkjre7qdsmy0jvsnclp&raw=1)


W zapytaniu z parametrem "carlos" widzimy status "302", czyli przekierowanie. Co prawda w aplikacji zobaczyliśmy ekran logowania, ale zanim to nastąpiło - była wyświetlona strona z danymi danego użytkownika. Prawidłowym zachowaniem byłoby usunięcie z odpowiedzi (response) kodu HTML i pozostawienie samych nagłówków. W tym przypadku możemy przejrzeć zawartość strony i zobaczyć, czy znajdziemy tam interesujące nas API key:



![carlos api key](https://www.dropbox.com/scl/fi/d4m8b2wgx1e59s0kcsjxp/pb-OtQgVybd8h.png?rlkey=sumpb4p3gzpe3ibp83oan6t8f&raw=1)


Kopiujemy API key, przechodzimy do strony, klikamy "Submit solution". Gotowe:

![submit solution](https://www.dropbox.com/scl/fi/ny7e1ozqzq2eb520afn4i/pb-zdYLFRWzAz.png?rlkey=yot21gydj57mquptd1i8igdzn&raw=1)





![lab solved](https://www.dropbox.com/scl/fi/m9kcvdhlkgjp966a7sost/pb-tWHBKur2Yp.png?rlkey=5qissdepkptuokas4a76ckilo&raw=1)

