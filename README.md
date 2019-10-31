# folder2json
Creates a json file describing a nested directory 

This can be used in combination with [Tree View Javascript packages](https://www.jqueryscript.net/blog/Best-Tree-View-Plugins-jQuery.html) to navigate your nested directories on the web.

## Example (With [`js-treeview`](https://github.com/justinchmura/js-treeview)
![directory-navigation](https://user-images.githubusercontent.com/37255664/67993054-03cb4500-fca4-11e9-9dc9-f9bb2dddc722.gif)

## Usage Instructions
1. `npm install -g folder2json`
2. `cd <folder you wish to folder2json>`
3. `folder2json`

Example Output:
```
{
    "path": "./",
    "name": ".",
    "children": [
        {
            "path": "darkness",
            "name": "darkness",
            "children": [
                {
                    "path": "darkness\\_meaning",
                    "name": "_meaning",
                    "children": [
                        {
                            "path": "darkness\\_meaning\\creation.m",
                            "name": "creation.m",
                            "size": 204,
                            "extension": ".m",
                            "type": "file"
                        },
                        {
                            "path": "darkness\\_meaning\\darkness.c",
                            "name": "darkness.c",
                            "size": 18,
                            "extension": ".c",
                            "type": "file"
                        },
                        {
                            "path": "darkness\\_meaning\\despair.t",
                            "name": "despair.t",
                            "size": 44805,
                            "extension": ".t",
                            "type": "file"
                        },
                        {
                            "path": "darkness\\_meaning\\fear.t",
                            "name": "fear.t",
                            "size": 50013,
                            "extension": ".t",
                            "type": "file"
                        },
                        {
                            "path": "darkness\\_meaning\\origins.txt",
                            "name": "origins.txt",
                            "size": 299,
                            "extension": ".txt",
                            "type": "file"
                        }
                    ],
                    "size": 95339,
                    "type": "directory"
                }
            ],
            "size": 95339,
            "type": "directory"
        }
    ],
    "size": 95339,
    "type": "directory"
```
