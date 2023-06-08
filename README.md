# Dress code ([demo](https://tito433.github.io/dress-code/))

This application converts any text message into wearable dress codes. Consider every day as a bit which can be either zero or one. Say when you wear black shirts will represents zero and red shirts for one. Hence every day you can print or display one bit using black or red dress. In a week you can display an alphabet.

## The ASCII table for 5 bits

| Alphabet  | ASCII value | Binary |
| ------------- | ------------- | ------------- |
| A  | 1  | 00001 |
| B  | 2  | 00010 |
| C  | 3  | 00011 |
| D  | 4  | 00100 |
| E  | 5  | 00101 |
| F  | 6  | 00110 |
| G  | 7  | 00111 |
| H  | 8  | 01000 |
| I  | 9  | 01001 |
| J  | 10  | 01010 |
| K  | 11  | 01011 |
| L  | 12  | 01100 |
| M  | 13  | 01101 |
| N  | 14  | 01110 |
| O  | 15  | 01111 |
| P  | 16  | 10000 |
| Q  | 17  | 10001 |
| R  | 18  | 10010 |
| S  | 19  | 10011 |
| T  | 20  | 10100 |
| U  | 21  | 10101 |
| V  | 22  | 10110 |
| W  | 23  | 10111 |
| X  | 24  | 11000 |
| Y  | 25  | 11001 |
| Z  | 26  | 11010 |
|< space >| 27 |11011|


### `Example`

Say you want to print `TIME`. First, We split each alphabet and get binary values:
| Alphabet  | ASCII value | Binary |
| ------------- | ------------- | ------------- |
| T  | 20  | 10100 |
| I  | 9  | 01001 |
| M  | 13  | 01101 |
| E  | 5  | 00101 |

Then for each alphabet we assign it to a week. So for `T(10100)` your dress code for a week will be:
| Days | Sunday  | Monday | Tuesday | Wednesday | Thursday  | Friday | Saturday |
| ------------- | -------------  | ------------- | ------------- | ------------- | -------------  | ------------- | ------------- |
| <b>Binary</b> | 1  | 0 | 1 | 0 | 0  |  |  |
| <b>Color</b>  | Red  | Black | Red | Black | Black  |  |  |

You do this for the rest of the alphabets. 
Now you have the idea. Write a novel or poem or send secret message. Here's the app output:

![Demo](public/demo.png)

>Your only limitation is your imagination.