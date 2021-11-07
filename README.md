# Preview
![](https://i.imgur.com/7Ua1buQ.png)

# Setup
1. Make sure to have your [github.io](https://pages.github.com) site
2. Fork the repository
3. Edit the config.json file
4. Watch your site live at <githubusername>.github.io/Links/

# Configuration
- `name`: Your name (Used as variable in the title)
- `desc`: A short description for you (Used as variable in the title)
- `image`: A direct link to your profile image (Used in the site icon and the site links page)
- `title`: The website title (You may use `{Name}` and `{Desc}` as variables)
- `theme-settings`: Set of theme settings
  - `background-color`: Theme color and site background color
  - `text-color`: color of all texts on the site
- `links`: A list with the icons and links.
- `repo`: If you want to use the projects feature fill in this setting, set to `none` or `null` to disable it.
- `project-list-settings`: Set of settings for the project list
  - `background-color`: Background color of a single card
  - `title`: Set of title settings
    - `color`: Color of the title
    - `font-size`: Font size of the title
    - `bold`: true if the title should be bold, false otherwise
  - `description`: Set of description settings
    - `color`: Color of the description
    - `font-size`: Font size of the description
# Links Format
```json
{"url": "https://example.com/", "display": "fab fa-twitter"}
```
- `url`: The url of the site
- `display`: The classes for the display icon. Use [fontawesome.com](https://fontawesome.com/) to search for icons, then select the icon and grab the class of it.

# Adding projects to the list
Once you've linked the repo just create a new issue (must remain open) with the following format:
```
body:Body of the project card
icon:none|direct url
fontawesomeicon:classes
url:somerandomurl
```
- `title`: The title of the issue will be the title of the card
- `body`: The body of the project card
- `icon`: The icon of the project card, set to none or remove at all to remove the icon. You must use the direct url
- `fontawesomeicon`: The fontawesome icon of the project card, set to none or remove at all to remove the icon. You may add as many fontawesome classes as you want.
- `url`: The url of the project card, set to none or remove at all to remove the url. This url will be used when someone clicks the card

> Remember to use only the icon _OR_ the fontawesome icon, not both. By default the icon will have priority

You may [check the issues](https://github.com/FranciscoSolisMat/Links/issues) for the project list to see how it works.

# Where to find the FontAwesome class?
![](https://i.imgur.com/D8CjZue.png)
  
# How to update the project?
I would recommend you to download the zip of this code, modify the settings and then upload your data to github
