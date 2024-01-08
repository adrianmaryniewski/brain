# Username enumeration via different responses

Link: https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-different-responses

W tym "labie" sprawdzamy jak wygląda proces logowania i informowania użytkownika o wykorzystaniu błędnych danych.

Korzystać w tym ćwiczeniu będziemy z dwóch list, które widzimy jeszcze przed kliknięciem "Access the lab":
- Candidate usernames - https://portswigger.net/web-security/authentication/auth-lab-usernames
- Candidate passwords - https://portswigger.net/web-security/authentication/auth-lab-passwords

Po wejściu do laba ukazuje nam się taka strona:

![Username enumeration via different responses main page](https://www.dropbox.com/scl/fi/9tfxg0jxashc9p61s05rb/pb-CNZMQQO0GB.png?rlkey=98m0lpza64g2qt9rtsd6k1n3c&raw=1)



Klikamy "**My Account**", bo chcemy się dostać do sekcji związanej z "autentykacją", a raczej **uwierzytelnieniem** - trzymając się polskiej nazwy.

Widzimy panel logowania:

![Username enumeration via diferent responses login panel](https://www.dropbox.com/scl/fi/yckqc3gukq0rg16je71sl/pb-tQ2EIQK2ne.png?rlkey=erous2ndpefg1we18lvgigynz&raw=1)

Spróbujmy wpisać wymyślone login i hasło, np. adrian:password.

Widzimy informację: "Invalid username":

![invalid username](https://www.dropbox.com/scl/fi/p0s2nb7fchnrp2ehfu7l3/pb-ONUwG4Urcq.png?rlkey=39hqwzfp41e03vw1u6tstdrr5&raw=1)

Czyli najprawdopodobniej nie ma w systemie użytkownika o takim loginie.

Już tutaj warto zaznaczyć, że komunikat o błędzie nie powinien zdradzać takich informacji. 

Co zamiast tego? Lepszą praktyką jest podanie informacji w stylu: "**Invalid username or password**", czyli nie dajemy bezpośrednio informacji o tym co zostało źle wpisane.

Przejdźmy do Burp Suite, aby zobaczyć jak wyglądała komunikacja HTTP:

![burp suite http communication](https://www.dropbox.com/scl/fi/n5ycvbnjbnkg0g901vmz8/pb-1f3UkhYsei.png?rlkey=hdkkawie8l0zeh53mwtw5yedf&raw=1)


To jest zapytanie POST, które służyło nam do zalogowania.

Wykorzystam narzędzie ***Intruder*** do tego, aby sprawdzić, czy jestem w stanie dowiedzieć się, który z tych list użytkowników to poprawny użytkownik.

Klikam na requeście, wybierając "***Send to Intruder***":

![send to intruder](https://www.dropbox.com/scl/fi/decgh0sbxf92wh9r8kjlw/pb-hG7lnvT6k5.png?rlkey=oft47h5x31ia5vvqzmt3xbwvh&raw=1)

Przechodzę do zakładki "**Intruder**". W niej zaznaczam mój "username" (23. linia):

![username in intruder](https://www.dropbox.com/scl/fi/m73544hto1ccgqki6zsrz/pb-5Ip24I6cDI.png?rlkey=e51p337pygd0hwbm2p4z2440r&raw=1)


Klikam po prawej stronie na "**Add §**" - po to, aby "Intruder" brał pod uwagę tę właśnie wartość i pod nią podmieniał wartości z listy, które zaraz wgramy.

Przechodzimy do zakładki "**Payloads**":

![payloads tab](https://www.dropbox.com/scl/fi/wy7yjuafzfp46kth0muyz/pb-jDf34Ulc1n.png?rlkey=gymptpqv196hmarymhdj4xd61&raw=1)

Ze strony z nazwami użytkowników ( https://portswigger.net/web-security/authentication/auth-lab-usernames ), kopiuję wszystkie loginy i wklejam, klikając przycisk "**Paste**":

![paste the usernames](https://www.dropbox.com/scl/fi/107ezw13oicg2w28y3314/pb-7KIeGAIqD3.png?rlkey=ompdjp43ycfhow5ha17n3t96v&raw=1)



Po kliknięciu "**Paste**":

![after paste clicking](https://www.dropbox.com/scl/fi/vtub86lw3cpw78bi3azlk/pb-nU46v86ibc.png?rlkey=hcpxm24pc8h7pudsm3sv8nh2t&raw=1)



Klikamy po prawej stronie "**Start attack**", a następnie "**OK**" na nowo powstałym oknie.



