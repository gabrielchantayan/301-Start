# 301 Start
A simple startpage for your home server written in Node.JS


# Installation
1. Download and extract the repository
2. Edit and configure `apps.json` 
3. Run `$npm start`

On Linux, it is recommended you `git clone` to `/opt/301Start`


# Configuration
**301 Start**'s configuration is located in `config.json`.

The default configuration is 

```json
{
    "name": "301 Start",
    "theme": "main-dark"
}
```

`name` is what will appear at the top and title of the startpage, and `theme` is the theme.

Current applicable themes are `main-dark` (default), `main-light`, `solarized-dark`, and `solarized-light`.  Themes can be easily created by editing `css/main.scss`.


# Apps
Apps are listed in `apps.json`.  **301 Start** already comes with some apps pre-listed, but it's reccommended you change those.

An example configuration follows
```json
{
    "left": {
        "CATEGORY": {
            "APPNAME": {
                "name": "APP NAME",
                "link": "http://LINK.com",
                "desc": "DESCRIPTION OF THE LINK"
            }
        },
        
    },
    "middle": {
        "CATEGORY": {
            "APPNAME": {
                "name": "APP NAME",
                "link": "http://LINK.com",
                "desc": "DESCRIPTION OF THE LINK"
            }
        },
    },
    "right": {
        "CATEGORY": {
            "APPNAME": {
                "name": "APP NAME",
                "link": "http://LINK.COM",
                "desc": "DESCRIPTION OF THE LINK"
            }
        },
    }
}
```

Bolded entries are things to be edited