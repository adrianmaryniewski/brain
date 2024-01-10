# HTTP Headers

>Notes from the book "Web Application Security"

## HTTP Headers in the Context of Security

In this chapter, we will learn about interesting HTTP headers that can help increase the security of applications. We also learned how attackers might try to bypass them. Headers are defined by providing a name and value separated by a colon. There are many different headers, and their application depends on the creativity of the application creator. The most popular ones are those responsible for authentication, caching, security, encoding, range, resource fetching, redirects, server-side actions, WebSockets, and connection management.

- HTTP Strict Transport Security (HSTS)
- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Feature-Policy
- Access-Control-Allow-Origin

are the most popular headers related to security. Application authors and server owners can add their own, arbitrary headers, which means their number is potentially unlimited. Remember that headers are a very valuable source of information about the technologies used, software, and configuration elements. To check the current headers for a specific page, you can use the Developer Tools available in many browsers. Launching and using this tool is very simple - just start the browser, go to the page whose headers you want to see, and press the F12 key (cmd shift i on Mac) or select the tool from the VIEW › DEVELOPER › DEVELOPER TOOLS menu.

![console-headers-1](https://www.dropbox.com/scl/fi/txsnphr5uj2woin9ncz2l/pb-zxGsYGB3pU.png?rlkey=xijd17d86ice4xoylxzpn2p08&raw=1)

We go to the NETWORK tab, here again, you need to reload the page (refresh), for example by pressing the F5 key.

![console-headers](https://www.dropbox.com/scl/fi/2ad0oqrkkek60kgrj4nza/pb-Wkexvo0kfJ.png?rlkey=1vrp47shceghd505ew86vvmzc&raw=1)

At this point, we will see many different calls and loaded resources. Let's select what interests us - by selecting the given element.

The HEADERS tab in the HTTP header verification tool is most useful for verification purposes. It contains general information about
- the request,
- the HTTP method used,
- the server's return code,
- the IP address with the port, and
- a summary of the headers that were included in the HTTP response.

Additionally, the tool also has PREVIEW, RESPONSE, COOKIES, and TIMING tabs, which respectively present a preview of the site, the full source code of the page, a summary of cookies associated with the site along with the current flags, and the performance and speed of the site.


## Selected HTTP Headers and Their Impact on Security
### HTTP Strict-Transport-Security (HSTS)

The consequence of implementing the HSTS mechanism is to enforce the use of an encrypted HTTPS connection on the user, which ensures data security. Additionally, in the event of a certificate error, the user does not have the option to bypass the warning (Click-Through Insecurity). However, this mechanism does not protect the user on the first access to the site if it does not use the option of being on the preload list.

The HSTS header allows websites to indicate to browsers that they should always load them via the HTTPS protocol. The parameters max-age, includeSubDomains, and preload specify how long the browser should remember that the site is available only over HTTPS, whether the rule also applies to subdomains, and whether the site should be added to the HSTS Pre-Loaded List. Using the preload directive has permanent consequences, so if the site owner decides to give up HTTPS, they can do so through the https://hstspreload.org/removal/ page.

The HSTS header allows websites to indicate to browsers that they should always load them via the HTTPS protocol.

Parameters:
- max-age,
- includeSubDomains,
- preload

determine how long the browser should remember that the site is available only over HTTPS, whether the rule also applies to subdomains, and whether the site can be added to the HSTS Pre-Loaded List. Using the preload directive is associated with permanent consequences, and if the site owner decides to abandon it, they can do so through the https://hstspreload.org/removal/ page.

Values for individual directives can be presented in a simple table:

| DIRECTIVE NAME    | VALUE DESCRIPTION | RECOMMENDED VALUE | DIRECTIVE TYPE |
|-------------------|-------------------|-------------------|----------------|
| max-age           | validity time     | 31536000          | REQUIRED       |
| includeSubDomains | nd.               | nd.               | OPTIONAL       |
| preload           | nd.               | nd.               | OPTIONAL       |

nd. means that the directive does not require any value.

The includeSubDomains directive is an important element that ensures protection against cookie leakage. If it is not set, there is a risk that the attacker will have access to cookies, even if they have the Secure attribute. To ensure full protection, the includeSubDomains directive must be active. Otherwise, there is a risk that cookies will be exposed even after displaying a warning about an invalid certificate. Therefore, it is important to make sure that the includeSubDomains directive is set to ensure full protection against cookie leakage.

An example of an HSTS header with recommended values:

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

To verify the current settings or the presence of HSTS for a given site, we can use the net-internals tool in the Google Chrome browser by typing chrome://net-internals/#hsts into the address bar. To ensure proper operation of the site, it should be prevented from operating on the server side via HTTP. When the user enters through an unencrypted communication channel, there should be an automatic redirect to HTTPS without initiating any HTTP communication.

![pb-Xnoyj6SRpO.png](https://www.dropbox.com/scl/fi/809858xxs0hyfnau0ws3k/pb-t0SS4Dfp3F.png?rlkey=brya18of9wzdcollgx2cwl0do&raw=1)

Strict-Transport-Security (STS) is a mechanism that allows for increased security of HTTPS connections. To implement it, you need to add appropriate rules for popular web servers.

- For Apache, you should set the header Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload".

```
<filter>
	<filter-name>httpHeaderSecurity</filter-name>
	<filter-class>org.apache.catalina.filters.HttpHeaderSecurityFilter</filter-class>
	<async-supported>true</async-supported>
	<init-param>
		<param-name>hstsEnabled</param-name>
		<param-value>true</param-value>
	</init-param>
<init-param>
	<param-name>hstsMaxAgeSeconds</param-name>
	<param-value>31536000</param-value>
</init-param>
<init-param>
	<param-name>hstsIncludeSubDomains</param-name>
	<param-value>true</param-value>
</init-param>
<init-param>
	<param-name>hstsPreload</param-name>
	<param-value>true</param-value>
</init-param>
</filter>
```

- For Nginx, you need to add the header add header Strict-Transport-Security "max-age=31536000; includeSub-Domains; preload" always.
- For IIS:

```
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
	<system.webServer>
		<httpProtocol>
			<customHeaders>
				<add name="Strict-Transport-Security" value=" max-age=31536000; includeSubDomains; preload" />
			</customHeaders>
		</httpProtocol>
	</system.webServer>
</configuration>
```


### Referrer-Policy

It specifies what information or parts of it should be sent in the Referer header in the query regarding the address from which the redirection occurred. The Referer header can be the cause of leakage of important information when the user goes to an external site. An example scenario shows what this might look like in practice. The user is on the internal company portal, where there are customer and project information. When they click on a link to a competing company, information about the address from which they were redirected leaks. Referrer-Policy specifies what information should be sent in the Referer header to prevent data leaks.

Let's start with an example HTTP request with the Referer header highlighted:

```
GET /manager HTTP/1.1
Host: internal.sekurak.pl
Referer: http://sekurak.pl/teksty/
```

The Referer header is often used for many purposes, such as analysis and statistics, to see where users come from, or as an additional form of protection against Cross-Site Request Forgery (CSRF) attacks. There are various parameters available for the Referrer-Policy header, such as 'no-referrer', 'no-referrer-when-downgrade', 'same-origin', 'origin', 'strict-origin', and 'strict-origin-when-cross-origin'. Each has its own application and advantages.

a. no-referrer-when-downgrade - is the default setting if the policy is not defined. This means that the address of the page from which the user is redirected will be sent only when the same type of protocol is used.

b. no-referrer - means that the Referer header will not be sent.

c. origin - means sending only the origin value, i.e., the address of the page without the exact path (e.g., only the address https://sekurak.pl).

d. origin-when-cross-origin - means sending the full path (https://sekurak.pl/teksty/) in the case of the same origin, and in other cases only the origin value (https://sekurak.pl).

e. same-origin - means sending the full path in the case of the same origin, and in other cases no data will be transmitted in the Referer header.

f. strict-origin - means sending only the origin value in the case of communication with the same protocol, and in the case of switching to less secure communication, no header will be sent.

g. strict-origin-when-cross-origin - means sending the full path in the Referer header only in queries going out to the same origin, and in other cases, the behavior is the same as for the strict-origin value.

h. unsafe-url - is a policy setting that allows displaying the full value of the address of the page from which the user was redirected when the query occurs from any type of protocol. This setting can cause the Referer value to be disclosed when switching to less secure communication (HTTPS -> HTTP).


### X-Content-Type-Options

Informs the browser not to try to interpret certain resources as a different type than declared in the Content-Type header. The lack of this header can cause the browser to try to determine the format of the file on its own, which can lead to unexpected and potentially dangerous consequences. An example might be a situation where it is possible to send a file to the server, but after it is sent, the extension is removed from the file name. Adding HTML code can cause the browser to determine the file format on its own, which can allow an XSS attack to be executed.

Its recommended value is "nosniff", which means that the browser should interpret files in accordance with the value of the Content-Type header. Using this header can help prevent MIME-sniffing attacks, which can be used to perform cross-site scripting attacks. Using this header can help ensure site security and protect users from potential attacks.


### Feature-Policy

The security header feature-policy allows you to control access to browser features, such as selecting a location, using a microphone, displaying notifications, etc. This allows you to limit access to these features to specific sites, which increases the security and privacy of users.


### X-Frame-Options

The X-Frame-Options header allows you to specify whether it is possible to load a page in a frame. Its implementation increases protection against Clickjacking attacks. Three parameters are available:

- deny,
- sameorigin,
- allow-from URI.

An example of an X-Frame-Options header with recommended values is X-Frame-Options: SAMEORIGIN. Currently, the Content-Security-Policy header with the frame-ancestors directive is increasingly used to limit the loading of a page in a frame, which means that X-Frame-Options will likely be replaced by it.


In order to secure access to data resources, simple IP address verification is used. The implementation of this filtering is done by checking the values of various headers, such as X-Forwarded-For, X-Forwarded-Host, X-Forwarded-IP, X-Remote-IP, X-Remote-Addr, X-Real-IP, Client-IP, X-Client-IP, X-InternalIP, x-Originating-IP, X-Originated-IP, X-Backend, X-Backend-Name, X-Backend-Host, X-Backend-Addr, X-Backend-IP, X-Backend-Server. To attempt to bypass the imposed filters, just send a simple query to the given location with the addition of one or more of the above headers.

```
GET /manager HTTP/1.1
Host: internal.sekurak.pl
X-Forwarded-For: 127.0.0.1
```

Bypassing security using HTTP headers is a technique that allows you to impersonate another IP address or URL, perform an Open Redirect attack, discover server types, bypass CAPTCHA, enable developer mode, and poison access logs. This is particularly dangerous because it allows bypassing restrictions imposed in the context of access from a specific IP address, as well as sending a victim of an attack an email with a replaced link.

---
