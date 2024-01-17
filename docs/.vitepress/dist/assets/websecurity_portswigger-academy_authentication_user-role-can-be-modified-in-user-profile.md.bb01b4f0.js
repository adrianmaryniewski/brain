import{_ as e,c as s,o as t,N as o}from"./chunks/framework.0799945b.js";const w=JSON.parse('{"title":"User role can be modified in user profile","description":"","frontmatter":{},"headers":[],"relativePath":"websecurity/portswigger-academy/authentication/user-role-can-be-modified-in-user-profile.md"}'),a={name:"websecurity/portswigger-academy/authentication/user-role-can-be-modified-in-user-profile.md"},n=o(`<h1 id="user-role-can-be-modified-in-user-profile" tabindex="-1">User role can be modified in user profile <a class="header-anchor" href="#user-role-can-be-modified-in-user-profile" aria-label="Permalink to &quot;User role can be modified in user profile&quot;">​</a></h1><p>Link: <a href="https://portswigger.net/web-security/access-control/lab-user-role-can-be-modified-in-user-profile" target="_blank" rel="noreferrer">https://portswigger.net/web-security/access-control/lab-user-role-can-be-modified-in-user-profile</a></p><p><img src="https://www.dropbox.com/scl/fi/daytbsg9cj4rtua5nz0ix/pb-hV5DUVrRAH.png?rlkey=nfwjlq6ni4fdi5ur78xihx70i&amp;raw=1" alt="user role can be modified in user profile"></p><p>We click &quot;Access the lab&quot;, and an online store appears with the option to log in under the &quot;My account&quot; tab. We use the login data from the task description.</p><p><img src="https://www.dropbox.com/scl/fi/2dx2r7ocsrwjonwro5qf6/pb-Nu79NGvif0.png?rlkey=fmm7x5uaq7edd58kq6jy6bzcg&amp;raw=1" alt="user role can be modified in user profile login panel"></p><p>To keep things organized, I add the page by selecting &quot;Add to scope&quot;:</p><p><img src="https://www.dropbox.com/scl/fi/puyberebd82dss1fobci2/pb-GK2DPOAAmq.png?rlkey=72qlkvoe1ttpqnvbxz4y3gkrr&amp;raw=1" alt="my-account add to scope"></p><p>Next, I go to the &quot;Target&quot; &gt; &quot;Scope settings&quot; tab:</p><p><img src="https://www.dropbox.com/scl/fi/cclnyzgsmgjfhndjkhok7/pb-xcOUzqAAOk.png?rlkey=l2a46ejq1xdupv93t2udd79qm&amp;raw=1" alt="target &gt; scope settings"></p><p>I select and edit the page in the &quot;Prefix&quot; column. Before editing:</p><p><img src="https://www.dropbox.com/scl/fi/mcc51el0x2tndv2rsdv1x/pb-qhDzBTDIjj.png?rlkey=8blc1gwc9tarej9hu0lvihu8i&amp;raw=1" alt="edit prefix for in-scope URLs"></p><p>After editing:</p><p><img src="https://www.dropbox.com/scl/fi/5hv6hs16uglu8pcmaakbw/pb-OWoxU6EuBU.png?rlkey=4k2rpvik1vlcn5q150ooumfi6&amp;raw=1" alt="edit prefix for in-scope URLs after editing"></p><p>I click &quot;<strong>OK</strong>&quot; to confirm.</p><p>I return to the &quot;Proxy&quot; tab, click on &quot;Filter settings: Hiding CSS, image and general binary content&quot;:</p><p><img src="https://www.dropbox.com/scl/fi/xoo41gldjmjijv7helg4k/pb-4AiE98ZTZ7.png?rlkey=zmxh657fgo1hijtqki31l2a8u&amp;raw=1" alt="filter settings"></p><p>I select the option: &quot;<strong>Show only in-scope items</strong>&quot;:</p><p><img src="https://www.dropbox.com/scl/fi/brufjl8brj5ipgq8mc8mk/pb-LflBSIboE0.png?rlkey=j5y67k24pw2ssqo2r7hzxplo2&amp;raw=1" alt="show only in-scope items"></p><p>We move to the application, if we are logged in and have Burp connected in the background, we change the email for our user:</p><p><img src="https://www.dropbox.com/scl/fi/q8qs6jluqjk1hqyrqqbbr/pb-AI6zuZlef4.png?rlkey=9kkwcum0thsez5sj9q6fn3q0o&amp;raw=1" alt="change the mail of a user"></p><p>After pressing &quot;Update mail&quot;, we see a POST request to the /my-account/change-email endpoint:</p><p><img src="https://www.dropbox.com/scl/fi/4713p7mtvffiy1b4hg605/pb-yjMecVPLKV.png?rlkey=tu4yaipgp1fbxwd2ow3k68t9k&amp;raw=1" alt="post request change email"></p><p>In the &quot;Proxy&quot; &gt; &quot;HTTP history&quot; tab, we can see the response, which includes: superfluous information. For example, our roleid:</p><p><img src="https://www.dropbox.com/scl/fi/l96rrw2y5mzrd5u83t34f/pb-z5BTITn6sc.png?rlkey=7bk1p82bpf47x4h1rfmr36ztv&amp;raw=1" alt="roleid response"></p><p>How can we use this information, knowing that roleid = 2 is the administrator account?</p><p>Right-click on the request in the history and send to &quot;Repeater&quot; - there can also be the keyboard shortcut control + command + r:</p><p><img src="https://www.dropbox.com/scl/fi/by0aim9x43366uxy19p2q/pb-LtbclrC2Am.png?rlkey=h72zod4l4yvcnmyx9m6psw5b7&amp;raw=1" alt="send request to repeater"></p><p>When we go to the &quot;Repeater&quot; tab, we send the modified request - we add a roleid that is equal to 2:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">POST /my-account/change-email HTTP/2</span></span>
<span class="line"><span style="color:#A6ACCD;">Host: 0a0900500486a9868b57a9cc0000007f.web-security-academy.net</span></span>
<span class="line"><span style="color:#A6ACCD;">Cookie: session=Ko7Z7Au4McuM6VcbkHrcGPwB8bVUcLHC</span></span>
<span class="line"><span style="color:#A6ACCD;">Content-Length: 31</span></span>
<span class="line"><span style="color:#A6ACCD;">Sec-Ch-Ua: &quot;Not_A Brand&quot;;v=&quot;8&quot;, &quot;Chromium&quot;;v=&quot;120&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Sec-Ch-Ua-Platform: &quot;macOS&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Sec-Ch-Ua-Mobile: ?0</span></span>
<span class="line"><span style="color:#A6ACCD;">User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.71 Safari/537.36</span></span>
<span class="line"><span style="color:#A6ACCD;">Content-Type: text/plain;charset=UTF-8</span></span>
<span class="line"><span style="color:#A6ACCD;">Accept: */*</span></span>
<span class="line"><span style="color:#A6ACCD;">Origin: https://0a0900500486a9868b57a9cc0000007f.web-security-academy.net</span></span>
<span class="line"><span style="color:#A6ACCD;">Sec-Fetch-Site: same-origin</span></span>
<span class="line"><span style="color:#A6ACCD;">Sec-Fetch-Mode: cors</span></span>
<span class="line"><span style="color:#A6ACCD;">Sec-Fetch-Dest: empty</span></span>
<span class="line"><span style="color:#A6ACCD;">Referer: https://0a0900500486a9868b57a9cc0000007f.web-security-academy.net/my-account?id=wiener</span></span>
<span class="line"><span style="color:#A6ACCD;">Accept-Encoding: gzip, deflate, br</span></span>
<span class="line"><span style="color:#A6ACCD;">Accept-Language: en-GB,en-US;q=0.9,en;q=0.8</span></span>
<span class="line"><span style="color:#A6ACCD;">Priority: u=1, i</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;email&quot;:&quot;wiener@new-user.net&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;roleid&quot;:2</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>What do we see in the response? Roleid equal to 2:</p><p><img src="https://www.dropbox.com/scl/fi/6yqfpnxcjwpfjc0gnp9u2/pb-cGSgw6iECa.png?rlkey=0o6hnkmug5dozfgdor4o353tm&amp;raw=1" alt="roleid = 2"></p><p>So we check what is in the application (refresh the page): <img src="https://www.dropbox.com/scl/fi/atp7qby1wma14qmeveg6v/pb-wwbva9t9wW.png?rlkey=ma8fbo0uvjdhpgq5tl8k508zj&amp;raw=1" alt="admin panel"></p><p>We go to the admin panel, delete the user carlos: <img src="https://www.dropbox.com/scl/fi/ccq6ahwjt8sc53zqgiev9/pb-QQu4d5LO3n.png?rlkey=xa0hrlj2q6laep53vbkkx69ws&amp;raw=1" alt="no more carlos"></p><p>Lab completed:</p><p><img src="https://www.dropbox.com/scl/fi/fg458rg2kxt6k4k1yxwr2/pb-IHkCHVeEP8.png?rlkey=6u26554zjx1ccori9wcitytwu&amp;raw=1" alt="user role can be modified in user profile solved lab"></p>`,35),p=[n];function r(i,l,c,u,d,m){return t(),s("div",null,p)}const g=e(a,[["render",r]]);export{w as __pageData,g as default};