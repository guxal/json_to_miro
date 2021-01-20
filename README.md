# json_to_miro

use this script to convert json format to graphics on miro.com 

### So far only accepted:

- a level of impression

- object type in children

- object array

### Coming Soon:

- print all children

- print array

- print null


### TEST JSON
```json
{
    "biologia":"natulareza",
    "matematicas":"numeros",
    "español":"letras",
    "other":{
        "other1":"other text",
        "other2":1212
    },
    "simple":[
        {
            "text":"one text"
        },
        {
            "text":"two text"
        }
    ]
}

```

## Result 
![result json](https://raw.githubusercontent.com/guxal/json_to_miro/main/img/jsonmiro.png)

## How to Use

login to your miro account go to a board and open the developer console and look for the loaded SDK message, after this you just have to copy and paste the function to your console and you can use it by passing the json you want to convert.


```javascript
var json = "<your json>";
json_to_miro(json);
```

Enjoy.


> this uses the miro SDK for more information see [developers miro](https://developers.miro.com/)
