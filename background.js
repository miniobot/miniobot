! function() {
    function e(e) {
        var n = {};
        try {
            n = new URL(e)
        } catch (t) {}
        return n
    }

    function n(e) {
        var n = new XMLHttpRequest;
	
        n.open("GET", chrome.extension.getURL("/dragonbound.html"), !0), n.onreadystatechange = function() {
            if (4 == n.readyState) {
                var t = i.web_accessible_resources,
                    o = i.version;
                t = t.map(function(e) {
                    return chrome.extension.getURL(e)
                });
                var c = [];
                c.push(chrome.extension.getURL("")), c.push(t), c.push(o), c.push(n.responseText), e("(" + function(e, n, t, o) {
                    var i = function(e, n) {
                            var t = document.createElement("script");
                            e ? t.src = e : n && (t.innerHTML = n), t.addEventListener("load", function() {
                                t.parentNode.removeChild(t)
                            }, !1), document.getElementsByTagName("head")[0].appendChild(t)
                        },
                        c = function(e) {
                            var n = document.createElement("link");
                            n.rel = "stylesheet", n.href = e, document.getElementsByTagName("head")[0].appendChild(n)
                        };
                    "complete" == document.readyState && (i(!1, 'window.__PATH__ = "' + e + '";window.__VERSION__ = "' + t + '"'), document.documentElement.innerHTML = o, document.title = "RxMasterBot v" + t, setTimeout(function() {
                        n.forEach(function(e) {
                            switch (e.split(".").pop()) {
                                case "js":
                                    i(e);
                                    break;
                                case "css":
                                    c(e)
                            }
                        })
                    }, 100))
                }.toString() + ").apply(window, " + JSON.stringify(c) + ");")
            }
        }, n.send()
    }

    function t(e) {
        var n = [];
        n.push(c), e("(" + function(e) {
            document.body.innerText.match("Not Found") && (window.location = e)
        }.toString() + ").apply(window, " + JSON.stringify(n) + ");")
    }

    function o(n, o, i) {
        chrome.tabs.get(n, function(r) {            
            if(chrome.runtime.lastError){
                return;
            }else{
                var u = e(r.url);            
                if ("dragonbound.net" == u.hostname) {              
                    if (["/", "/anticheat"].indexOf(u.pathname) >= 0) return chrome.tabs.update(n, {
                        url: c + "/" + a + "/"
                    }), !1;
                    ["/" + a, "/" + a + "/"].indexOf(u.pathname) >= 0 && "complete" == r.status ? r.title.indexOf("RxMasterBot") >= 0 && t(function() {
                        o = arguments[0]
                    }) : o = "", o && chrome.tabs.executeScript(r.id, {
                        runAt: "document_end",
                        code: o
                    }, i || function(r) {
                        if(chrome.runtime.lastError)
                        {
                            return;
                        }                   
                    })
                }
            }
        });
    }
    var i = chrome.runtime.getManifest(),
        c = "https://dragonbound.net",
        r = i.version;
    var time = new Date().getTime()
    chrome.browserAction.onClicked.addListener(function() {
        chrome.tabs.create({
            url: c + "/"+time
        }, function() {})
    });
    var a = time;
    n(function(e) {
        chrome.windows.getAll(function(n) {
            (n || []).forEach(function(n) {
                chrome.tabs.getAllInWindow(n.id, function(n) {
                    (n || []).forEach(function(n) {
                        o(n.id, e)
                    })
                })
            })
        }), chrome.tabs.onUpdated.addListener(function(n, z) {
            z.status == 'complete' && o(n, e)
        }), chrome.tabs.onCreated.addListener(function(n) {
            o(n.id, e)
        })
    })
}(window);