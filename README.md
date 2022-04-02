# Read this documentation

<br />

Here is the documentation of how to run this application

<br />

## Environment

<br />

Do not forget change database.json first before you migrate

<br />

And inside in

```bash
app/config/connection.js
```

<br />

## System requirements

<br />

Node version V16.14.2

<br />

Npm version 8.5.0

<br />

## How to create table with migration

<br />

```bash
npm run migrate:up
```
<br />

## Run your server

<br />

```bash
npm run serve
```
<br />

## Endpoint testing

<br />

Please use postman or the like

<br />

To "GET" all province Data

<br />

```bash
http://localhost:3000/province
```
<br />

To "GET" by Id province Data put your id after '/'

<br />

```bash
http://localhost:3000/province/1
```
<br />

POST data
{
    "province_name":"your province"
}

<br />

```bash
http://localhost:3000/province
```
<br />

PATCH data
do not forget replace your current id after "/"
{
    "province_name":"your province"
}

</br>

```bash
http://localhost:3000/province/1
```
</br>

DELETE data
do not forget replace your current id after "/"

</br>

```bash
http://localhost:3000/province/1
```
