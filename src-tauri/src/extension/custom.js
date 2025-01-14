/*
 * This file serves as a collection point for external JS and CSS dependencies.
 * It amalgamates these external resources for easier injection into the application.
 * Additionally, you can directly include any script files in this file
 * that you wish to attach to the application.
 */
console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)

document.addEventListener('DOMContentLoaded', () => {
    const originalWindowOpen = window.open
    window.open = function (url, _, features) {
        return originalWindowOpen.call(window, url, '_self', features)
    }
    console.log('window.open has been overridden to open in the current page.')
})

document.addEventListener('DOMContentLoaded', () => {
    const targetNode = document.body
    // 配置观察选项
    const config = {
        childList: true,
        subtree: true,
    }
    const observer = new MutationObserver((mutationsList, observer) => {
        let htmlContent = document.documentElement.innerHTML
        console.log(
            'window.open has been overridden to open in the current page.'
        )
        for (const mutation of mutationsList) {
            if (
                mutation.type === 'childList' &&
                htmlContent.includes('_blank')
            ) {
                const links = document.querySelectorAll('a[target="_blank"]')
                links.forEach((link) => {
                    link.addEventListener('click', function (event) {
                        event.preventDefault()
                        window.location.href = link.href
                    })
                })
            }
        }
    })
    observer.observe(targetNode, config)
})
// tem.js
document.addEventListener("DOMContentLoaded", function () {
  // 获取当前时间戳
  const timestamp = new Date().getTime();

  // 拼接URL并跳转

  // if (
  //   window.location.href.indexOf("timestamp") < 0 &&
  //   window.location.href.indexOf("/login") >= 0
  // ) {
  //   window.location.href = window.location.href + "?timestamp=" + timestamp;
  // }
  console.log("window loaded", window.location.href);
  window.onload = function () {
    if (window.process && window.process.type === "renderer") {
      const { BrowserWindow } = require("electron").remote;
      const win = BrowserWindow.getFocusedWindow();
      if (win) {
        win.maximize();
      }
    }
  };

  //
});

// end tem.js
