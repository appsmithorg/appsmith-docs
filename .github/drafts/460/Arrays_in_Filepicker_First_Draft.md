## Problem

If our users want to display csv data from they upload. They have to first parse it and then display it. Sometimes the parsing logic is not accurate so developers face challenges in displaying data.

## Solution

Within filepicker widget, we now support Arrays as an option for data type to parse CSV data. This option will directly parse csv data into an array/array of objects which can then be referenced anywhere inside appsmith

## Steps

1. Set the file type to csv
2. Set the data type to arrays
3. Reference filepicker.files[index].data to get the details in array data

## Auto infer

We have a new property called `Infer data types from csv` 

- When enabled, this will automatically infer data types from the csv file uploaded. If turned off, then it will parse all the columns as strings.

## When will it not work

1. This only works for csv data for now, not xls or other formats
    1. When the file type is not csv we show an empty array `[]` when user has selected the data type to be arrays
2. This will work until the size of data is less than 2MB, post which we will show it as blob file. For greater than 2MB the dev has to upload the data to a database because performance of the app might take a hit.
