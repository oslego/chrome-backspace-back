# Backspace to go Back

Google Chrome extension that restores browser behavior of navigating to previous page when pressing the Backspace key.

This behavior was removed since [Chrome 52](https://codereview.chromium.org/1854963002).

**Update 8-16-2016:** Google has since released an official extension that offers this functionality. [Go Back with Backspace](https://chrome.google.com/webstore/detail/go-back-with-backspace/eekailopagacbcdloonjhbiecobagjci) by Google, available in the Chrome Web Store.

## How to install

### From the Chrome Web Store

- Install from the [Chrome Web Store](https://chrome.google.com/webstore/detail/backspace-to-go-back/nlffgllnjjkheddehpolbanogdeaogbc)

### From source

This extension requires permissions to access content on all the pages you visit. It's ok if that freaks you out. Handing over those permissions freaks me out too.

Here's a way to install this extension from a copy of the source so you can always read it (it's very short) and be sure it's not doing anything malicious. Automatic updates do not work with locally installed extensions. That should make you feel even safer.

- Clone or download this repository:
  ```
  git clone git@github.com:oslego/chrome-backspace-back.git
  ```
- Navigate to `chrome://extensions` in Chrome's URL bar;
- Tick the box that says _Developer mode_;
- Click _Load unpacked extension_;
- Select the cloned repository folder.


## Credits
- Icon: [Backspace by Rflor](https://thenounproject.com/term/backspace/300516/) from the Noun Project.
