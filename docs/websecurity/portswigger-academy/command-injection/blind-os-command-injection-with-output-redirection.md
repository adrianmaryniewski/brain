# # Blind OS command injection with output redirection (ENG 🇬🇧 | PL 🇵🇱)

Link: https://portswigger.net/web-security/os-command-injection/lab-blind-output-redirection

After clicking "**Access the lab**," we see a store page.

![blind os welcome page](https://www.dropbox.com/scl/fi/0k9m68qows9hhkpcn6j3a/pb-IJQ7itYXKK.png?rlkey=d1g1n4mym8tjl57r95u5k81yw&raw=1)

We click "Submit feedback."

![submit feedback page](https://www.dropbox.com/scl/fi/5kiksw4k5u0rg0yc6fyft/pb-B1pPWlvYEH.png?rlkey=16sfslskacxh6hrevph2rrkg8&raw=1)

While executing the command during this exercise, we will try to redirect the result of this command to a file located in the directory:

```
/var/www/images
```

We fill out the form with data and submit:

![form with data](https://www.dropbox.com/scl/fi/an8vyn8m0524pgjxs5ph5/pb-gSE9LNmHvC.png?rlkey=4heot565yovludzxcvsj3rl94&raw=1)

We go to Burp Suite, find our request, and send it to "Repeater":

![send to Repeater](https://www.dropbox.com/scl/fi/0qsogxyqm5u6dm65c7x5j/pb-plaaIglFMp.png?rlkey=zv8mk4lmnimjgiix1dktslk60&raw=1)

Here we can test individual parameters:

![repeater](https://www.dropbox.com/scl/fi/puhqelyanq6ku0m76qcxs/pb-ObiH2Xmuvd.png?rlkey=o0r73krbs8xqlpjybxglfxv4v&raw=1)

Let's now check if we are able to execute any command. We will adjust our payload to see if this is possible. Our payload looks like this:

```
csrf=Obk1aI10DvBcnBIIm4cW4jcUTL7pZIU9&name=Adrian&email=adrian%40maryniewski.pl;sleep 10;&subject=SUBJECT&message=EVEN+BETTER+MESSAGE%21%2111oneone
```

And it works. I waited 10 seconds for this response:

![response](https://www.dropbox.com/scl/fi/gb3zh4kg8ntb7q6zkb96z/pb-LLUedEBIjR.png?rlkey=0vll17urx6tmbf709xhc4ew57&raw=1)

The goal of this exercise is to check which user I have and save it to a file that will be in the directory:
```
/var/www/images
```

Let's therefore change the command to **whoami** and redirect the result of this command, with the greater-than sign (">"), to the file output.txt:

```
/www/var/images/output.txt
```

So we change our command in this way:

```
csrf=pebQ5r7IcCmvSHnFar8ftsin5Zg7iCk4&name=Adrian&email=adrian%40maryniewski.pl;whoami > /var/www/images/output.txt;&subject=OH+SO+CLEVER+SUBJECT&message=EVEN+BETTER+MESSAGE%21%2111oneone
```

In response from the server, we get a 500, but there is a good chance that the command was executed:

![500 but command used](https://www.dropbox.com/scl/fi/hx4gcox6aay1u7y8cschv/pb-qeCbP9o4O7.png?rlkey=llw44ko43mawaacyaybugm3te&raw=1)

We can now go to any request that allows us to load, for example, images. We click on Home to go to the main page (where images are loaded). We have this disabled in our proxy, so let's deal with it first:

![proxy tab](https://www.dropbox.com/scl/fi/4o8xj6tc5u38rb63envm3/pb-9pthiNSDAn.png?rlkey=k4x569xbox1sbbox9n76so55e&raw=1)

We click on "**Filter settings: Hiding CSS, image and general binary content.**" We select the "**images**" option, then "**Apply**":

![images](https://www.dropbox.com/scl/fi/xr9vojuy1gg7sntp6rad9/pb-gfATyHhCmL.png?rlkey=ofjhb8abpughdswp3kk74mp0d&raw=1)

We refresh the main page ("**Home**").

We can now see what file display looks like - in the "**Logger**" tab:
![logger tab images](https://www.dropbox.com/scl/fi/so89tahfmrqk72baw8akj/pb-Zh0llKNkIM.png?rlkey=l9d6h921qny4bsbv8wrstybat&raw=1)

We see that we have such a request as:

```
GET /image?filename=47.jpg HTTP/2
```

![GET image filename](https://www.dropbox.com/scl/fi/jgfevfc4xozvl80v5vp3a/pb-vr05P1m6vm.png?rlkey=e8puilpjs1o0z1js6k8epithc&raw=1)

We send it to the "**Repeater**" tab.

We change the file name from 47.jpg to output.txt:

![47 image](https://www.dropbox.com/scl/fi/b7il7un6dmx1a72q42pfb/pb-Enjhw5muXz.png?rlkey=680fat4oqigdl3lcvto647fie&raw=1)

![output text](https://www.dropbox.com/scl/fi/h7x4rps6nl9biimqxy0e4/pb-xzJChDITh0.png?rlkey=fw9qtrxnntcwmugcfm32e4mzb&raw=1)

We see the information that we completed the task:

![lab solved](https://www.dropbox.com/scl/fi/1gds03639fv6rrr4dnqi9/pb-4VWgvwcUOs.png?rlkey=vuv0b2aj24srxxjqxgac5k1jo&raw=1)


---


Link: https://portswigger.net/web-security/os-command-injection/lab-blind-output-redirection

Po kliknięciu "Access the lab", widzimy stronę sklepu. 

![blind os welcome page](https://www.dropbox.com/scl/fi/0k9m68qows9hhkpcn6j3a/pb-IJQ7itYXKK.png?rlkey=d1g1n4mym8tjl57r95u5k81yw&raw=1)

Klikamy "Submit feedback".

![submit feedback page](https://www.dropbox.com/scl/fi/5kiksw4k5u0rg0yc6fyft/pb-B1pPWlvYEH.png?rlkey=16sfslskacxh6hrevph2rrkg8&raw=1)


Wykonując komendę podczas wykonywania tego ćwiczenia, będziemy starali się przekierować wynik tej komendy do pliku, który znajduje się w katalogu:

```
/var/www/images
```

Wypełniamy formularz danymi i wysyłamy:

![form with data](https://www.dropbox.com/scl/fi/an8vyn8m0524pgjxs5ph5/pb-gSE9LNmHvC.png?rlkey=4heot565yovludzxcvsj3rl94&raw=1)


Przechodzimy do Burp Suite, odnajdujemy nasz request i wysyłamy go do "Repetera":

![send to Repeater](https://www.dropbox.com/scl/fi/0qsogxyqm5u6dm65c7x5j/pb-plaaIglFMp.png?rlkey=zv8mk4lmnimjgiix1dktslk60&raw=1)


Tutaj możemy testować poszczególne parametry:

![repeater](https://www.dropbox.com/scl/fi/puhqelyanq6ku0m76qcxs/pb-ObiH2Xmuvd.png?rlkey=o0r73krbs8xqlpjybxglfxv4v&raw=1)


Sprawdźmy teraz, czy jesteśmy w stanie wykonać jakąś komendę. Dostosujemy nasz payload tak, aby sprawdzić, czy jest to możliwe. Nasz payload wygląda tak:

```
csrf=Obk1aI10DvBcnBIIm4cW4jcUTL7pZIU9&name=Adrian&email=adrian%40maryniewski.pl;sleep 10;&subject=SUBJECT&message=EVEN+BETTER+MESSAGE%21%2111oneone
```

I działa. Czekałem 10 sekund na tę odpowiedź:

![response](https://www.dropbox.com/scl/fi/gb3zh4kg8ntb7q6zkb96z/pb-LLUedEBIjR.png?rlkey=0vll17urx6tmbf709xhc4ew57&raw=1)

Celem tego ćwiczenia jest to, żeby sprawdzić jakiego mam użytkownika i zapisać go do pliku, który będzie w katalogu:
```
/var/www/images
```

Zmieńmy zatem komendę na **whoami** i przekierujmy wynik działania tej komendy, znakiem większości (">") do pliku output.txt:

```
/www/var/images/output.txt
```

Zmieniamy zatem naszą komendę w ten sposób:

```
csrf=pebQ5r7IcCmvSHnFar8ftsin5Zg7iCk4&name=Adrian&email=adrian%40maryniewski.pl;whoami > /var/www/images/output.txt;&subject=OH+SO+CLEVER+SUBJECT&message=EVEN+BETTER+MESSAGE%21%2111oneone
```

W odpowiedzi od serwera dostajemy 500, ale istnieje spora szansa, że komenda się wykonała:

![500 but command used](https://www.dropbox.com/scl/fi/hx4gcox6aay1u7y8cschv/pb-qeCbP9o4O7.png?rlkey=llw44ko43mawaacyaybugm3te&raw=1)

Możemy teraz przejść do jakiegoś requestu, który pozwala nam zaczytywać na przykład obrazki. Klikamy w Home, aby przejść na stronę główną (gdzie ładują się obrazki). W naszym proxy mamy to wyłączone, więc najpierw zajmijmy się tym:

![proxy tab](https://www.dropbox.com/scl/fi/4o8xj6tc5u38rb63envm3/pb-9pthiNSDAn.png?rlkey=k4x569xbox1sbbox9n76so55e&raw=1)

Klikamy na "**Filter settings: Hiding CSS, image and general binary content.**" Zaznaczamy opcję "**images**", a następnie "**Apply**":

![images](https://www.dropbox.com/scl/fi/xr9vojuy1gg7sntp6rad9/pb-gfATyHhCmL.png?rlkey=ofjhb8abpughdswp3kk74mp0d&raw=1)

Odświeżamy stronę główną ("**Home**").

Możemy teraz zobaczyć jak wygląda wyświetlanie plików - w zakładce "**Logger**":
![logger tab images](https://www.dropbox.com/scl/fi/so89tahfmrqk72baw8akj/pb-Zh0llKNkIM.png?rlkey=l9d6h921qny4bsbv8wrstybat&raw=1)

Widzimy, że mamy taki request jak:

```
GET /image?filename=47.jpg HTTP/2
```

![GET image filename](https://www.dropbox.com/scl/fi/jgfevfc4xozvl80v5vp3a/pb-vr05P1m6vm.png?rlkey=e8puilpjs1o0z1js6k8epithc&raw=1)

Wysyłamy go do zakładki "**Repeater**".

Zmieniamy nazwę pliku z 47.jpg na output.txt:

![47 image](https://www.dropbox.com/scl/fi/b7il7un6dmx1a72q42pfb/pb-Enjhw5muXz.png?rlkey=680fat4oqigdl3lcvto647fie&raw=1)

![output text](https://www.dropbox.com/scl/fi/h7x4rps6nl9biimqxy0e4/pb-xzJChDITh0.png?rlkey=fw9qtrxnntcwmugcfm32e4mzb&raw=1)

Widzimy informację, że ukończyliśmy zadanie:

![lab solved](https://www.dropbox.com/scl/fi/1gds03639fv6rrr4dnqi9/pb-4VWgvwcUOs.png?rlkey=vuv0b2aj24srxxjqxgac5k1jo&raw=1)
