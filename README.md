# dir2json
Creates a json file describing a nested directory 

##Usage
1. `npm install -g folder2json`
2. `cd <folder>/<to>/<copy>`
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
