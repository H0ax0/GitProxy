'use strict';

function initBody() {
    $("a").each(function (i, el) {
        let href_value = el.href;
        let href_value_proxy = href_value.replace("github.com", "nexus.uclv.edu.cu/repository/github.com");
        if (!$(el).hasClass("github_proxy") && /[^\\]*\.(zip|gz|bz2|lz|lzma|lzo|rz|sfark|sz|xz|7z|s7z|ace|afa|alz|apk|arj|b1|ba|bh|cab|car|cfs|dar|dmg|jar|kgb|lzx|pak|rar|sfx|tgz|Z|bz2|tbz2|tlz|war|win|xar|zipx|zz|ar|cpio|tar|lbr|appx|appxbundle|deb|ebuild|orb|pisi|pkg|pup|pet|rpm|snap|appimage|dmg|exe)$/.test(href_value.toLowerCase())) {
            console.log("Redirecting from: " + href_value + "\nto: " + href_value_proxy);
            $(el).addClass("github_proxy");
            $(el).click(function () {
                window.location.href = href_value_proxy
                return false;
            });

        } else {

        }
    });
};
initBody();

chrome.runtime.onMessage.addListener(request => {
    initBody();
});
