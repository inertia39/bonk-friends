// ==UserScript==
// @name         Bonk Friends
// @version      0.2.0
// @description  Notifies user when friends are online
// @author       Inertia `int#0039`
// @namespace    https://greasyfork.org/en/users/925582
//@license       MIT
// @match        https://bonk.io/gameframe-release.html
// @grant        none
// @run-at       document-end
// ==/UserScript==

/* thanks to Salama/Salamana_ for pitching the idea, go say hi to him `Salama#2411` :)
 */
(function() {

    var masterVar = true;
        const offlineGet = Array.from(document.getElementById("friends_offline_table").getElementsByClassName("friends_cell_name")).map(e => {
            return e.textContent
        });
        const onlineGet = Array.from(document.getElementById("friends_online_table").getElementsByClassName("friends_cell_name")).map(e => {
            return e.textContent
        });
        setTimeout(() => {
            setInterval(() => {
                const offlineGet = Array.from(document.getElementById("friends_offline_table").getElementsByClassName("friends_cell_name")).map(e => {
                    return e.textContent
                });
                const onlineGet = Array.from(document.getElementById("friends_online_table").getElementsByClassName("friends_cell_name")).map(e => {
                    return e.textContent
                });
                document.getElementById("friends_refresh_button").click();
                    setTimeout(() => {
                        const offlineGet = Array.from(document.getElementById("friends_offline_table").getElementsByClassName("friends_cell_name")).map(e => {
                            return e.textContent
                        });
                        const onlineGet = Array.from(document.getElementById("friends_online_table").getElementsByClassName("friends_cell_name")).map(e => {
                            return e.textContent
                        });
                        const onlineGetFancy = onlineGet.join(' - ');
                        onlineNotifyBar.style = `
                        min-height:38vw;
                        max-height:38vw;
                        min-width:14vw;
                        max-width:14vw;
                        position:absolute;
                        right:1%;
                        top:60px;
                        font-family:'futurept_b1';
                        border-bottom-left-radius:3px;
                        border-bottom-right-radius:3px;
                        background-color:#e2e2e2;
                        padding-top:3vw;
                        padding-left:5px;
                        padding-right:5px;
                        `;
                        onlineNotifyBarTop.innerText = 'Online Friends';
                        onlineNotifyBarTop.style = `
                        font-family:'futurept_b1';
                        font-size:20px;
                        color:white;
                        text-align:center;
                        min-height:3vw;
                        max-height:3vw;
                        min-width:14.8vw;
                        max-width:14.8vw;
                        line-height:3vw;
                        width:35.2vw;
                        position:absolute;
                        right:1%;
                        top:55px;
                        border-top-left-radius:3px;
                        border-top-right-radius:3px;
                        background-color:#009688;
                        `;
                        onlineNotifyBar.innerText = onlineGetFancy;
                        console.log(`Bonk friends found`);
                    }, 7000);
            }, 30000);
        }, 7200);
        let onlineNotifyBar = document.createElement("div");
        document.body.appendChild(onlineNotifyBar);
        let onlineNotifyBarTop = document.createElement("div");
        document.body.appendChild(onlineNotifyBarTop);
        var guestButton = document.getElementById('guestOrAccountContainer_guestButton');
        guestButton.addEventListener("click", function() {
            masterVar = false;
            alert('Bonk friends is now disabled! You are playing as a Guest so the script will be turned off for the time being.');
        });
        // debugger, not important
        /* setTimeout(() => {
            debugger;
         }, 8000);
         setTimeout(() => {
             console.log('Debugger failed to stop code!');
         }, 9000);*/

})();
