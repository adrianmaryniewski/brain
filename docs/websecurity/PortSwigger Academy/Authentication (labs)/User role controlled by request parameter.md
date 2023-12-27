Link: https://portswigger.net/web-security/access-control/lab-user-role-controlled-by-request-parameter

![User role controlled by request parameter](https://dsc.cloud/f62499/pb-Q9kS4drM9Y.png)



Po dostaniu się do "laba", widzimy sklep internetowy. Z opisu powyżej wynika, że istnieje ścieżka "***/admin***". Dopiszmy ją do adresu URL:

https://0ac20088032ca4178199d989007300f7.web-security-academy.net/admin



Otrzymujemy informację, że panel administratora jest dostępny tylko, jeśli zalogujemy się jako taki użytkownik. Brzmi logicznie:

![admin interface only available if logged in as an administrator](https://dsc.cloud/f62499/pb-unJPYqWA8u.png)

To, co warto zrobić przed tym testem, to wejść w zakładkę Proxy > Proxy settings:

![proxy settings](https://dsc.cloud/f62499/pb-jcDG62p4kv.png)


Następnie zaznaczyć opcję "Intercept requests based on the following rules" i odznaczyć cokolwiek jest zaznaczone w kolumnie "Enabled":

![request interception rules](https://dsc.cloud/f62499/pb-2meowW71R8.png)


"W celu skonfigurowania przechwytywania ruchu sieciowego w Burp Suite, należy przejść do zakładki "Proxy", a następnie "Proxy settings". W sekcji "Request Interception Rules" odznacz wszystkie opcje w kolumnie 'Enabled'. Następnie zaznacz opcję "Intercept requests based on the following rules". Dzięki temu, gdy będziesz przechwytywał żądania (requesty) i ich odpowiedzi (response'y), proces przechwytywania zostanie wstrzymany w zakładce "Intercept", co pozwoli na manualną analizę i zarządzanie każdą otrzymaną odpowiedzią."


W zakładce "Proxy" > "Intercept" klikamy "Open browser". Przechodzimy do laba. Klikamy w "My Account".

![login panel](https://dsc.cloud/f62499/pb-SUALBRJQSu.png)

Upewniamy się, że mamy włączoną opcję: "Intercept is on"
![intercept is on](https://dsc.cloud/f62499/pb-eHT38CEK5i.png)

Logujemy się podanymi danymi (wiener:peter), aby prześledzić ruch:

```
POST /login HTTP/2
Host: 0a0a00e3041ea9d386f88a1b002c00c6.web-security-academy.net
Cookie: session=tWXWUqhxxGqK63djWvGAikc3c8cvOnm5
Content-Length: 68
Cache-Control: max-age=0
Sec-Ch-Ua: "Not_A Brand";v="8", "Chromium";v="120"
Sec-Ch-Ua-Mobile: ?0
Sec-Ch-Ua-Platform: "macOS"
Upgrade-Insecure-Requests: 1
Origin: https://0a0a00e3041ea9d386f88a1b002c00c6.web-security-academy.net
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.71 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Referer: https://0a0a00e3041ea9d386f88a1b002c00c6.web-security-academy.net/login
Accept-Encoding: gzip, deflate, br
Accept-Language: en-GB,en-US;q=0.9,en;q=0.8
Priority: u=0, i

csrf=kv22Q9hDGCvkx1Uhfd2X2T5xf4mF5tTL&username=wiener&password=peter
```

Klikamy "Forward", aby sprawdzić kolejną odpowiedź:
![forward button](https://dsc.cloud/f62499/pb-0ehJaEocSD.png)

Wygląda ona następująco:
```
GET /my-account?id=wiener HTTP/2
Host: 0a0a00e3041ea9d386f88a1b002c00c6.web-security-academy.net
Cookie: Admin=false; session=MWj6LXlEd6CBFs2e2B4sQy1t9v9K008o
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.71 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Sec-Ch-Ua: "Not_A Brand";v="8", "Chromium";v="120"
Sec-Ch-Ua-Mobile: ?0
Sec-Ch-Ua-Platform: "macOS"
Referer: https://0a0a00e3041ea9d386f88a1b002c00c6.web-security-academy.net/login
Accept-Encoding: gzip, deflate, br
Accept-Language: en-GB,en-US;q=0.9,en;q=0.8
Priority: u=0, i


```

Widzimy, że w nagłówku (3. linia) mamy wartość "**Admin**" ustawioną na "**false**". Z punktu widzenia osoby testującej aplikację pod kątem bezpieczeństwa, zapala się "czerwona lampka".

Po zmianie parametru "false" na "true", klikamy "Forward" dopóki będziemy zalogowani. W każdym responsie, w którym mamy parametr Admin=false, zmieniamy na true. Dzięki temu będziemy  wstanie przejść do panelu administratora. Przechodzimy do przeglądarki i widzimy, że mamy do niego dostęp:

![user role controlled by request parameter admin panel access](https://dsc.cloud/f62499/pb-k0x3iMgorK.png)


Przechodzimy do admin panelu:
![carlos admin panel](https://dsc.cloud/f62499/pb-eigiPRkLXK.png)


Usuwamy użytkownika carlos:
![user role controlled by request parameter carlos deleted](https://dsc.cloud/f62499/pb-8KVobsNikf.png)
