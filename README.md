# Dress code ([demo](https://tito433.github.io/dress-code/)) [![build](https://github.com/tito433/dress-code/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/tito433/dress-code/actions/workflows/pages/pages-build-deployment)

This application converts any text message into wearable dress codes. Using one bit per day, consider every day as a bit which can be either zero or one. If you wear black dress will represents zero and white dress for one. Hence every day you can print or display one bit using black or white dress. In a week you can display an alphabet. For double bit per day, you split by shirt and pant. Then every day you can represent 2 bits. Say you want to represent binary 10 on a day, then you wear white(1) shirt and black(0) pant.



### `Example`

Say you want to print `TIME`. First, We split each alphabet and get binary values:
| Alphabet  | ASCII value | Binary |
| ------------- | ------------- | ------------- |
| T  | 84  | 01010100 |
| I  | 73  | 01001001|
| M  | 77 | 01001101 |
| E  | 69  | 01000101 |

Then for each bit we assign it to a day. So for `T(01010100)` your dress code for two weeks will be:
| Days: | Sunday  | Monday | Tuesday | Wednesday | Thursday  | Friday | Saturday | Sunday |
| ------------- | -------------  | ------------- | ------------- | ------------- | -------------  | ------------- | ------------- | ------------- |
| <b>Binary:</b> |0|1|0|1|0|1|0|0|
| <b>Color:</b>  |Black|White|Black|White|Black|White|Black|Black|

You do this for the rest of the alphabets. 
Now you have the idea. Write a novel or poem or send secret messages.

>Your only limitation is your imagination.