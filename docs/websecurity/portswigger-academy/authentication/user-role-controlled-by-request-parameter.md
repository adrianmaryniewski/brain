# User role controlled by request parameter

Link: https://portswigger.net/web-security/access-control/lab-user-role-controlled-by-request-parameter

![User role controlled by request parameter](https://www.dropbox.com/scl/fi/n7b4ai32pexkdx036xkho/pb-FMltvhLooJ.png?rlkey=mh8s4ok2vy3by3kxcuh4g7arh&raw=1)



Po dostaniu się do "laba", widzimy sklep internetowy. Z opisu powyżej wynika, że istnieje ścieżka "***/admin***". Dopiszmy ją do adresu URL:

https://0ac20088032ca4178199d989007300f7.web-security-academy.net/admin



Otrzymujemy informację, że panel administratora jest dostępny tylko, jeśli zalogujemy się jako taki użytkownik. Brzmi logicznie:

![admin interface only available if logged in as an administrator](https://www.dropbox.com/scl/fi/350ult2holkj2egjh2ozi/pb-i4X39EnFCN.png?rlkey=ghnyx5gdqq6i6z446pxzl6esk&raw=1)

To, co warto zrobić przed tym testem, to wejść w zakładkę Proxy > Proxy settings:

![proxy settings](https://www.dropbox.com/scl/fi/7a3mgnigpp24quumwalss/pb-likLLahcKQ.png?rlkey=d4l2v2y0e7p0nwrhrgmkle7dp&raw=1)


Następnie zaznaczyć opcję "Intercept requests based on the following rules" i odznaczyć cokolwiek jest zaznaczone w kolumnie "Enabled":

![request interception rules](https://www.dropbox.com/scl/fi/1q0fviwx7xkssfvd8e50u/pb-TZOgiVjZI5.png?rlkey=n26ck16mwevwr9m2trxzeijj9&raw=1)


"W celu skonfigurowania przechwytywania ruchu sieciowego w Burp Suite, należy przejść do zakładki "Proxy", a następnie "Proxy settings". W sekcji "Request Interception Rules" odznacz wszystkie opcje w kolumnie 'Enabled'. Następnie zaznacz opcję "Intercept requests based on the following rules". Dzięki temu, gdy będziesz przechwytywał żądania (requesty) i ich odpowiedzi (response'y), proces przechwytywania zostanie wstrzymany w zakładce "Intercept", co pozwoli na manualną analizę i zarządzanie każdą otrzymaną odpowiedzią."


W zakładce "Proxy" > "Intercept" klikamy "Open browser". Przechodzimy do laba. Klikamy w "My Account".

![login panel](https://www.dropbox.com/scl/fi/4k86sitsx0y5pz65m7pbk/pb-xQqRkzk7z2.png?rlkey=t68eiqo7hlt2wkm59drzuuzv5&raw=1)

Upewniamy się, że mamy włączoną opcję: "Intercept is on"
![intercept is on](https://www.dropbox.com/scl/fi/pyd1r99surbm05etz9p7a/pb-cFMtqBCLcD.png?rlkey=57ipdmfmyt0uabpxkwyonwq27&raw=1)

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
![forward button](https://www.dropbox.com/scl/fi/1wq704xtz39emcvz6lhvt/pb-3yFiKOhGGk.png?rlkey=xqxkr3yftdehlweu1ljfsu0pt&raw=1)

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

Po zmianie parametru "false" na "true", klikamy "Forward" aż będziemy zalogowani. W każdym responsie, w którym mamy parametr Admin=false, zmieniamy na **true**. Dzięki temu będziemy w stanie przejść do panelu administratora. Przechodzimy do przeglądarki i widzimy, że mamy do niego dostęp:

![user role controlled by request parameter admin panel access](https://www.dropbox.com/scl/fi/r9fy2dn54g3tanx4qu8j8/pb-sEWiT2Nsgi.png?rlkey=bprwihp1z4mx241wai75qkmgh&raw=1)


Przechodzimy do admin panelu:
![carlos admin panel](https://www.dropbox.com/scl/fi/qqmrkge4lus7ftu0di05t/pb-LXhlL8iwfZ.png?rlkey=j7qvc1cblmvttge0j34wjw78c&raw=1)


Usuwamy użytkownika carlos:
![user role controlled by request parameter carlos deleted](https://www.dropbox.com/scl/fi/8wkjok0zd5865w5zpr522/pb-sF8Om3hHmH.png?rlkey=dakv6pgoepx3c220ls8efc1zu&raw=1)
