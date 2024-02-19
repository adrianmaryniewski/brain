# Web Shell Upload via Content-Type Restriction Bypass (ENG 🇬🇧 | PL 🇵🇱 )

🇬🇧 ENG:


Link: https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-content-type-restriction-bypass

In this lab, we will be uploading a shell and bypassing a certain security measure that involves checking the "Content-Type".

Click "**Access the lab**", we see a blog:

![blog](https://www.dropbox.com/scl/fi/pd0fa7tcldp8yuud3hfz1/pb-wgowtlJd7x.png?rlkey=51iouchd3pz8sadwgrovwstjb&raw=1)

Exactly as described in the task, we log in to the account **wiener:peter**, previously going to "**My Account**".

![login panel](https://www.dropbox.com/scl/fi/ygpflp663lsmnclxe1is4/pb-SklME645ga.png?rlkey=l8rh2cbg04lnl79x31glplmak&raw=1)

Our task is to exploit a vulnerability in the file upload location, and then read the "secret" file in "carlos's" directory.

![after logging panel](https://www.dropbox.com/scl/fi/h8emijsgesogix29gtr60/pb-e6ukaw0hK2.png?rlkey=l5kzyxxxm0w88dv1hn0zzae4e&raw=1)

Click "Choose file". I have prepared a webshell (webshell.php) - for now, just to check if there are any protections regarding the extension of the given file. If we are to upload an avatar, a file with the .php extension should not pass.

We learn that there is validation:

![php validation](https://www.dropbox.com/scl/fi/peaoemni51w4fsronzsqe/pb-NtdNC3FgLg.png?rlkey=s11harc4kj3a2tuug3d5bdivk&raw=1)

```
Sorry, file type text/php is not allowed Only image/jpeg and image/png are allowed Sorry, there was an error uploading your file.
```

Let's see if we can bypass this in Burp Suite. I find the request that was used to send the file:

![request](https://www.dropbox.com/scl/fi/6hsq6c9n8aww46dsolyix/pb-5AfdqK0bey.png?rlkey=jbbokr3npeb6xbnkmfrm7z1if&raw=1)

Here you can see the file name:

![webshell in the request](https://www.dropbox.com/scl/fi/4cxpd22duilu1i81in1bu/pb-65oRdneI3I.png?rlkey=7l0yqzgmlmkdp3h03csfgfj2o&raw=1)

I right-click and send to "Repeater":

![send to repeater](https://www.dropbox.com/scl/fi/1m7rbkumlz6dvvztb20sv/pb-yA6PXa2jWp.png?rlkey=4s37sk9g5d22fa4512fuxhw6a&raw=1)

In the "Repeater", I send our request again to check if everything works:

![check the request](https://www.dropbox.com/scl/fi/usd04navpopfqljs2oq5o/pb-N6H0iMNFPb.png?rlkey=nuofk53csbwp3sb5x0u0q6hgn&raw=1)

The application detected that it is a php file and correctly entered "Content-Type":

![response](https://www.dropbox.com/scl/fi/nvoun1x6bfaaxlkhtuu5e/pb-PKHqNSh5tU.png?rlkey=m619xu6guarjhi5u6lo4ypk18&raw=1)

![request](https://www.dropbox.com/scl/fi/c7oo7tyjaybcmvkxabukq/pb-h4yAAJtmcw.png?rlkey=r0jeifit7vgwtvubl4iuuu98x&raw=1)

The question is whether we can modify the "Content-Type" and whether it will affect the security.

We have information in the response that image/jpeg and image/png files are allowed.

Let's replace the "Content-Type" in the request:

![request changed](https://www.dropbox.com/scl/fi/xxaycrfuahpu0vz3g7786/pb-xHhmbZGfl7.png?rlkey=c3v4m8b6kjhlt2e018h0b5vgq&raw=1)

It turns out that this time after sending the request we receive a status code 200:

![200 status](https://www.dropbox.com/scl/fi/41xwjkq9ivy0eixrnnk2q/pb-AnkMR7sjLg.png?rlkey=1apoifg3gr2p4k25455nr5r0v&raw=1)

```
HTTP/2 200 OK
Date: Mon, 19 Feb 2024 18:06:05 GMT
Server: Apache/2.4.41 (Ubuntu)
Vary: Accept-Encoding
Content-Type: text/html; charset=UTF-8
X-Frame-Options: SAMEORIGIN
Content-Length: 133

The file avatars/webshell.php has been uploaded.<p><a href="/my-account" title="Return to previous page">« Back to My Account</a></p>
```

In the browser, let's go back. We can see that something tried to load:

![image](https://www.dropbox.com/scl/fi/hcl3jsugzc1ckta0gav5a/pb-z29e4RNxUX.png?rlkey=3okhnxiuqmp9gfq6l92kmcnq2&raw=1)

On the image, right-click and choose the option "Copy image address":

![image address](https://www.dropbox.com/scl/fi/lnniln0554xrlpqg200kj/pb-FS7mTgSJMc.png?rlkey=ydmckbjdq28sn009whzswvwil&raw=1)

In a new tab, paste the image address:

![image address copied](https://www.dropbox.com/scl/fi/k990net4wkcql2vmmbx9i/pb-PW304i2ujZ.png?rlkey=a6dpxk2nidjcfdyobpaqle483&raw=1)

The page loaded, but it's white:

![white page](https://www.dropbox.com/scl/fi/r4hi5veapo3xeh9n648vj/pb-Ot1OtLjo5P.png?rlkey=514iqbwq87llnuj9cpm5dfzjy&raw=1)

We still need to provide the CMD parameter:

```
web-security-academy.net/files/avatars/webshell.php?cmd=whoami
```

Click "**Enter**".

Now we see that we are "carlos":

![carlos page](https://www.dropbox.com/scl/fi/r3r2bc15q1asmccs3z0dr/pb-APYx077OKa.png?rlkey=cunjbf6nppghgappuei409t6p&raw=1)

Let's change the "whoami" command to one that allows us to read "carlos's" secret:

```
web-security-academy.net/files/avatars/webshell.php?cmd=cat /home/carlos/secret
```

Success:

![carlos secret](https://www.dropbox.com/scl/fi/wflto9ga1hjn6f3tz89tb/pb-1ZmCLxLGwH.png?rlkey=vulaxm05whl2eokrmry11sal2&raw=1)

```
8ZYWsxxNmgBMX6BTUfQlgQevsyvImkAM
```

We copy this value and submit it as the answer by clicking "Submit solution":

![submit solution button](https://www.dropbox.com/scl/fi/57mscyffd0quohd1zlpns/pb-7Ixp1H8rEn.png?rlkey=xfkzc0bacw5w82khszi802rfs&raw=1)

Lab solved:

![lab solved](https://www.dropbox.com/scl/fi/ucu8r4kxv0qeuukv4ihu5/pb-bwk67SwJ3v.png?rlkey=t3ibtxnervxn29vuuv1pjagnn&raw=1)

---


🇵🇱 PL:



Link: https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-content-type-restriction-bypass

W tym labie będziemy uploadować shella i będziemy omijać pewne zabezpieczenie, które polega na tym, że sprawdzamy jest "Content-Type".

Klikamy "**Access the lab**", widzimy bloga:

![blog](https://www.dropbox.com/scl/fi/pd0fa7tcldp8yuud3hfz1/pb-wgowtlJd7x.png?rlkey=51iouchd3pz8sadwgrovwstjb&raw=1)

Dokładnie tak, jak w opisie zadania, logujemy się na konto **wiener:peter**, wcześniej przechodząc do "**My Account**".

![login panel](https://www.dropbox.com/scl/fi/ygpflp663lsmnclxe1is4/pb-SklME645ga.png?rlkey=l8rh2cbg04lnl79x31glplmak&raw=1)

Naszym zadaniem jest wykorzystać podatność w miejscu uploadu pliku, a następnie przeczytać plik "secret" w katalogu "carlosa".

![after logging panel](https://www.dropbox.com/scl/fi/h8emijsgesogix29gtr60/pb-e6ukaw0hK2.png?rlkey=l5kzyxxxm0w88dv1hn0zzae4e&raw=1)

Klikamy "Choose file". Ja mam przygotowany webshell (webshell.php) - póki co tylko po to, aby sprawdzić, czy są zabezpieczenia odnośnie rozszerzenia danego pliku. Jeśli mamy wczytać avatar, plik z rozszerzeniem .php nie powinien przejść.

Dowiadujemy się, że jest walidacja:

![php validation](https://www.dropbox.com/scl/fi/peaoemni51w4fsronzsqe/pb-NtdNC3FgLg.png?rlkey=s11harc4kj3a2tuug3d5bdivk&raw=1)

```
Sorry, file type text/php is not allowed Only image/jpeg and image/png are allowed Sorry, there was an error uploading your file.
```

Sprawdźmy, czy w Burp Suite możemy to obejść. Odnajduję request, który służył do wysyłania pliku:

![request](https://www.dropbox.com/scl/fi/6hsq6c9n8aww46dsolyix/pb-5AfdqK0bey.png?rlkey=jbbokr3npeb6xbnkmfrm7z1if&raw=1)

Tutaj można zobaczyć, że jest nazwa pliku:

![webshell in the request](https://www.dropbox.com/scl/fi/4cxpd22duilu1i81in1bu/pb-65oRdneI3I.png?rlkey=7l0yqzgmlmkdp3h03csfgfj2o&raw=1)

Klikam prawym przyciskiem myszy i wysyłam do "Repeatera":

![send to repeater](https://www.dropbox.com/scl/fi/1m7rbkumlz6dvvztb20sv/pb-yA6PXa2jWp.png?rlkey=4s37sk9g5d22fa4512fuxhw6a&raw=1)

W "Repeaterze" wysyłam jeszcze raz nasz request, aby sprawdzić, czy wszystko działa:

![check the request](https://www.dropbox.com/scl/fi/usd04navpopfqljs2oq5o/pb-N6H0iMNFPb.png?rlkey=nuofk53csbwp3sb5x0u0q6hgn&raw=1)



Aplikacja wykryła, że jest to plik php, oraz odpowiednio wpisała "Content-Type":

![response](https://www.dropbox.com/scl/fi/nvoun1x6bfaaxlkhtuu5e/pb-PKHqNSh5tU.png?rlkey=m619xu6guarjhi5u6lo4ypk18&raw=1)

![request](https://www.dropbox.com/scl/fi/c7oo7tyjaybcmvkxabukq/pb-h4yAAJtmcw.png?rlkey=r0jeifit7vgwtvubl4iuuu98x&raw=1)

Pytanie, czy jesteśmy w stanie modyfikować "Content-Type" i czy to wpłynie na zabezpieczenie.

Mamy w responsie informację, że pliki image/jpeg i image/png są dozwolone.

Podmieńmy w requeście "Content-Type":

![request changed](https://www.dropbox.com/scl/fi/xxaycrfuahpu0vz3g7786/pb-xHhmbZGfl7.png?rlkey=c3v4m8b6kjhlt2e018h0b5vgq&raw=1)

Okazuje się, że tym razem po wysłaniu requestu otrzymujemy status kod 200:

![200 status](https://www.dropbox.com/scl/fi/41xwjkq9ivy0eixrnnk2q/pb-AnkMR7sjLg.png?rlkey=1apoifg3gr2p4k25455nr5r0v&raw=1)

```
HTTP/2 200 OK
Date: Mon, 19 Feb 2024 18:06:05 GMT
Server: Apache/2.4.41 (Ubuntu)
Vary: Accept-Encoding
Content-Type: text/html; charset=UTF-8
X-Frame-Options: SAMEORIGIN
Content-Length: 133

The file avatars/webshell.php has been uploaded.<p><a href="/my-account" title="Return to previous page">« Back to My Account</a></p>
```

W przeglądarce cofnijmy się. Widać, że coś próbowało się załadować:

![image](https://www.dropbox.com/scl/fi/hcl3jsugzc1ckta0gav5a/pb-z29e4RNxUX.png?rlkey=3okhnxiuqmp9gfq6l92kmcnq2&raw=1)

Na obrazku klikamy prawym przyciskiem myszy i wybieramy opcję "Copy image address":

![image address](https://www.dropbox.com/scl/fi/lnniln0554xrlpqg200kj/pb-FS7mTgSJMc.png?rlkey=ydmckbjdq28sn009whzswvwil&raw=1)

W nowej karcie wklejamy adres obrazka:

![image address copied](https://www.dropbox.com/scl/fi/k990net4wkcql2vmmbx9i/pb-PW304i2ujZ.png?rlkey=a6dpxk2nidjcfdyobpaqle483&raw=1)

Strona załadowała się, ale jest biało:

![white page](https://www.dropbox.com/scl/fi/r4hi5veapo3xeh9n648vj/pb-Ot1OtLjo5P.png?rlkey=514iqbwq87llnuj9cpm5dfzjy&raw=1)

Musimy jeszcze podać parametr CMD:

```
web-security-academy.net/files/avatars/webshell.php?cmd=whoami
```

Klikamy "**Enter**".

Teraz widzimy, że jesteśmy "carlosem":

![carlos page](https://www.dropbox.com/scl/fi/r3r2bc15q1asmccs3z0dr/pb-APYx077OKa.png?rlkey=cunjbf6nppghgappuei409t6p&raw=1)

Zmieńmy komendę "whoami" na taką, która pozwoli na odczytanie sekretu "carlosa":

```
web-security-academy.net/files/avatars/webshell.php?cmd=cat /home/carlos/secret
```

Sukces:

![carlos secret](https://www.dropbox.com/scl/fi/wflto9ga1hjn6f3tz89tb/pb-1ZmCLxLGwH.png?rlkey=vulaxm05whl2eokrmry11sal2&raw=1)

```
8ZYWsxxNmgBMX6BTUfQlgQevsyvImkAM
```

Kopiujemy tę wartość i wysyłamy jako odpowiedź, klikając "Submit solution":

![submit solution button](https://www.dropbox.com/scl/fi/57mscyffd0quohd1zlpns/pb-7Ixp1H8rEn.png?rlkey=xfkzc0bacw5w82khszi802rfs&raw=1)

Lab rozwiązany:

![lab solved](https://www.dropbox.com/scl/fi/ucu8r4kxv0qeuukv4ihu5/pb-bwk67SwJ3v.png?rlkey=t3ibtxnervxn29vuuv1pjagnn&raw=1)



