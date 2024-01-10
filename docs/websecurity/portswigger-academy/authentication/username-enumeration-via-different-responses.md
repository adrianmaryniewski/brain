# Username Enumeration via Different Responses

Link: https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-different-responses

In this lab, we explore what the login process looks like and how users are informed when incorrect credentials are used.

For this exercise, we will use two lists that we see even before clicking "Access the lab":
- Candidate usernames - https://portswigger.net/web-security/authentication/auth-lab-usernames
- Candidate passwords - https://portswigger.net/web-security/authentication/auth-lab-passwords

---

Upon entering the lab, we are presented with this page:


![Username enumeration via different responses main page](https://www.dropbox.com/scl/fi/9tfxg0jxashc9p61s05rb/pb-CNZMQQO0GB.png?rlkey=98m0lpza64g2qt9rtsd6k1n3c&raw=1)

We click on "**My Account**" because we want to access the section related to "authentication".


We see the login panel:


![Username enumeration via different responses login panel](https://www.dropbox.com/scl/fi/yckqc3gukq0rg16je71sl/pb-tQ2EIQK2ne.png?rlkey=erous2ndpefg1we18lvgigynz&raw=1)


Let's try to enter a made-up username and password, for example, adrian:password.


We see the message: "Invalid username":


![invalid username](https://www.dropbox.com/scl/fi/p0s2nb7fchnrp2ehfu7l3/pb-ONUwG4Urcq.png?rlkey=39hqwzfp41e03vw1u6tstdrr5&raw=1)

This likely means that there is no user with such a username in the system.

It's worth noting here that the error message should not reveal such information.

What instead? A better practice is to provide information like: "**Invalid username or password**", so as not to directly inform what was entered incorrectly.


Let's move on to Burp Suite to see what the HTTP communication looked like:


![burp suite http communication](https://www.dropbox.com/scl/fi/n5ycvbnjbnkg0g901vmz8/pb-1f3UkhYsei.png?rlkey=hdkkawie8l0zeh53mwtw5yedf&raw=1)



This is the POST request we used to log in.

I will use the ***Intruder*** tool to check if I can determine which of the list's users is the correct user.


I click on the request, selecting "***Send to Intruder***":


![send to intruder](https://www.dropbox.com/scl/fi/decgh0sbxf92wh9r8kjlw/pb-hG7lnvT6k5.png?rlkey=oft47h5x31ia5vvqzmt3xbwvh&raw=1)



I go to the "**Intruder**" tab. In it, I select my "username" (line 23):


![username in intruder](https://www.dropbox.com/scl/fi/m73544hto1ccgqki6zsrz/pb-5Ip24I6cDI.png?rlkey=e51p337pygd0hwbm2p4z2440r&raw=1)



I click on the right side on "**Add §**" - so that "Intruder" takes this particular value into account and substitutes the list values that we will upload shortly.

We move to the "**Payloads**" tab:


![payloads tab](https://www.dropbox.com/scl/fi/wy7yjuafzfp46kth0muyz/pb-jDf34Ulc1n.png?rlkey=gymptpqv196hmarymhdj4xd61&raw=1)



From the page with usernames ( https://portswigger.net/web-security/authentication/auth-lab-usernames ), I copy all the usernames and paste them by clicking the "**Paste**" button:

![paste the usernames](https://www.dropbox.com/scl/fi/107ezw13oicg2w28y3314/pb-7KIeGAIqD3.png?rlkey=ompdjp43ycfhow5ha17n3t96v&raw=1)




After clicking "**Paste**":

![after paste clicking](https://www.dropbox.com/scl/fi/vtub86lw3cpw78bi3azlk/pb-nU46v86ibc.png?rlkey=hcpxm24pc8h7pudsm3sv8nh2t&raw=1)


We click on the right side "**Start attack**", then "**OK**" in the newly appeared window.