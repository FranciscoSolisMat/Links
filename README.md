# Preview
![](https://i.imgur.com/b2zv3Rg.png)

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
- `theme-color`: The background color for the site
- `links`: A list with the icons and links.

# Links Format
```json
{"url": "https://example.com/", "display": "fab fa-twitter"}
```
- `url`: The url of the site
- `display`: The classes for the display icon. Use [fontawesome.com](https://fontawesome.com/) to search for icons, then select the icon and grab the class of it.

# Where to find the FontAwesome class?
![](https://i.imgur.com/D8CjZue.png)
